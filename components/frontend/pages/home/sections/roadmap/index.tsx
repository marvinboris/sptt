import React, { ReactNode } from "react";

import TokenDistribution from "./token-distributon";
import SvgIcon from "@/components/ui/svg-icon";

type HomeRoadmapSectionProps = {
  roadmapDates: ReactNode;
};

export default function HomeRoadmapSection({
  roadmapDates,
}: HomeRoadmapSectionProps) {
  return (
    <section className="relative z-0 overflow-clip pb-24 md:bg-night/40 md:pt-24">
      <SvgIcon
        name="network"
        className="absolute -left-3/4 top-9 -z-10 w-[500px] md:-left-1/4"
      />
      <SvgIcon
        name="network"
        className="absolute -right-3/4 bottom-6 -z-10 w-[500px] rotate-180 md:-right-1/4"
      />

      <div className="container">
        <h2 className="section-title md:text-[45px]">Feuille de route</h2>
      </div>

      <div className="-mt-8 flex h-[100px] origin-left rotate-90 items-center md:mt-0 md:h-11 md:rotate-0">
        <div className="-mt-36 h-1.5 w-full rounded-full bg-gradient-to-r from-white/20 to-transparent md:mt-36 md:h-2.5 md:rounded-none md:bg-white/20">
          <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-primary-700 to-primary-400 md:rounded-l-none" />

          <div className="container relative flex items-center justify-around">
            {roadmapDates}
          </div>
        </div>
      </div>

      <div className="container mt-96 items-center md:mt-32 md:flex">
        <div className="section-title flex-none md:w-2/5 md:text-[45px]">
          Token distribution
        </div>

        <div className="flex h-60 flex-1 items-center overflow-clip md:block md:h-96">
          <TokenDistribution />
        </div>
      </div>
    </section>
  );
}
