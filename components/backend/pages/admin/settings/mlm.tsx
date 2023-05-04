import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

import List from "@/components/backend/ui/list";
import Action from "@/components/backend/ui/list/action";

import { classNames, updateObject } from "@/utils/helpers";

const fields = [
  { key: "level", name: "Level" },
  { key: "amount", name: "Bonus amount" },
  { key: "personal_turnover", name: "Personal turnover" },
  { key: "team_turnover", name: "Team turnover" },
  { key: "status", name: "Status" },
  { key: "action", name: "Action" },
];

const array = [
  {
    level: "Level 1",
    amount: "143,564.69",
    personal_turnover: "249,564.34",
    team_turnover: "559,456.34",
    status: true,
  },
  {
    level: "Level 2",
    amount: "143,564.69",
    personal_turnover: "249,564.34",
    team_turnover: "559,456.34",
    status: true,
  },
  {
    level: "Level 3",
    amount: "143,564.69",
    personal_turnover: "249,564.34",
    team_turnover: "559,456.34",
    status: true,
  },
  {
    level: "Level 4",
    amount: "143,564.69",
    personal_turnover: "249,564.34",
    team_turnover: "559,456.34",
    status: true,
  },
  {
    level: "Level 5",
    amount: "143,564.69",
    personal_turnover: "249,564.34",
    team_turnover: "559,456.34",
    status: true,
  },
];

interface Props {
  subtitle: string;
}

export default function AdminSettingsMlm({ subtitle }: Props) {
  return (
    <List
      title="Bonus commission"
      subtitle={subtitle}
      array={array.map((item) =>
        updateObject(item, {
          status: (
            <span
              className={classNames(
                "flex h-6 w-[70px] items-center justify-center gap-1 rounded-md",
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
