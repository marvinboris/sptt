import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React, { ReactElement } from "react";

import Layout, { Head } from "@/components/backend/navigation/layout";
import List from "@/components/backend/ui/list";
import Action from "@/components/backend/ui/list/action";

import { useContentContext } from "@/utils/contexts/content";
import { useRoleContext } from "@/utils/contexts/role";
import { classNames, updateObject } from "@/utils/helpers";

import { NextPageWithLayout } from "@/pages/_app";

const array = [
  { level: "Level 1", amount: '143,564.69', personal_turnover: '249,564.34', team_turnover: '559,456.34', status: true },
  { level: "Level 2", amount: '143,564.69', personal_turnover: '249,564.34', team_turnover: '559,456.34', status: true },
  { level: "Level 3", amount: '143,564.69', personal_turnover: '249,564.34', team_turnover: '559,456.34', status: true },
  { level: "Level 4", amount: '143,564.69', personal_turnover: '249,564.34', team_turnover: '559,456.34', status: true },
  { level: "Level 5", amount: '143,564.69', personal_turnover: '249,564.34', team_turnover: '559,456.34', status: true },
];

const AdminSettingsMlmPage: NextPageWithLayout = () => {
  const { content } = useContentContext();
  const { role } = useRoleContext();

  const {
    cms: {
      global: { app_name },
      backend: {
        pages: {
          settings: { mlm },
        },
      },
    },
  } = content!;

  return (
    <>
      <Head
        link={`/${role}/settings/mlm`}
        title={`${mlm} | ${app_name}`}
        description={`${app_name}: View and manage bonus settings.`}
      />

      <div className="w-4/5">
        <List
          title="Bonus commission"
          subtitle="View and manage bonus settings"
          array={array.map((item) =>
            updateObject(item, {
              status: (
                <span
                  className={classNames(
                    "flex w-[70px] h-6 items-center justify-center gap-1 rounded-md",
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
          fields={[
            { key: "level", name: "Level" },
            { key: "amount", name: "Bonus amount" },
            { key: "personal_turnover", name: "Personal turnover" },
            { key: "team_turnover", name: "Team turnover" },
            { key: "status", name: "Status" },
            { key: "action", name: "Action" },
          ]}
        />
      </div>
    </>
  );
};

AdminSettingsMlmPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminSettingsMlmPage;
