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
  { key: "generation", name: "Generation" },
  { key: "date", name: "Date" },
  { key: "amount", name: "Amount (SPTT)" },
  { key: "hash", name: "Transaction hash" },
  { key: "buyer", name: "Buyer ID" },
  { key: "action", name: "Action" },
];

const array = [
  {
    aid: "EK29GZ",
    generation: "Generation 1",
    date: "2023-09-18",
    amount: "23094.31",
    hash: "0x0234KJh92...3278",
    buyer: "HJ923MN",
    status: 2,
  },
  {
    aid: "TL32GT",
    generation: "Generation 4",
    date: "2023-04-09",
    amount: "56125.67",
    hash: "0x0234KJh92...3278",
    buyer: "OI391GB",
    status: 0,
  },
  {
    aid: "AFK981",
    generation: "Generation 2",
    date: "2023-06-08",
    amount: "35690.56",
    hash: "0x0234KJh92...3278",
    buyer: "MLO90T",
    status: 0,
  },
  {
    aid: "MMBA98",
    generation: "Generation 3",
    date: "2023-10-11",
    amount: "45096.24",
    hash: "0x0234KJh92...3278",
    buyer: "KP97GB",
    status: 2,
  },
  {
    aid: "TU84NH",
    generation: "Generation 2",
    date: "2023-02-19",
    amount: "35690.56",
    hash: "0x0234KJh92...3278",
    buyer: "PL199K",
    status: 2,
  },
];

interface Props {
  title: string;
  subtitle: string;
}

export default function AdminReportsCommission({ title, subtitle }: Props) {
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
          buyer: (
            <a
              href="#"
              target="_blank"
              className="inline-flex items-center gap-1 text-green"
            >
              <span>{item.buyer}</span>
              <ArrowTopRightOnSquareIcon className="w-3.5" />
            </a>
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
                resource="reports"
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
  );
}
