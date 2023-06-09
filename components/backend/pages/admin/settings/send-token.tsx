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
  { key: "date", name: "Date" },
  { key: "wallet", name: "Wallet ID" },
  { key: "amount", name: "Amount (SPTT)" },
  { key: "hash", name: "Transaction hash" },
  { key: "status", name: "Status" },
  { key: "action", name: "Action" },
];

const array = [
  {
    date: "2023-09-18",
    wallet: "0x0234KJh92...3278",
    amount: "23094.31",
    hash: "0x0234KJh92...3278",
    status: 2,
  },
  {
    date: "2023-04-09",
    wallet: "0x0234KJh92...3278",
    amount: "23094.31",
    hash: "0x0234KJh92...3278",
    status: 0,
  },
  {
    date: "2023-06-08",
    wallet: "0x0234KJh92...3278",
    amount: "23094.31",
    hash: "0x0234KJh92...3278",
    status: 1,
  },
  {
    date: "2023-10-11",
    wallet: "0x0234KJh92...3278",
    amount: "23094.31",
    hash: "0x0234KJh92...3278",
    status: 2,
  },
  {
    date: "2023-02-19",
    wallet: "0x0234KJh92...3278",
    amount: "23094.31",
    hash: "0x0234KJh92...3278",
    status: 0,
  },
];

interface Props {
  title: string;
  subtitle: string;
}

export default function AdminSettingsSendToken({ title, subtitle }: Props) {
  return (
    <List
      toSearch
      toShow
      toAdd="New transfer"
      title={title}
      subtitle={subtitle}
      array={array.map((item) =>
        updateObject(item, {
          wallet: (
            <a
              href="#"
              target="_blank"
              className="inline-flex items-center gap-1 text-green"
            >
              <span>{item.wallet}</span>
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
