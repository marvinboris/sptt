import React, { ComponentProps, ReactNode } from "react";

import { classNames } from "@/utils/helpers";
import IconType from "@/utils/types/icon";

type HeroCardProps = ComponentProps<"div"> & {
  supply?: boolean;
  label?: ReactNode;
  value?: ReactNode;
  icon: IconType;
};

export default function HeroCard({
  supply = false,
  icon: Icon,
  label,
  value,
  ...props
}: HeroCardProps) {
  return (
    <div {...props}>
      <div
        className={classNames(
          "relative z-0 flex h-28 items-center justify-between overflow-clip rounded-[25px] border border-white/10 bg-secondary-900 py-7 pl-10 pr-9 text-white before:absolute before:left-5 before:top-1/2 before:h-14 before:w-1 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full after:absolute after:inset-0 after:-z-10 after:bg-night/20",
          supply ? "before:bg-green/20" : ""
        )}
      >
        <div className="space-y-2.5">
          <div className="text-2xl font-bold">{label}</div>

          <div className="text-sm">{value}</div>
        </div>

        <Icon className="w-12 flex-none opacity-10" />
      </div>
    </div>
  );
}
