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
  { name: "Zodfa pasfo", email: "adnfto@gmail.com", role: "Super admin", status: true },
  { name: "Maladfon Pasdi", email: "okadflo@gmail.com", role: "Admin", status: true },
  { name: "Jean Francois.D", email: "francois.j@gmail.com", role: "Super admin", status: true },
  { name: "Joseph Marc", email: "marcjoseph@gmail.com", role: "Super admin", status: false },
  { name: "Aldi Joelle", email: "joelleladiva@gmail.com", role: "Admin", status: false },
];

const AdminSettingsSystemUserPage: NextPageWithLayout = () => {
  const { content } = useContentContext();
  const { role } = useRoleContext();

  const {
    cms: {
      global: { app_name },
      backend: {
        pages: {
          settings: { system_user },
        },
      },
    },
  } = content!;

  return (
    <>
      <Head
        link={`/${role}/settings/system-user`}
        title={`${system_user} | ${app_name}`}
        description={`${app_name}: View and manage users.`}
      />

      <div className="w-3/4">
        <List
          toSearch
          toAdd="Create new user"
          title={system_user}
          subtitle="View and manage users"
          array={array.map((item) =>
            updateObject(item, {
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
            { key: "name", name: "User name" },
            { key: "email", name: "Email ID" },
            { key: "role", name: "User role" },
            { key: "status", name: "User status" },
            { key: "action", name: "Action" },
          ]}
        />
      </div>
    </>
  );
};

AdminSettingsSystemUserPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminSettingsSystemUserPage;
