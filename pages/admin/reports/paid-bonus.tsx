import {
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import React, { ReactElement } from "react";

import Layout, { Head } from "@/components/backend/navigation/layout";
import List from "@/components/backend/ui/list";
import Action from "@/components/backend/ui/list/action";

import { useContentContext } from "@/utils/contexts/content";
import { useRoleContext } from "@/utils/contexts/role";
import { classNames, updateObject } from "@/utils/helpers";

import { NextPageWithLayout } from "@/pages/_app";

const array = [
  {
    aid: "EK29GZ",
    package: "Starter 1",
    date: "2023-09-18",
    amount: "12,290,934.09",
    hash: "0x0234KJh92...3278",
    status: 2,
  },
  {
    aid: "TL32GT",
    package: "Starter 4",
    date: "2023-04-09",
    amount: "569,988.74",
    hash: "0x0234KJh92...3278",
    status: 0,
  },
  {
    aid: "AFK981",
    package: "Starter 2",
    date: "2023-06-08",
    amount: "1,029,747.73",
    hash: "0x0234KJh92...3278",
    status: 2,
  },
  {
    aid: "MMBA98",
    package: "Starter 3",
    date: "2023-10-11",
    amount: "10,988,126.64",
    hash: "0x0234KJh92...3278",
    status: 2,
  },
  {
    aid: "TU84NH",
    package: "Starter 2",
    date: "2023-02-19",
    amount: "28,466,129.89",
    hash: "0x0234KJh92...3278",
    status: 0,
  },
];

const AdminReportsPaidBonusPage: NextPageWithLayout = () => {
  const { content } = useContentContext();
  const { role } = useRoleContext();

  const {
    cms: {
      global: { app_name },
      backend: {
        pages: {
          reports: { paid_bonus },
        },
      },
    },
  } = content!;

  return (
    <>
      <Head
        link={`/${role}/reports/paid-bonus`}
        title={`${paid_bonus} | ${app_name}`}
        description={`${app_name}: Bonus report.`}
      />

      <List
        toExport
        toSearch
        toShow
        title={paid_bonus}
        subtitle="Bonus report"
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
              <Action
                item={item}
                resource="reports"
                props={{ delete: () => {} }}
              />
            ),
          })
        )}
        total={array.length}
        data={JSON.stringify(array)}
        get={() => {}}
        fields={[
          { key: "aid", name: "User ID" },
          { key: "package", name: "Package" },
          { key: "date", name: "Date" },
          { key: "amount", name: "Amount (SPTT)" },
          { key: "hash", name: "Transaction hash" },
          { key: "status", name: "Status" },
          { key: "action", name: "Action" },
        ]}
      />
    </>
  );
};

AdminReportsPaidBonusPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminReportsPaidBonusPage;
