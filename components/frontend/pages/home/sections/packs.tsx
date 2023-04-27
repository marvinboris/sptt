import React, { ReactNode } from "react";

import OwlCarousel from "@/components/frontend/ui/owl-carousel";
import SvgIcon from "@/components/ui/svg-icon";

type HomePacksSectionProps = {
  packs: ReactNode;
};

export default function HomePacksSection({ packs }: HomePacksSectionProps) {
  return (
    <section className="relative flex flex-col items-center py-28">
      <SvgIcon
        name="../home-grid-dots-3"
        className="absolute left-0 -z-50 h-24 w-24 -translate-x-1/3 md:hidden"
      />

      <SvgIcon
        name="../home-grid-dots"
        className="absolute -right-16 top-28 hidden w-40 md:block"
      />

      <h2 className="section-title px-16 md:px-0 md:text-6xl">
        Packs de formation
      </h2>

      <p className="mx-auto mt-5 max-w-3xl px-4 text-center font-body text-xl md:text-base">
        {`Il n'y a qu'une seule façon de devenir un Spread Tech Token,  c’est utilisant le lien d'un membre déjà existant. La politique  commerciale de l'entreprise est le marketing relationnel.`}
      </p>

      <div className="mt-14 w-full scrollbar-none md:overflow-auto">
        <div className="container hidden h-96 flex-nowrap items-center gap-7 md:flex">
          {packs}
        </div>

        <div className="md:hidden">
          <OwlCarousel
            key="packs-carousel"
            role="list"
            className="packs"
            center
            loop
            items={1}
            stagePadding={60}
            margin={28}
          >
            {packs}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}
