import { ArrowRightIcon, CubeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { classNames } from "@/utils/helpers";

interface Props {
  index: number;
  id: number;
  link?: string;
  photo: string;
  name: string;
  description: string;
  amount?: string;
}

export default function Pack({
  id,
  index,
  photo,
  name,
  description,
  amount,
}: Props) {
  return (
    <article className="rounded-[28px] bg-darkblue/40 px-3.5 pb-8 pt-3.5 text-[11px]">
      <div
        className={classNames(
          "h-28 rounded-2xl p-1",
          index === 0
            ? "bg-[#E39CA61A]"
            : index === 1
            ? "bg-[#39377F1A]"
            : index === 2
            ? "bg-[#87BADB1A]"
            : index === 3
            ? "bg-[#E46D7F14]"
            : "bg-white/10"
        )}
      >
        <Image
          width={500}
          height={500}
          src={photo}
          alt={name}
          className="h-full w-full object-contain object-center"
        />
      </div>

      <div className="mt-2.5 flex items-center justify-between">
        <div className="inline-flex h-7 items-center gap-[7px] rounded-[7px] bg-white/10 pl-2 pr-4">
          <CubeIcon className="w-3.5 text-primary-400" />

          <div className="font-display font-bold text-white">{name}</div>
        </div>

        <Link
          href={`packs/${id}`}
          className="inline-flex items-center gap-0.5 text-green"
        >
          <span>View details</span>

          <ArrowRightIcon className="w-3.5" />
        </Link>
      </div>

      <p className="mt-3.5 line-clamp-2 text-white/70">{description}</p>

      <div className="5 mt-2 flex items-start gap-1">
        <div className="font-display text-lg font-bold text-light/90">
          {index === 0 ? <>$250 USD</> : amount}
        </div>

        <div className="text-10px mt-1">
          {index === 0 ? <>(23,909,814.00 SPTT)</> : "SPTT"}
        </div>
      </div>
    </article>
  );
}
