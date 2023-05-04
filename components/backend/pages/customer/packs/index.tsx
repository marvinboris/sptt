import React from "react";

import Pack from "./pack";

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
  {
    photo: "/images/customer-dashboard-packs-1.webp",
    name: "Starter 5",
    description:
      "In this course, you will learn the basic about blockchain technology",
  },
  {
    photo: "/images/customer-dashboard-packs-2.webp",
    name: "Starter 6",
    description:
      "In this course, you will learn the basic about blockchain technology",
    amount: "569,450.89",
  },
];

export default function CustomerPacks() {
  const packs = array.map((pack, i) => (
    <Pack key={"pack-" + i} {...pack} index={i % 4} />
  ));

  return <div className="grid grid-cols-4 gap-4">{packs}</div>;
}
