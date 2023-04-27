import React, { ReactNode } from "react";

import OwlCarousel from "@/components/frontend/ui/owl-carousel";
import SvgIcon from "@/components/ui/svg-icon";

type HomeTeamSectionProps = {
  team: ReactNode;
};

export default function HomeTeamSection({ team }: HomeTeamSectionProps) {
  return (
    <section className="relative z-0 flex flex-col items-center py-24">
      <SvgIcon
        name="../home-polygon-5"
        className="absolute left-0 top-10 -z-10 hidden w-36 md:block"
      />
      <SvgIcon
        name="../home-grid-dots-4"
        className="absolute left-0 top-16 -z-10 w-16 md:hidden"
      />

      <SvgIcon
        name="../home-ellipse-2"
        className="absolute right-0 top-0 -z-10 hidden w-32 -translate-y-1/3 md:block"
      />
      <SvgIcon
        name="../home-ellipse-3"
        className="absolute right-0 top-0 -z-10 w-20 md:hidden"
      />

      <h2 className="section-title max-w-2xl md:text-6xl">Notre équipe</h2>

      <p className="mx-auto mt-5 max-w-3xl px-4 text-center font-body text-xl md:text-base">
        {`En achetant un programme de formation chez Crypto Trading Solutions and Consulting Academy, il est important de prendre connaissance de ces facteurs`}
      </p>

      <div className="mt-14 w-full">
        <div className="container hidden h-96 grid-cols-4 items-center gap-7 md:grid">
          {team}
        </div>

        <div className="md:hidden">
          <OwlCarousel
            key="team-carousel"
            role="list"
            className="team"
            center
            loop
            items={1}
            stagePadding={66}
            margin={30}
          >
            {team}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}
