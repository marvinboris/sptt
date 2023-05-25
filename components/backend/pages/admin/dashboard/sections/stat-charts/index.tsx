import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

import DonutChart from "./donut-chart";
import LineChart from "./line-chart";
import StatChart from "./stat-chart";
import SvgIcon from "@/components/ui/svg-icon";

export default function AdminDashboardStatChartsSection() {
  return (
    <section id="stat-charts" className="mt-[26px] grid gap-8 xl:grid-cols-3">
      <StatChart
        icon="coins"
        title="Token purchase report"
        subtitle="Total token holders"
        className="xl:col-span-2"
        action={
          <Link
            href="/admin/reports/purchase"
            className="hidden h-11 items-center gap-3 rounded-full bg-gradient-to-r from-primary-700 to-primary-400 px-[22px] sm:inline-flex"
          >
            <SvgIcon name="activity" className="w-[18px] flex-none" />

            <span className="font-display font-bold">View report</span>
          </Link>
        }
      >
        <div className="flex flex-wrap items-center md:flex-nowrap">
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

          <div className="md:flex-1">
            <LineChart className="w-full" />
          </div>
        </div>
      </StatChart>

      <StatChart
        icon="dollar"
        title="Course report"
        subtitle="Total course purchase"
      >
        <DonutChart className="w-full" />
      </StatChart>
    </section>
  );
}
