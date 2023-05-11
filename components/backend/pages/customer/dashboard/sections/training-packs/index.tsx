import React from "react";

import Pack from "./pack";

import Button from "@/components/backend/ui/form/button";
import OwlCarousel from "@/components/frontend/ui/owl-carousel";

const array = [
  {
    photo: "/images/customer-dashboard-packs-1.webp",
    name: "Starter 1",
    description:
      "In this course, you will learn the basic about blockchain technology",
  },
  {
    photo: "/images/customer-dashboard-packs-2.webp",
    name: "Starter 2",
    description:
      "In this course, you will learn the basic about blockchain technology",
    amount: "569,450.89",
  },
  {
    photo: "/images/customer-dashboard-packs-3.webp",
    name: "Starter 3",
    description:
      "In this course, you will learn the basic about blockchain technology",
    amount: "886,109.23",
  },
  {
    photo: "/images/customer-dashboard-packs-4.webp",
    name: "Starter 4",
    description:
      "In this course, you will learn the basic about blockchain technology",
    amount: "886,109.23",
  },
];

export default function CustomerDashboardTrainingPacksSection() {
  const packs = array.map((pack, i) => (
    <Pack key={"training-pack-" + i} {...pack} index={i} />
  ));

  return (
    <section className="rounded-[40px] bg-darkblue/40 px-9 pb-9 pt-8">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h2 className="text-[25px]">Training packs</h2>

          <div className="h-[7px] w-8 rounded-full bg-green" />
        </div>

        <Button justify="center" className="hidden w-[152px] md:block">
          View pack list
        </Button>
      </div>

      <div className="mt-5">
        <div className="hidden grid-cols-4 gap-4 xl:grid">{packs}</div>

        <div className="xl:hidden">
          <OwlCarousel
            key="packs-carousel"
            role="list"
            loop
            responsive={{
              0: { items: 1 },
              768: { items: 2 },
              1280: { items: 3 },
            }}
            margin={30}
          >
            {packs}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}
