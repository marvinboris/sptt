import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

import List from "../../../ui/list";
import Action from "../../../ui/list/action";
import { classNames, updateObject } from "@/utils/helpers";

const fields = [
  { key: "name", name: "Pack name" },
  { key: "amount", name: "Pack amount (SPTT)" },
  { key: "staking", name: "Staking (%)" },
  { key: "status", name: "Pack status" },
  { key: "action", name: "Action" },
];

const array = [
  { name: "Starter 1", amount: "12,290,934.09", staking: 5, status: true },
  { name: "Starter 2", amount: "12,290,934.09", staking: 7, status: true },
  { name: "Starter 3", amount: "12,290,934.09", staking: 9, status: true },
  { name: "Starter 4", amount: "12,290,934.09", staking: 11, status: true },
  { name: "Starter 5", amount: "12,290,934.09", staking: 13, status: true },
  { name: "Starter 6", amount: "12,290,934.09", staking: 15, status: true },
];

interface Props {
  add: string;
  title: string;
  subtitle: string;
}

export default function AdminPacks({ add, title, subtitle }: Props) {
  return (
    <List
      toSearch
      toAdd={add}
      link="/admin/packs/create"
      title={title}
      subtitle={subtitle}
      array={array.map((item) =>
        updateObject(item, {
          staking: <div className="text-center">{item.staking}%</div>,
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
            <Action item={item} resource="packs" props={{ delete: () => {} }} />
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
