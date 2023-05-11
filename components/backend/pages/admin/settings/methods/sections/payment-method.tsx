import {
  CheckCircleIcon,
  EnvelopeIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import React from "react";

import Button from "@/components/backend/ui/form/button";
import Input from "@/components/backend/ui/form/input";
import Switch from "@/components/backend/ui/form/switch";

export default function AdminSettingsMethodsPaymentMethodSection() {
  return (
    <div className="rounded-[40px] bg-darkblue/40 px-6 py-8">
      <div>
        <div className="flex gap-3 font-display text-[25px] font-bold">
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
          <Switch id="status" name="status" label="" onChange={() => {}} />
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
  );
}
