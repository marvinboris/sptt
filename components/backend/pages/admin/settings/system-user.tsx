import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

import List from "@/components/backend/ui/list";
import Action from "@/components/backend/ui/list/action";

import { classNames, updateObject } from "@/utils/helpers";

const fields = [
  { key: "name", name: "User name" },
  { key: "email", name: "Email ID" },
  { key: "role", name: "User role" },
  { key: "status", name: "User status" },
  { key: "action", name: "Action" },
];

const array = [
  {
    name: "Zodfa pasfo",
    email: "adnfto@gmail.com",
    role: "Super admin",
    status: true,
  },
  {
    name: "Maladfon Pasdi",
    email: "okadflo@gmail.com",
    role: "Admin",
    status: true,
  },
  {
    name: "Jean Francois.D",
    email: "francois.j@gmail.com",
    role: "Super admin",
    status: true,
  },
  {
    name: "Joseph Marc",
    email: "marcjoseph@gmail.com",
    role: "Super admin",
    status: false,
  },
  {
    name: "Aldi Joelle",
    email: "joelleladiva@gmail.com",
    role: "Admin",
    status: false,
  },
];

interface Props {
  title: string;
  subtitle: string;
}

export default function AdminSettingsSystemUser({ title, subtitle }: Props) {
  return (
    <List
      toSearch
      toAdd="Create new user"
      title={title}
      subtitle={subtitle}
      array={array.map((item) =>
        updateObject(item, {
          status: (
            <span
              className={classNames(
                "flex h-6 items-center justify-center gap-1 rounded-md",
                item.status ? "bg-white/10" : "bg-red/20"
              )}
            >
              {item.status ? (
                <CheckCircleIcon className="w-3 flex-none text-green" />
              ) : (
                <XCircleIcon className="w-3 flex-none text-red" />
              )}
              <span
                className={classNames(
                  "text-[10px]",
                  item.status ? "" : "opacity-60"
                )}
              >
                {item.status ? "Active" : "Inactive"}
              </span>
            </span>
          ),
          action: (
            <Action
              item={item}
              resource="settings"
              props={{ delete: () => {} }}
            />
          ),
        })
      )}
      total={array.length}
      data={JSON.stringify(array)}
      get={() => {}}
      fields={fields}
    />
  );
}
