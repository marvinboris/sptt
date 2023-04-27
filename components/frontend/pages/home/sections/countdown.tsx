import React from 'react';

import SvgIcon from "@/components/ui/svg-icon";

export default function HomeCountdownSection() {
    return <section className="relative z-0 flex flex-col items-center gap-14 pb-24 pt-96 md:bg-night/40 md:py-24">
    <SvgIcon
      name="../home-grid-dots-1"
      className="absolute left-0 -z-50 h-24 w-24 -translate-x-1/3 md:hidden"
    />

    <SvgIcon
      name="../home-polygon-1"
      className="absolute right-0 top-32 -z-50 h-[280px] w-[280px] translate-x-1/4 md:hidden"
    />

    <h2 className="section-title px-16 text-center md:px-0 md:text-[45px]">
      Private sales starting in :
    </h2>

    <div className="grid grid-cols-4 gap-6 px-8 md:px-0">
      {[
        [178, "days"],
        [23, "hours"],
        [56, "minutes"],
        [23, "seconds"],
      ].map(([value, label]) => (
        <div
          key={value + "-" + label}
          className="flex aspect-square w-20 flex-col items-center justify-center gap-2 rounded-[15px] bg-white/10 md:w-[100px]"
        >
          <div className="text-[27px] font-bold leading-none text-white md:text-[35px]">
            {value}
          </div>
          <div className="text-xs font-light uppercase md:text-base">
            {label}
          </div>
        </div>
      ))}
    </div>

    <div className="container relative flex items-center">
      <div className="absolute top-1/2 z-10 h-1.5 w-1/4 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary-900 to-primary-400 before:absolute before:left-full before:top-1/2 before:z-20 before:h-7 before:w-7 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border-4 before:border-white before:bg-gradient-to-r before:from-primary-900 before:to-primary-400 after:absolute after:left-full after:top-1/2 after:z-20 after:h-3 after:w-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-white">
        <div className="absolute left-full top-full mt-5 -translate-x-1/2 truncate text-left leading-none md:mt-3 md:text-center">
          <span className="font-bold text-white md:text-lg">
            $34,569.93
          </span>
          <br />
          <span className="text-xs">193,943,348.87 SPTT</span>
        </div>
      </div>

      <div className="relative z-0 h-1.5 flex-1 rounded-l-full bg-white/20" />

      <div className="relative aspect-square w-7 flex-none rounded-full bg-white/20">
        <div className="absolute left-1/2 top-full mt-1 -translate-x-full truncate text-sm md:-translate-x-1/2">
          December 2023
        </div>
      </div>
    </div>
  </section>
}