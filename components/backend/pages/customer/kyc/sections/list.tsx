import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

import List from "@/components/backend/ui/list";
import Action from "@/components/backend/ui/list/action";

import { classNames, updateObject } from "@/utils/helpers";

const fields = [
  { key: "date", name: "Submitted date" },
  { key: "doc", name: "Document submitted" },
  { key: "status", name: "Status" },
  { key: "action", name: "Action" },
];

const array = [
  {
    date: "2023-09-18",
    doc: "04j03j28nldf03.PNG",
    status: 2,
  },
  {
    date: "2023-04-09",
    doc: "04j03j28nldf03.PNG",
    status: 0,
  },
  {
    date: "2023-06-08",
    doc: "04j03j28nldf03.PNG",
    status: 1,
  },
];

interface Props {
  title: string;
  subtitle: string;
}

export default function CustomerKycListSection({ title, subtitle }: Props) {
  return (
    <div className="relative flex w-full items-stretch">
      <div className="absolute right-16 top-14 hidden items-center gap-1 text-[#F45F5F] md:flex">
        <XCircleIcon className="w-5 flex-none opacity-60" />
        <span className="text-lg font-bold">Account not verified</span>
      </div>

      <List
        title={title}
        subtitle={subtitle}
        array={array.map((item) =>
          updateObject(item, {
            status: (
              <span
                className={classNames(
                  "inline-flex h-6 items-center gap-1 rounded-md pl-1 pr-2",
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
                    item.status ? "" : "opacity-60"
                  )}
                >
                  {item.status === 2
                    ? "Completed"
                    : item.status === 1
                    ? "Cancelled"
                    : "Pending"}
                </span>
              </span>
            ),
            action: (
              <div className="flex gap-4">
                <span
                  className={classNames(
                    "flex h-6 w-6 items-center justify-center rounded-md",
                    item.status === 2
                      ? "bg-white/10"
                      : item.status === 1
                      ? "bg-red/20"
                      : "bg-yellow/20"
                  )}
                >
                  {item.status === 2 ? (
                    <CheckCircleIcon className="w-3.5 flex-none text-green" />
                  ) : item.status === 1 ? (
                    <XCircleIcon className="w-3.5 flex-none text-red" />
                  ) : (
                    <div className="px-px">
                      <div className="aspect-square w-3 flex-none animate-spin rounded-full border border-yellow border-t-transparent" />
                    </div>
                  )}
                </span>

                <Action
                  item={item}
                  resource="kyc"
                  props={{ delete: () => {} }}
                />
              </div>
            ),
          })
        )}
        total={array.length}
        data={JSON.stringify(array)}
        get={() => {}}
        fields={fields}
      />
    </div>
  );
}
