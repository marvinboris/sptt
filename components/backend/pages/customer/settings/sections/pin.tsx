import { EnvelopeIcon } from "@heroicons/react/24/outline";
import React from "react";

import Button from "@/components/backend/ui/form/button";
import Input from "@/components/backend/ui/form/input";

export default function CustomerSettingsPinSection() {
  return (
    <section
      id="pin-section"
      className="rounded-[40px] bg-darkblue/40 pb-[76px] pl-12 pr-14 pt-8"
    >
      <div>
        <div className="font-display text-[25px]/[1.21] font-bold">
          Create Pin
        </div>

        <div className="mt-px text-sm text-white/40">Enhance security</div>

        <div className="mt-3.5 h-[7px] w-8 rounded-full bg-green" />
      </div>

      <form className="mt-8 grid grid-cols-1 gap-8">
        <Input
          id="pin"
          name="pin"
          icon={EnvelopeIcon}
          defaultValue="4 digits pin"
        />
        <Input
          id="repeat-pin"
          name="repeat_pin"
          icon={EnvelopeIcon}
          defaultValue="Repeat pin"
        />
        <div className="mt-10">
          <Button
            className="w-full font-display text-base font-bold"
            justify="center"
          >
            Verify account
          </Button>
        </div>
      </form>
    </section>
  );
}
