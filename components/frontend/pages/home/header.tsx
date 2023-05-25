import {
  ArrowDownOnSquareIcon,
  ChartBarIcon,
  PlayCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

import Button from "@/components/frontend/ui/form/button";
import HeroCard from "@/components/frontend/ui/blocks/hero-card";

import SvgIcon from "@/components/ui/svg-icon";

export default function HomeHeader() {
  return (
    <header className="relative z-0 flex h-[800px] items-center bg-night/20 md:items-end md:pb-[105px]">
      <SvgIcon
        name="../home-ellipse-1"
        className="absolute left-0 top-16 -z-10 h-[480px] w-[480px] -translate-x-1/2"
      />

      <div className="container grid md:grid-cols-2 md:gap-40">
        <div>
          <h2 className="font-display text-6xl/[63px] font-bold text-white md:text-[70px]/[78px]">
            Learn crypto with{" "}
            <span className="bg-gradient-to-r from-[#73ABFF] via-[#DE51EA] to-[#73ABFF] bg-clip-text text-transparent">
              spread tech token
            </span>
          </h2>

          <p className="mt-[21px] font-body text-2xl md:mt-[30px]">
            Achetez vos formations crypto et obtenez un nombre de pièces en
            staking pouvant vous générer jusqu’a 20% de ROI.
          </p>

          <div className="mt-[59px] flex gap-7 md:items-center md:gap-[37px]">
            <div className="pt-4 md:pt-0">
              <Button icon={ArrowDownOnSquareIcon}>Download whitepaper</Button>
            </div>

            <div className="cursor-pointer items-center gap-4 md:flex">
              <div className="flex aspect-square w-[88px] flex-none items-center justify-center rounded-full bg-white/5 before:absolute before:aspect-square before:w-[72px] before:rounded-full before:bg-white/10">
                <PlayCircleIcon className="w-12" />
              </div>

              <span className="md:text-2xl">Watch video</span>
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-full z-0 flex w-full -translate-y-14 flex-col items-stretch gap-4 px-8 md:relative md:top-0 md:block md:translate-y-0 md:px-0">
          <div className="hidden md:block">
            <SvgIcon
              name="../home-frame"
              className="absolute bottom-0 right-20 w-16"
            />
            <SvgIcon name="../home-frame-1" className="absolute left-24 w-16" />
            <SvgIcon
              name="../home-frame-2"
              className="absolute top-64 w-12 -translate-x-12"
            />

            <SvgIcon name="../home-grid-dots" className="absolute w-16" />

            <SvgIcon
              name="../home-group-supply"
              className="absolute top-20 md:w-[307px] md:-translate-x-6"
            />
            <SvgIcon
              name="../home-group-holders"
              className="absolute -top-10 left-48 md:w-[217px]"
            />
            <SvgIcon
              name="../home-group-amount-staked"
              className="absolute right-0 top-24 md:w-[226px]"
            />

            <SvgIcon
              name="../home-group-stakers"
              className="absolute left-16 top-72 w-[212px]"
            />
            <SvgIcon
              name="../home-polygon-3"
              className="absolute right-0 top-0 w-[280px] -translate-y-1/2 translate-x-1/2"
            />
            <SvgIcon
              name="../home-iphone-13"
              className="absolute left-44 top-0 w-[487px]"
            />
            <Image
              width={500}
              height={500}
              src="/images/home-iphone-design.png"
              alt="Phone design"
              className="absolute left-48 top-10 w-[204px]"
            />
          </div>

          <HeroCard
            supply
            icon={ChartBarIcon}
            label="Total supply"
            value="100,000,000,000 SPTT"
            className="md:hidden"
          />

          <HeroCard
            icon={UserGroupIcon}
            label="Total holders"
            value="1243"
            className="md:hidden"
          />

          <HeroCard
            icon={UserGroupIcon}
            label="Total staked"
            value="$19,684.98"
            className="md:hidden"
          />
        </div>

        <SvgIcon
          name="../home-crypto-mesh"
          className="absolute right-0 top-0 -z-10 hidden w-[515px] translate-x-1/3 md:block"
        />

        <SvgIcon
          name="../home-bg-light"
          className="absolute -z-20 scale-[3] opacity-20 md:-bottom-1/4 md:left-1/4 md:w-[880px] md:scale-100 md:opacity-100"
        />
        <SvgIcon
          name="../home-hallow"
          className="absolute -bottom-6 -right-20 -z-30 hidden w-[940px] blur-3xl md:block"
        />
      </div>
    </header>
  );
}
