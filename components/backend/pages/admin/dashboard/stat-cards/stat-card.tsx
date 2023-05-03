import React from "react";

import SvgIcon from "@/components/ui/svg-icon";

interface StatCardProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

export default function StatCard({ icon, title, children }: StatCardProps) {
  return (
    <div className="rounded-[20px] bg-black/20 pb-3.5 pl-6 pr-4 pt-[22px]">
      <h3 className="font-body">{title}</h3>

      <div className="mt-[13px] h-[5px] w-6 rounded-full bg-lightorange/20" />

      <div className="mt-[30px] flex justify-between">
        <div className="font-display text-[30px] font-bold text-light">
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
