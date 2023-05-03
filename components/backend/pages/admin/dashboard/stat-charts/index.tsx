import React from "react";
import StatChart from "./stat-chart";
import Button from "@/components/backend/ui/form/button";
import SvgIcon from "@/components/ui/svg-icon";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import LineChart from "./line-chart";
import DonutChart from "./donut-chart";

export default function AdminDashboardStatChartsSection() {
  return (
    <section id="stat-charts" className="mt-[26px] grid grid-cols-3 gap-8">
      <StatChart
        icon="coins"
        title="Token purchase report"
        subtitle="Total token holders"
        className="col-span-2"
        action={
          <button className="inline-flex h-11 items-center gap-3 rounded-full bg-gradient-to-r from-primary-700 to-primary-400 px-[22px]">
            <SvgIcon name="activity" className="w-[18px] flex-none" />

            <span className="font-display font-bold">View report</span>
          </button>
        }
      >
        <div className="flex items-center">
          <div>
            <h4 className="text-sm font-medium text-secondary-300">
              Total sales of SPTT this month
            </h4>

            <div className="text-[43.2px] font-bold text-light">436.5k</div>

            <div className="inline-flex gap-1.5 rounded-[9px] bg-white/5 py-2 pl-3 pr-2 text-sm">
              <div className="font-display font-bold">3%</div>

              <div>increase</div>

              <ArrowTopRightOnSquareIcon className="w-4 flex-none text-green" />
            </div>
          </div>

          <div className="flex-1">
            <LineChart className="w-full" />
          </div>
        </div>
      </StatChart>

      <StatChart icon="dollar" title="Course report" subtitle="Total course purchase">
        <DonutChart className="w-full" />
      </StatChart>
    </section>
  );
}
