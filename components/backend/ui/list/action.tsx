import {
  ArrowDownOnSquareIcon,
  EyeIcon,
  LinkIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from 'next/router';
import React from "react";

import { useAccountContext } from "@/utils/contexts/account";

import Delete from "./delete";

type ActionProps = {
  item: { _id?: string; link?: string } & any;
  props: { delete: (_id: string) => void };
  resource: string;
};

export default function Action({ item, resource, props }: ActionProps) {
  const { account: data } = useAccountContext();
  
  const { route } = useRouter();
  const role = route.split('/')[1]

  if (props) {
    resource = resource.split("_").join("-");

    let additionalContent;
    if (role === "user") {
      if (!("role" in data)) return null;
      const feature = data.role.features.find((f) => f.prefix === resource);

      additionalContent = (
        <>
          {feature && feature.access.includes("u") && (
            <Link href={`/${role}/${resource}/${item._id}/edit`}>
              <PencilIcon className="w-5 text-sky" />
            </Link>
          )}
          {feature && feature.access.includes("d") && (
            <span>
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
          <Link
            href={`/${role}/${resource}/${item._id}/edit`}
            className="h-6 w-6 flex items-center justify-center rounded-md bg-sky text-white"
          >
            <PencilIcon className="w-3.5 flex-none" />
          </Link>

          <span>
            <Delete deleteAction={() => props.delete(item._id!)}>
              <span className="h-6 w-6 flex items-center justify-center rounded-md bg-green text-white">
                <ArrowDownOnSquareIcon className="w-3.5 flex-none" />
              </span>
            </Delete>
          </span>
        </>
      );

    return (
      <div className="flex items-center gap-4 text-center">
        {item.link && (
          <a href={item.link} target="_blank" rel="noreferrer">
            <LinkIcon className="w-5 text-blue" />
          </a>
        )}

        <Link
          href={`/${role}/${resource}/${item._id}`}
          className="h-6 w-6 flex items-center justify-center rounded-md bg-primary-400 text-white"
        >
          <EyeIcon className="w-3.5 flex-none" />
        </Link>

        {additionalContent}
      </div>
    );
  }
  return null;
}
