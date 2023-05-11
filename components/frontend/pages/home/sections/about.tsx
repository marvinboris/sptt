import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from 'react';

import Button from "@/components/frontend/ui/form/button";
import SvgIcon from "@/components/ui/svg-icon";

export default function HomeAboutSection() {
  return (
    <section className="relative py-20">
      <SvgIcon
        name="../home-grid-dots-2"
        className="absolute right-0 -z-50 h-24 w-24 translate-x-1/3 md:hidden"
      />

      <SvgIcon
        name="../home-grid-dots"
        className="absolute -left-10 top-[180px] hidden w-28 md:block"
      />

      <div className="container grid grid-cols-1 items-center md:grid-cols-2 md:gap-14">
        <div className="text-white">
          <h2 className="section-title md:pr-40 md:text-[38px]">
            What is Spread Tech Token ?
          </h2>

          <p className="mt-11 text-center font-body text-xl md:text-left">
            {`Spread Tech Token (SPTT) a été créé pour soutenir le projet de vulgarisation et éduquer davantage sur l'industrie de la cryptographie et ses opportunités et/ou dangers. Nous visons à ouvrir une crypto trading solutions and consulting academy complète au Cameroun avec des succursales dans plusieurs pays africains.`}
          </p>

          <div className="mt-11 hidden md:block">
            <Button icon={ArrowRightIcon} className="w-[226px]">
              Join Us
            </Button>
          </div>
        </div>

        <div className="relative">
          <SvgIcon
            name="../home-bg-light"
            className="absolute -left-20 top-20 w-[440px]"
          />
          <SvgIcon
            name="../home-bg-light"
            className="absolute right-0 top-0 -z-20 w-[220px]"
          />

          <Image
            height={1400}
            width={1400}
            sizes="(max-width: 1400px) 100vw, 1400px"
            src="/images/home-computer/Other-07_habeqb_c_scale,w_1400.webp"
            alt="Home - Computer"
            className="relative z-0"
            data-aos="fade-left"
          />
        </div>

        <div className="mt-10 text-center md:hidden">
          <Button icon={ArrowRightIcon} className="w-[226px]">
            Join Us
          </Button>
        </div>
      </div>
    </section>
  );
}
