import React, { ReactNode } from "react";

import SvgIcon from "@/components/ui/svg-icon";

type HomeFactorsSectionProps = {
  factors: ReactNode;
};

export default function HomeFactorsSection({
  factors,
}: HomeFactorsSectionProps) {
  return (
    <section className="relative flex flex-col items-center pb-40 pt-7">
      <SvgIcon
        name="../home-grid-dots"
        className="absolute -left-16 top-28 hidden w-40 md:block"
      />

      <h2 className="section-title container max-w-2xl text-center md:text-6xl">
        Les facteurs influents du prix du SPTT
      </h2>

      <p className="mx-auto mt-5 max-w-3xl px-4 text-center font-body text-xl md:text-base">
        {`En achetant un programme de formation chez Crypto Trading Solutions and Consulting Academy, il est important de prendre connaissance de ces facteurs`}
      </p>

      <div className="mt-14 w-full">
        <div className="mx-auto flex flex-wrap justify-center gap-y-2.5 px-8 md:max-w-5xl md:gap-y-7 md:px-0">
          {factors}
        </div>
      </div>
    </section>
  );
}
