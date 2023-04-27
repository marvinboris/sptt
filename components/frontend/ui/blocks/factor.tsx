import React, { ReactNode } from "react";

import SvgIcon from "@/components/ui/svg-icon";

type FactorBlockProps = {
  label?: ReactNode;
  icon: string;
};

export default function FactorBlock({ label, icon }: FactorBlockProps) {
  return (
    <div className="w-1/3 px-[5px] md:w-1/4 md:px-3.5">
      <div className="flex aspect-square flex-col items-center rounded-[30px] bg-white/10">
        <div className="flex flex-1 items-center">
          <SvgIcon name={icon} className="w-12 md:w-24" />
        </div>

        <div className="h-10 text-center font-body text-xs md:h-20 md:text-base">
          {label}
        </div>
      </div>
    </div>
  );
}
