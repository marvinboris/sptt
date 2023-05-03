import {
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import React, { ReactElement } from "react";

import { NextPageWithLayout } from "../_app";

import Layout, { Head } from "@/components/backend/navigation/layout";
import List from "@/components/backend/ui/list";
import Action from "@/components/backend/ui/list/action";

import { useContentContext } from "@/utils/contexts/content";
import { useRoleContext } from "@/utils/contexts/role";
import { classNames, updateObject } from "@/utils/helpers";

const array = [
  {
    aid: "EK29GZ",
    package: "Starter 1",
    date: "2023-09-18",
    amount: "12,290,934.09",
    wallet: "0x0234KJh92...3278",
    kyc: true,
  },
  {
    aid: "TL32GT",
    package: "Starter 4",
    date: "2023-04-09",
    amount: "569,988.74",
    wallet: "0x0234KJh92...3278",
    kyc: false,
  },
  {
    aid: "AFK981",
    package: "Starter 2",
    date: "2023-06-08",
    amount: "1,029,747.73",
    wallet: "0x0234KJh92...3278",
    kyc: true,
  },
  {
    aid: "MMBA98",
    package: "Starter 3",
    date: "2023-10-11",
    amount: "10,988,126.64",
    wallet: "0x0234KJh92...3278",
    kyc: true,
  },
  {
    aid: "TU84NH",
    package: "Starter 2",
    date: "2023-02-19",
    amount: "28,466,129.89",
    wallet: "0x0234KJh92...3278",
    kyc: false,
  },
];

const AdminUsersPage: NextPageWithLayout = () => {
  const { content } = useContentContext();
  const { role } = useRoleContext();

  const {
    cms: {
      global: { app_name },
      backend: {
        pages: {
          users: { index },
        },
      },
    },
  } = content!;

  return (
    <>
      <Head
        link={`/${role}/users`}
        title={`${index} | ${app_name}`}
        description={`${app_name}: List of users.`}
      />

      <List
        toExport
        toSearch
        toShow
        title={index}
        subtitle="All users with no purchase"
        array={array.map((item) =>
          updateObject(item, {
            aid: (
              <a
                href="#"
                target="_blank"
                className="inline-flex items-end gap-1 text-green"
              >
                <span>{item.aid}</span>
                <ArrowTopRightOnSquareIcon className="w-3.5" />
              </a>
            ),
            wallet: (
              <a
                href="#"
                target="_blank"
                className="inline-flex items-end gap-1 text-green"
              >
                <span>{item.wallet}</span>
                <ArrowTopRightOnSquareIcon className="w-3.5" />
              </a>
            ),
            kyc: (
              <span
                className={classNames(
                  "inline-flex h-6 items-center gap-1 rounded-md pl-1 pr-2",
                  item.kyc ? "bg-white/10" : "bg-red/20"
                )}
              >
                {item.kyc ? (
                  <CheckCircleIcon className="w-3 flex-none text-green" />
                ) : (
                  <XCircleIcon className="w-3 flex-none text-red" />
                )}
                <span
                  className={classNames(
                    "text-[10px]",
                    item.kyc ? "" : "opacity-60"
                  )}
                >
                  {item.kyc ? "Verified user" : "Not verified"}
                </span>
              </span>
            ),
            action: (
              <Action
                item={item}
                resource="users"
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
          { key: "wallet", name: "User wallet" },
          { key: "kyc", name: "KYC status" },
          { key: "action", name: "Action" },
        ]}
      />
    </>
  );
};

AdminUsersPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminUsersPage;
