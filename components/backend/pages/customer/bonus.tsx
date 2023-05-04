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
  { key: "date", name: "Date" },
  { key: "level", name: "Level" },
  { key: "target", name: "Target" },
  { key: "amount", name: "Paid amount" },
  { key: "hash", name: "Transaction hash" },
  { key: "generation", name: "Generation" },
  { key: "action", name: "Action" },
];

const array = [
  {
    target: "241,985,341.34",
    level: "Level 1",
    generation: "Generation 1",
    date: "2023-09-18",
    amount: "323.90",
    hash: "0x0234KJh92...3278",
    status: 2,
  },
  {
    target: "241,985,341.34",
    level: "Level 4",
    generation: "Generation 4",
    date: "2023-04-09",
    amount: "459.54",
    hash: "0x0234KJh92...3278",
    status: 0,
  },
  {
    target: "241,985,341.34",
    level: "Level 2",
    generation: "Generation 2",
    date: "2023-06-08",
    amount: "459.54",
    hash: "0x0234KJh92...3278",
    status: 2,
  },
  {
    target: "241,985,341.34",
    level: "Level 3",
    generation: "Generation 3",
    date: "2023-10-11",
    amount: "970.92",
    hash: "0x0234KJh92...3278",
    status: 2,
  },
  {
    target: "241,985,341.34",
    level: "Level 2",
    generation: "Generation 2",
    date: "2023-02-19",
    amount: "323.90",
    hash: "0x0234KJh92...3278",
    status: 0,
  },
];

interface Props {
  title: string;
  subtitle: string;
}

export default function CustomerBonus({ title, subtitle }: Props) {
  return (
    <List
      toExport
      toSearch
      toShow
      title={title}
      subtitle={subtitle}
      array={array.map((item) =>
        updateObject(item, {
          amount: (
            <a
              href="#"
              target="_blank"
              className="inline-flex items-center gap-1 text-green"
            >
              <span>{item.amount}</span>
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
