import { unlinkSync } from "fs";
import path from "path";

import formidable from "formidable";
import { Model } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import tinify from "tinify";

import { deleteImage, updateImage } from ".";

import { checkValidity, message } from "../../app/helpers/utils";

import ContentType from "../../app/types/content";
import ResourceType from "../../app/types/resource";
import ValidationType from "../../app/types/validation";
import ResourceInputType from "../../app/types/resource-input";

import handleRequest from "../formidable";

type Rules = { [key: string]: ValidationType };
type SendConfig = { fields?: Fields; validate?: Rules };
const validate = async (
  fields: string[],
  _fields: formidable.Fields,
  config?: SendConfig
) => {
  const validation = await Promise.all(
    fields.map(async (key) => {
      let valid = true;
      let messages: string[] = [];
      if (config && config.validate && key in config.validate) {
        const rules = config.validate[key];
        const validation = checkValidity(_fields[key] as string, rules);
        const validity = Object.values(validation).reduce(
          (a, b) => a && b,
          true
        );
        if (!validity)
          messages = Object.entries(validation)
            .filter(([, value]) => !value)
            .map(
              ([rule]) =>
                `Le champ ${key} ${
                  rule === "required"
                    ? "est obligatoire"
                    : rule === "minLength"
                    ? `doit contenir au moins ${rules.minLength} caractères`
                    : rule === "maxLength"
                    ? `doit contenir au plus ${rules.maxLength} caractères`
                    : rule === "isEmail"
                    ? "doit être une adresse mail valide"
                    : rule === "isNumeric"
                    ? "doit être un nombre valide"
                    : rule === "confirm"
                    ? "est différent de l'original"
                    : "est invalide"
                }.`
            );
        valid = validity && valid;
      }

      return [key, valid, messages];
    })
  );

  return validation
    .filter(([, valid]) => !valid)
    .map(([, , messages]) => messages as string[])
    .reduce((a, b) => a.concat(b), []);
};

type Fields = {
  [key: string]: (fields: formidable.Fields) => Promise<any> | any;
};
type Keys = { [key: string]: (instance: any) => Promise<any> | any };
const format = async (
  fields: string[],
  _fields: formidable.Fields,
  config?: SendConfig
) => {
  const input: ResourceInputType = {};
  const entries = await Promise.all(
    fields.map(async (key) => {
      let value: any;
      if (config && config.fields && key in config.fields) {
        const format = config.fields[key];
        if (format(_fields) instanceof Promise) value = await format(_fields);
        else value = format(_fields);
      } else value = _fields[key];

      return [key, value];
    })
  );
  entries.forEach(([key, value]) => {
    input[key] = value;
  });
  return input;
};

export const manageResource = (
  req: NextApiRequest,
  res: NextApiResponse,
  {
    information,
    cms,
    model,
    slug,
    resource,
    singular,
    file,
    fields,
    options,
    data,
  }: {
    data: (
      req: NextApiRequest
    ) => Promise<{ total: number; [key: string]: any[] | number }>;
    information?: () => Promise<{ [key: string]: any }>;

    cms: ContentType["cms"];
    model: Model<any>;
    slug?: string[];
    resource: ResourceType;
    singular: string;

    fields: string[];
    file?: { name: string; uploadDir: string };
    options?: formidable.Options;
  }
) => {
  tinify.key = process.env.TINIFY_KEY!;
  return {
    get: async () => res.json(await data(req)),
    info: !information ? () => {} : async () => res.json(await information()),
    show:
      !slug || !information
        ? () => {}
        : async (config?: { keys?: Keys }) => {
            const instance = await model.findById(slug[0]);
            if (!instance)
              return res.json({
                message: message(
                  cms.backend.messages[resource].not_found,
                  "danger"
                ),
              });

            const input: ResourceInputType = {};
            const entries = await Promise.all(
              fields.map(async (key) => {
                const value =
                  config && config.keys && key in config.keys
                    ? config.keys[key](instance) instanceof Promise
                      ? await config.keys[key](instance)
                      : config.keys[key](instance)
                    : instance[key];
                return [key, value];
              })
            );
            entries.forEach(([key, value]) => {
              input[key] = value;
            });

            return res.json({
              [singular]: { ...instance.toObject(), ...input },
              ...(await information()),
            });
          },
    post: async (config?: SendConfig) => {
      const { fields: _fields, files } = await handleRequest(req, {
        ...options,
        uploadDir: file ? file.uploadDir : undefined,
      });

      const validation = await validate(
        fields,
        <formidable.Fields>_fields,
        config
      );
      if (validation.length > 0)
        return res
          .status(422)
          .json({ message: message(validation.join("\n"), "danger") });

      const input: ResourceInputType = await format(
        fields,
        <formidable.Fields>_fields,
        config
      );

      if (file) {
        const { [file.name]: fileGot } = files;
        if ("size" in fileGot) {
          if ((<formidable.File>fileGot).size > 0) {
            const fileName = path.join(
              file.uploadDir,
              (<formidable.File>fileGot).newFilename
            );

            if (file.uploadDir.includes("images"))
              tinify.fromFile(fileName).toFile(fileName);
            input[file.name] = (<formidable.File>fileGot).newFilename;
          } else unlinkSync((<formidable.File>fileGot).filepath);
        }
      }
      await model.create(input);

      return res.json({
        message: message(cms.backend.messages[resource].created, "success"),
      });
    },
    patch: !slug
      ? () => {}
      : async (config?: SendConfig) => {
          const instance = await model.findById(slug[0]);
          if (!instance)
            return res.json({
              message: message(
                cms.backend.messages[resource].not_found,
                "danger"
              ),
            });

          const { fields: _fields, files } = await handleRequest(req, {
            ...options,
            uploadDir: file ? file.uploadDir : undefined,
          });

          const validation = await validate(
            fields,
            <formidable.Fields>_fields,
            config
          );
          if (validation.length > 0)
            return res
              .status(422)
              .json({ message: message(validation.join("\n"), "danger") });

          const input: ResourceInputType = await format(
            fields,
            <formidable.Fields>_fields,
            config
          );

          if (file) {
            const { [file.name]: fileGot } = files;
            if ("size" in fileGot) {
              if ((<formidable.File>fileGot).size > 0) {
                const fileName = path.join(
                  file.uploadDir,
                  (<formidable.File>fileGot).newFilename
                );

                if (file.uploadDir.includes("images"))
                  tinify.fromFile(fileName).toFile(fileName);
                input[file.name] = updateImage(
                  <formidable.File>fileGot,
                  instance,
                  file.name
                );
              } else unlinkSync((<formidable.File>fileGot).filepath);
            }
          }
          await instance.updateOne(input);

          return res.json({
            [singular]: instance.toObject(),
            message: message(cms.backend.messages[resource].updated, "success"),
          });
        },
    delete: !slug
      ? () => {}
      : async () => {
          const instance = await model.findById(slug[0]);
          if (!instance)
            return res.json({
              message: message(
                cms.backend.messages[resource].not_found,
                "danger"
              ),
            });

          if (file && instance[file.name])
            deleteImage(instance.toObject()[file.name]);
          await instance.deleteOne();

          return res.json({
            ...(await data(req)),
            message: message(cms.backend.messages[resource].deleted, "success"),
          });
        },
  };
};
