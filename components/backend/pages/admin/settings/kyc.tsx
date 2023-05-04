import {
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";

import List from "@/components/backend/ui/list";
import Action from "@/components/backend/ui/list/action";

import { classNames, updateObject } from "@/utils/helpers";

const fields = [
  { key: "aid", name: "User ID" },
  { key: "date", name: "Date" },
  { key: "email", name: "Email ID" },
  { key: "name", name: "Full name" },
  { key: "doc", name: "Document type" },
  { key: "status", name: "Status" },
  { key: "action", name: "Action" },
];

const array = [
  {
    aid: "EK29GZ",
    date: "2023-09-18",
    email: "ehoa@gmail.com",
    name: "Ehoa Crisio",
    doc: "National ID",
    status: 2,
  },
  {
    aid: "TL32GT",
    date: "2023-04-09",
    email: "caldo@gmail.com",
    name: "Caldo Marle",
    doc: "Passport",
    status: 0,
  },
  {
    aid: "AFK981",
    date: "2023-06-08",
    email: "hilato@gmail.com",
    name: "Hilato Perdise",
    doc: "Driver’s licence",
    status: 1,
  },
  {
    aid: "MMBA98",
    date: "2023-10-11",
    email: "hmadiu@gmail.com",
    name: "Hamad Clint",
    doc: "Passport",
    status: 2,
  },
  {
    aid: "TU84NH",
    date: "2023-02-19",
    email: "adfkon@gmail.com",
    name: "Joalo Padoron",
    doc: "National ID",
    status: 0,
  },
];

interface Props {
  title: string;
  subtitle: string;
}

export default function AdminSettingsKyc({ title, subtitle }: Props) {
  return (
    <List
      toExport
      toSearch
      toShow
      title={title}
      subtitle={subtitle}
      array={array.map((item) =>
        updateObject(item, {
          aid: (
            <a
              href="#"
              target="_blank"
              className="inline-flex items-center gap-1 text-green"
            >
              <span>{item.aid}</span>
              <ArrowTopRightOnSquareIcon className="w-3.5" />
            </a>
          ),
          status: (
            <span
              className={classNames(
                "inline-flex h-6 w-[70px] items-center justify-center gap-1 rounded-md pl-1 pr-2",
                item.status === 2
                  ? "bg-white/10"
                  : item.status === 1
                  ? "bg-red/20"
                  : "bg-yellow/20"
              )}
            >
              {item.status === 2 ? (
                <CheckCircleIcon className="w-3 flex-none text-green" />
              ) : item.status === 1 ? (
                <XCircleIcon className="w-3 flex-none text-red" />
              ) : (
                <div className="px-px">
                  <div className="aspect-square w-2.5 flex-none animate-spin rounded-full border border-yellow border-t-transparent" />
                </div>
              )}
              <span
                className={classNames(
                  "text-[10px]",
                  item.status === 2 ? "" : "opacity-60"
                )}
              >
                {item.status === 2
                  ? "Verified"
                  : item.status === 1
                  ? "Rejected"
                  : "Pending"}
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
