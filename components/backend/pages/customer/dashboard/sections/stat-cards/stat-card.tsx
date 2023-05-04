import React from "react";

import Switch from "@/components/backend/ui/form/switch";
import SvgIcon from "@/components/ui/svg-icon";

interface Props {
  icon: string;
  title: string;
  switchable?: boolean;
  children: React.ReactNode;
}

export default function StatCard({ icon, title, switchable, children }: Props) {
  return (
    <div className="flex flex-col items-start rounded-[20px] bg-black/20 pb-3.5 pl-6 pr-4 pt-[22px]">
      <div className="relative w-full">
        <h3 className="font-body">{title}</h3>

        {switchable ? (
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <Switch label="" onChange={() => {}} />
          </div>
        ) : null}
      </div>

      <div className="mt-[13px] h-[5px] w-6 flex-none rounded-full bg-lightorange/20" />

      <div className="mt-auto flex w-full items-end justify-between pt-2.5">
        <div className="font-display text-[30px]/none font-bold text-light">
          {children}
        </div>

        <SvgIcon
          name={icon}
          className="h-8 w-8 flex-none object-contain opacity-10"
        />
      </div>
    </div>
  );
}
