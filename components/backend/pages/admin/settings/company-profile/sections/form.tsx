import {
  BriefcaseIcon,
  EnvelopeIcon,
  PhoneIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import React from "react";

import Button from "@/components/backend/ui/form/button";
import Input from "@/components/backend/ui/form/input";

export default function AdminSettingsCompanyProfileFormSection() {
  return (
    <section
      id="form"
      className="rounded-[40px] bg-darkblue/40 pb-[76px] pl-12 pr-14 pt-8"
    >
      <div className="flex justify-between">
        <div>
          <div className="font-display text-[25px]/[1.21] font-bold">
            Company profile
          </div>

          <div className="mt-px text-sm text-white/40">
            View and manage users
          </div>

          <div className="mt-3.5 h-[7px] w-8 rounded-full bg-green" />
        </div>

        <div>
          <Button
            className="font-display text-sm font-bold"
            color="green"
            icon={PlusIcon}
          >
            Save settings
          </Button>
        </div>
      </div>

      <form className="mt-8 grid grid-cols-2 gap-8">
        <Input
          id="name"
          name="name"
          label="Company name"
          icon={BriefcaseIcon}
          defaultValue="info@spreadtt.io"
        />
        <Input
          id="email"
          type="email"
          name="email"
          label="Company Email ID"
          icon={EnvelopeIcon}
          defaultValue="info@spreadtt.io"
        />
        <Input
          id="company-phone"
          type="tel"
          name="company_phone"
          label="Company Phone"
          icon={PhoneIcon}
          defaultValue="+237 612 34 56 78"
        />
        <Input
          id="phone"
          type="tel"
          name="phone"
          label="Phone No. 2"
          icon={BriefcaseIcon}
          defaultValue="+237 612 34 56 78"
        />
      </form>
    </section>
  );
}
