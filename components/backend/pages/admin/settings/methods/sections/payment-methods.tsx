import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

import List from "@/components/backend/ui/list";
import Action from "@/components/backend/ui/list/action";

import { classNames, updateObject } from "@/utils/helpers";

const fields = [
  { key: "name", name: "Payment method" },
  { key: "email", name: "Email ID" },
  { key: "status", name: "Status" },
  { key: "action", name: "Action" },
];

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

interface Props {
  title: string;
  subtitle: string;
}

export default function AdminSettingsMethodsPaymentMethodsSection({
  title,
  subtitle,
}: Props) {
  return (
    <List
      title={title}
      subtitle={subtitle}
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
      fields={fields}
    />
  );
}
