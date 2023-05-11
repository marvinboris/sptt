import {
  BriefcaseIcon,
  EnvelopeIcon,
  PhoneIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import React from "react";

import Button from "@/components/backend/ui/form/button";
import Input from "@/components/backend/ui/form/input";

export default function CustomerSettingsProfileSection() {
  return (
    <section
      id="profile-section"
      className="rounded-[40px] bg-darkblue/40 pb-[76px] pl-12 pr-14 pt-8 w-full"
    >
      <div className="flex justify-between">
        <div>
          <div className="font-display text-[25px] font-bold">
            User profile
          </div>

          <div className="mt-px text-sm text-white/40">
            View and manage your profile
          </div>

          <div className="mt-3.5 h-[7px] w-8 rounded-full bg-green" />
        </div>

        <div className="hidden md:block">
          <Button
            className="font-display text-sm font-bold"
            color="green"
            icon={PlusIcon}
          >
            Save settings
          </Button>
        </div>
      </div>

      <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Input
          id="first-name"
          name="first_name"
          label="First name"
          icon={BriefcaseIcon}
          defaultValue="Jonathan Kaile Medona"
        />
        <Input
          id="last-name"
          name="last_name"
          label="Last name"
          icon={EnvelopeIcon}
          defaultValue="Medona"
        />
        <Input
          id="email"
          type="email"
          name="email"
          label="Email ID"
          icon={EnvelopeIcon}
          defaultValue="janathan@gmail.com"
        />
        <Input
          id="phone"
          type="tel"
          name="phone"
          label="Phone No. 2"
          icon={PhoneIcon}
          defaultValue="+237 612 34 56 78"
        />

        <div className="md:hidden">
          <Button
            justify="center"
            className="w-full font-display text-sm font-bold"
            color="green"
            icon={PlusIcon}
          >
            Save settings
          </Button>
        </div>
      </form>
    </section>
  );
}
