import Image, { ImageProps } from "next/image";
import React from "react";

import { classNames } from "@/utils/helpers";

export default function Logo({
  className,
  ...props
}: Omit<ImageProps, "height" | "src" | "alt">) {
  return (
    <div className="">
      <Image
        height={500}
        width={500}
        {...props}
        priority
        src="/sptt.svg"
        alt="Logo"
        className={classNames("w-auto", className || "h-[60px]")}
      />
    </div>
  );
  // return <span className="text-primary-600 font-bold text-3xl flex items-center space-x-1"><span>HIALA</span><TvIcon className="w-8" /></span>
}
