import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";

import Button from "@/components/backend/ui/form/button";
import SvgIcon from "@/components/ui/svg-icon";

export default function CustomerSettingsCscSection() {
  return (
    <section
      id="profile-section"
      className="w-full rounded-[40px] bg-darkblue/40 pb-[76px] pl-12 pr-14 pt-8"
    >
      <div className="flex justify-between">
        <div>
          <div className="font-display text-[25px] font-bold">
            CSC authenticator
          </div>

          <div className="mt-px text-sm text-white/40">
            Secure your transactions
          </div>

          <div className="mt-3.5 h-[7px] w-8 rounded-full bg-green" />
        </div>

        <div className="hidden md:block">
          <Button
            className="font-display text-sm font-bold"
            color="green"
            icon={PlusIcon}
          >
            Activate
          </Button>
        </div>
      </div>

      <form className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-[60px]">
        <div className="xl:col-span-2 text-white/70">
          <div className="space-y-2">
            <p>1. Download SPTT authencitcator app</p>
            <p>2. Scan the QR Code</p>
            <p>3. Use the code below</p>
          </div>

          <div className="mt-6">
            <div className="flex h-11 items-center justify-center rounded-lg bg-white/[0.02]">
              82NUSDN842074NIF2984VE5
            </div>
          </div>
        </div>

        <div>
          <SvgIcon name="csc" className="aspect-square w-full" />
        </div>

<div className="md:hidden">
  <Button
    justify="center"
    className="w-full font-display text-sm font-bold"
    color="green"
    icon={PlusIcon}
  >
    Activate
  </Button>
</div>
      </form>
    </section>
  );
}
