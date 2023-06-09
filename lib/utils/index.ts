import fs from "fs";
import path from "path";

import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";

import { message } from "../../utils/helpers";

import ContentType from "../../utils/types/content";

export const getCms = (example?: boolean) => {
  const jsonString = fs.readFileSync(
    path.join(process.cwd(), "data", example ? "cms.example.json" : "cms.json"),
    {
      encoding: "utf-8",
    }
  );
  return JSON.parse(jsonString) as ContentType["cms"];
};

export const setCms = (cms: ContentType["cms"]) =>
  fs.writeFileSync(
    path.join(process.cwd(), "data", "cms.json"),
    JSON.stringify(cms)
  );

export const getAccount = async (req: NextApiRequest) => {
  const { _id, type } = decryptPayload(req);

  let account;

  return account;
};

export const decryptPayload = (req: NextApiRequest) => {
  const str = req.cookies.user as string;
  const withoutJ = str
    .split("")
    .filter((char, i) => i > 1)
    .join("");

  return JSON.parse(withoutJ);
};

export const handleError = (
  res: NextApiResponse,
  error: any | { message: string }
) => {
  console.log(error);
  res.status(500).send({ message: message(error.message, "danger") });
};

export const methodNotAllowed = (req: NextApiRequest, res: NextApiResponse) =>
  res
    .status(405)
    .json({ message: message(`Method ${req.method} not allowed`, "danger") });

export const updateImage = (
  photo: formidable.File,
  instance: any,
  name: string
) => {
  if (photo.size > 0) {
    if (instance[name] && instance[name] !== "backend/user-pic.svg")
      deleteImage(instance.toObject()[name]!);
    return photo.newFilename;
  } else {
    fs.unlinkSync(photo.filepath);
    return instance[name];
  }
};

export const deleteImage = (image: string) => {
  const file = path.join(process.cwd(), "public", image);
  if (fs.existsSync(file) && image !== "/images/backend/user-pic.svg")
    fs.unlinkSync(file);
};
