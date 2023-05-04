import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

import List from "@/components/backend/ui/list";
import Action from "@/components/backend/ui/list/action";

import { classNames, updateObject } from "@/utils/helpers";

const fields = [
  { key: "name", name: "Generation name" },
  { key: "commission", name: "Commission" },
  { key: "status", name: "Generation status" },
  { key: "action", name: "Action" },
];

const array = [
  { name: "Generation 1", commission: 4, status: true },
  { name: "Generation 2", commission: 2, status: true },
  { name: "Generation 3", commission: 1, status: true },
  { name: "Generation 4", commission: 1, status: false },
  { name: "Generation 5", commission: 2, status: false },
];

interface Props {
  title: string;
  subtitle: string;
}

export default function AdminSettingsGeneration({ title, subtitle }: Props) {
  return (
    <List
      title={title}
      subtitle={subtitle}
      array={array.map((item) =>
        updateObject(item, {
          commission: <div className="text-center">{item.commission}%</div>,
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
