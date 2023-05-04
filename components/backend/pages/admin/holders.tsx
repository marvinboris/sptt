import {
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";

import List from "../../ui/list";
import Action from "../../ui/list/action";
import { classNames, updateObject } from "@/utils/helpers";

const fields = [
  { key: "aid", name: "User ID" },
  { key: "package", name: "Package" },
  { key: "date", name: "Date" },
  { key: "amount", name: "Amount (SPTT)" },
  { key: "hash", name: "Transaction hash" },
  { key: "status", name: "Status" },
  { key: "action", name: "Action" },
];

const array = [
  {
    aid: "EK29GZ",
    package: "Starter 1",
    date: "2023-09-18",
    amount: "12,290,934.09",
    hash: "0x0234KJh92...3278",
    status: true,
  },
  {
    aid: "TL32GT",
    package: "Starter 4",
    date: "2023-04-09",
    amount: "569,988.74",
    hash: "0x0234KJh92...3278",
    status: false,
  },
  {
    aid: "AFK981",
    package: "Starter 2",
    date: "2023-06-08",
    amount: "1,029,747.73",
    hash: "0x0234KJh92...3278",
    status: true,
  },
  {
    aid: "MMBA98",
    package: "Starter 3",
    date: "2023-10-11",
    amount: "10,988,126.64",
    hash: "0x0234KJh92...3278",
    status: true,
  },
  {
    aid: "TU84NH",
    package: "Starter 2",
    date: "2023-02-19",
    amount: "28,466,129.89",
    hash: "0x0234KJh92...3278",
    status: false,
  },
];

interface Props {
  title: string;
  subtitle: string;
}

export default function AdminHolders({ title, subtitle }: Props) {
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
          hash: (
            <a
              href="#"
              target="_blank"
              className="inline-flex items-center gap-1 text-green"
            >
              <span>{item.hash}</span>
              <ArrowTopRightOnSquareIcon className="w-3.5" />
            </a>
          ),
          status: (
            <span
              className={classNames(
                "inline-flex h-6 items-center gap-1 rounded-md pl-1 pr-2",
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
                {item.status ? "Completed" : "Not completed"}
              </span>
            </span>
          ),
          action: (
            <Action
              item={item}
              resource="holders"
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
