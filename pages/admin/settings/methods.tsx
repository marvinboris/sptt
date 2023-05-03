import {
  CheckCircleIcon,
  EnvelopeIcon,
  LockClosedIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import React, { ReactElement } from "react";

import Layout, { Head } from "@/components/backend/navigation/layout";
import Button from "@/components/backend/ui/form/button";
import Input from "@/components/backend/ui/form/input";
import Switch from "@/components/backend/ui/form/switch";
import List from "@/components/backend/ui/list";
import Action from "@/components/backend/ui/list/action";

import { useContentContext } from "@/utils/contexts/content";
import { useRoleContext } from "@/utils/contexts/role";
import { classNames, updateObject } from "@/utils/helpers";

import { NextPageWithLayout } from "@/pages/_app";

const array = [
  { name: "Paypal", email: "paypal@spreadtt.io", status: true },
  { name: "Coingate", email: "coingate@spreadtt.io", status: true },
  { name: "Stripe", email: "stripe@spreadtt.io", status: true },
  {
    name: "Orange / MTN Money",
    email: "orange.mtn@spreadtt.io",
    status: false,
  },
  { name: "Payeer", email: "payeer@spreadtt.io", status: false },
];

const AdminSettingsMethodsPage: NextPageWithLayout = () => {
  const { content } = useContentContext();
  const { role } = useRoleContext();

  const {
    cms: {
      global: { app_name },
      backend: {
        pages: {
          settings: { methods },
        },
      },
    },
  } = content!;

  return (
    <>
      <Head
        link={`/${role}/settings/methods`}
        title={`${methods} | ${app_name}`}
        description={`${app_name}: View and manage payment methods.`}
      />

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <List
            title={methods}
            subtitle="View and manage payment methods"
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
              { key: "name", name: "Payment method" },
              { key: "email", name: "Email ID" },
              { key: "status", name: "Status" },
              { key: "action", name: "Action" },
            ]}
          />
        </div>

        <div>
          <div className="rounded-[40px] bg-darkblue/40 px-6 py-8">
            <div>
              <div className="flex gap-3 font-display text-[25px]/[1.21] font-bold">
                <span>Paypal</span>

                <div className="inline-flex h-6 w-[72px] flex-none items-center justify-center gap-1 rounded-md bg-green/10 text-xs font-normal text-green">
                  <CheckCircleIcon className="w-3" />
                  <span>Active</span>
                </div>
              </div>

              <div className="mt-px text-sm text-white/40">
                View and edit this payment method
              </div>

              <div className="mt-3.5 h-[7px] w-8 rounded-full bg-green" />
            </div>

            <form className="mt-8 grid grid-cols-1 gap-2">
              <Input
                id="email"
                type="email"
                name="email"
                icon={EnvelopeIcon}
                defaultValue="paypal@spreadtt.io"
              />
              <Input
                id="key"
                name="key"
                icon={LockClosedIcon}
                defaultValue="Jd92nid82lJk92n10j"
              />
              <div className="mt-2 flex items-center justify-between text-sm">
                <label htmlFor="status">Active/inactive</label>
                <Switch
                  id="status"
                  name="status"
                  label=""
                  onChange={() => {}}
                />
              </div>
              <div className="mt-12">
                <Button
                  className="w-full font-display text-base font-bold"
                  color="green"
                  justify="center"
                >
                  Save settings
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

AdminSettingsMethodsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminSettingsMethodsPage;
