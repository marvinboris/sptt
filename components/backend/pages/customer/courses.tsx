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
  { key: "date", name: "Buy date" },
  { key: "package", name: "Package" },
  { key: "expDate", name: "Ex. date" },
  { key: "payouts", name: "Total payouts" },
  { key: "hash", name: "Transaction hash" },
  { key: "status", name: "Status" },
  { key: "action", name: "Action" },
];

const array = [
  {
    expDate: 30,
    package: "Starter 1",
    date: "2023-09-18",
    payouts: "323.90",
    hash: "0x0234KJh92...3278",
    status: true,
  },
  {
    expDate: 100,
    package: "Starter 4",
    date: "2023-04-09",
    payouts: "459.54",
    hash: "0x0234KJh92...3278",
    status: false,
  },
  {
    expDate: 100,
    package: "Starter 2",
    date: "2023-06-08",
    payouts: "459.54",
    hash: "0x0234KJh92...3278",
    status: true,
  },
  {
    expDate: 100,
    package: "Starter 3",
    date: "2023-10-11",
    payouts: "970.92",
    hash: "0x0234KJh92...3278",
    status: true,
  },
  {
    expDate: 30,
    package: "Starter 2",
    date: "2023-02-19",
    payouts: "323.90",
    hash: "0x0234KJh92...3278",
    status: false,
  },
];

interface Props {
  title: string;
  subtitle: string;
}

export default function CustomerCourses({ title, subtitle }: Props) {
  return (
    <List
      toExport
      toSearch
      toShow
      title={title}
      subtitle={subtitle}
      array={array.map((item) =>
        updateObject(item, {
          expDate: (
            <div className="h-2 w-[88px] rounded-full bg-white/10 overflow-hidden">
              <div
                className={classNames(
                  "h-full bg-gradient-to-r",
                  item.expDate === 100 ? "from-[#B62B18] to-red opacity-60" : "from-[#92B618] to-green"
                )}
                style={{ width: item.expDate + "%" }}
              />
            </div>
          ),
          payouts: (
            <a
              href="#"
              target="_blank"
              className="inline-flex items-center gap-1 text-green"
            >
              <span>{item.payouts}</span>
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
                "flex h-6 w-[88px] items-center justify-center gap-1 rounded-md pl-1 pr-2",
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
                {item.status ? "Active" : "Expired"}
              </span>
            </span>
          ),
          action: (
            <Action
              item={item}
              resource="courses"
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
