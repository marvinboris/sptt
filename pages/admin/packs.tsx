import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React, { ReactElement } from "react";

import { NextPageWithLayout } from "../_app";

import Layout, { Head } from "@/components/backend/navigation/layout";
import List from "@/components/backend/ui/list";
import Action from "@/components/backend/ui/list/action";

import { useContentContext } from "@/utils/contexts/content";
import { useRoleContext } from "@/utils/contexts/role";
import { classNames, updateObject } from "@/utils/helpers";

const array = [
  { name: "Starter 1", amount: "12,290,934.09", staking: 5, status: true },
  { name: "Starter 2", amount: "12,290,934.09", staking: 7, status: true },
  { name: "Starter 3", amount: "12,290,934.09", staking: 9, status: true },
  { name: "Starter 4", amount: "12,290,934.09", staking: 11, status: true },
  { name: "Starter 5", amount: "12,290,934.09", staking: 13, status: true },
  { name: "Starter 6", amount: "12,290,934.09", staking: 15, status: true },
];

const AdminUsersPage: NextPageWithLayout = () => {
  const { content } = useContentContext();
  const { role } = useRoleContext();

  const {
    cms: {
      global: { app_name },
      backend: {
        pages: {
          packs: { index, add },
        },
      },
    },
  } = content!;

  return (
    <>
      <Head
        link={`/${role}/packs`}
        title={`${index} | ${app_name}`}
        description={`${app_name}: List of packs.`}
      />

      <div className="w-3/4">
        <List
          toSearch
          toAdd={add}
          title={index}
          subtitle="List of training course packs"
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
                <Action
                  item={item}
                  resource="packs"
                  props={{ delete: () => {} }}
                />
              ),
            })
          )}
          total={array.length}
          data={JSON.stringify(array)}
          get={() => {}}
          fields={[
            { key: "name", name: "Pack name" },
            { key: "amount", name: "Pack amount (SPTT)" },
            { key: "staking", name: "Staking (%)" },
            { key: "status", name: "Pack status" },
            { key: "action", name: "Action" },
          ]}
        />
      </div>
    </>
  );
};

AdminUsersPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminUsersPage;
