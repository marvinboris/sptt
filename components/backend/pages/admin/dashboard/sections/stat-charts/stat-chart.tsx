import SvgIcon from "@/components/ui/svg-icon";
import { classNames } from "@/utils/helpers";
import React from "react";

type Props = React.ComponentProps<"div"> & {
  icon: string;
  title: string;
  subtitle: string;
  action?: React.ReactNode;
};

export default function StatChart({
  title,
  subtitle,
  action,
  children,
  className,
  icon,
}: Props) {
  return (
    <div
      className={classNames(
        "space-y-5 rounded-[40px] bg-darkblue/40 pb-10 pl-[26px] pr-9 pt-[26px]",
        className || ""
      )}
    >
      <div className="flex items-start">
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex aspect-square w-14 items-center justify-center rounded-xl bg-white/10">
            <SvgIcon
              name={icon}
              className={classNames("flex-none", action ? "w-6" : "w-9")}
            />
          </div>

          <div className="space-y-1">
            <h2 className="font-display text-[25px] font-bold text-white">
              {title}
            </h2>

            <p className="text-sm opacity-60">{subtitle}</p>
          </div>
        </div>

        <div className="ml-auto">{action}</div>
      </div>

      {children}
    </div>
  );
}
