import {
  EyeIcon,
  LinkIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from 'react';

import UserAccountType from "@/utils/types/account/user";

import ApiAccountUserType from "@/utils/types/api/account/user";

import { useAccountContext } from "@/utils/contexts/account";
import { useRoleContext } from "@/utils/contexts/role";

import Delete from "./delete";

type ActionProps = {
  item: { _id?: string; link?: string } & any;
  props: { delete: (_id: string) => void };
  resource: string;
};

export default function Action({ item, resource, props }: ActionProps) {
  const {account: data} = useAccountContext();
  const { role } = useRoleContext();

  if (props) {
    resource = resource.split("_").join("-");

    let additionalContent;
    if (role === "user") {
      const feature = data.role.features.find(
        (f) => f.prefix === resource
      );

      additionalContent = (
        <>
          {feature && feature.access.includes("u") && (
            <Link
              href={`/${role}/${resource}/${item._id}/edit`}
              className="mx-1"
            >
              <PencilIcon className="w-5 text-sky" />
            </Link>
          )}
          {feature && feature.access.includes("d") && (
            <span className="mx-1">
              <Delete deleteAction={() => props.delete(item._id!)}>
                <TrashIcon className="w-5 cursor-pointer text-red" />
              </Delete>
            </span>
          )}
        </>
      );
    } else if (role === "admin")
      additionalContent = (
        <>
          <Link href={`/${role}/${resource}/${item._id}/edit`} className="mx-1">
            <PencilIcon className="w-5 text-sky" />
          </Link>
          <span className="mx-1">
            <Delete deleteAction={() => props.delete(item._id!)}>
              <TrashIcon className="w-5 cursor-pointer text-red" />
            </Delete>
          </span>
        </>
      );

    return (
      <div className="flex items-center text-center">
        {item.link && (
          <a href={item.link} target="_blank" rel="noreferrer" className="mx-1">
            <LinkIcon className="w-5 text-blue" />
          </a>
        )}

        <Link href={`/${role}/${resource}/${item._id}`} className="mx-1">
          <EyeIcon className="w-5 text-green" />
        </Link>

        {additionalContent}
      </div>
    );
  }
  return null;
}
