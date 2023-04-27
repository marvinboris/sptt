import React from 'react';

import SvgIcon from "@/components/ui/svg-icon";

import { classNames } from "@/utils/helpers";

type RoadmapDateBlockProps = {
    achieved?: boolean;
    down?: boolean;
    period: string;
    text: string;
}

export default function RoadmapDateBlock({ achieved, down, period, text }: RoadmapDateBlockProps) {
    return <div
    className={classNames(
      "relative -mt-2 before:absolute before:z-20 before:h-8 before:w-8 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full md:before:h-11 md:before:w-11",
      achieved
        ? "before:bg-green"
        : "before:border-4 before:border-white before:bg-gradient-to-r before:from-primary-900 before:to-primary-400 after:absolute after:top-0 after:z-20 after:h-5 after:w-5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-white md:before:border-8"
    )}
  >
    {achieved ? (
      <SvgIcon
        name="check-circle-white"
        className="absolute z-30 w-4 max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-90 md:w-6 md:rotate-0"
      />
    ) : null}

    <div
      className={classNames(
        "absolute -ml-28 w-64 -rotate-90 leading-none",
        "md:left-full md:ml-0 md:-translate-x-1/2 md:rotate-0",
        down
          ? "bottom-full mb-32 md:top-full md:mb-0 md:mt-7"
          : "bottom-full mb-32 md:mb-7"
      )}
    >
      <span className="text-lg font-bold text-white">{period}</span>
      <br />
      <span className="font-body text-xs">{text}</span>
    </div>
  </div>
}