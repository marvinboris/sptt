import Image from "next/image";
import React from 'react';

import SvgIcon from "@/components/ui/svg-icon";

type TeamMemberBlockProps = {
  name: string;
  job: string;
  photo: string;
};

export default function TeamMemberBlock({
  name,
  photo,
  job,
}: TeamMemberBlockProps) {
  return (
    <div className="team-member group rounded-[30px] bg-gradient-to-r from-primary-400 to-blue p-0 text-center shadow-none shadow-primary-400/[.8] transition-all duration-200 md:hover:p-px md:hover:shadow-xl">
      <div className="relative z-0 flex flex-col items-center overflow-clip rounded-[30px] bg-secondary-900 pb-7 pt-9 transition-all duration-200 after:absolute after:inset-0 after:bg-white/10 md:group-hover:pt-8">
        <div className="h-24 w-24 rounded-full border-8 border-white outline outline-[6px] outline-white/10 transition-all duration-200 md:group-hover:h-32 md:group-hover:w-32 md:group-hover:border-[12px] md:group-hover:outline-8">
          <Image
            width={500}
            height={500}
            src={`/images/${photo}.png`}
            alt={`Photo - ${name.toLowerCase()}`}
            className="image-cover rounded-full bg-white"
          />
        </div>

        <div className="mt-0 h-2 max-h-0 w-[50px] rounded-full bg-transparent transition-all duration-200 md:group-hover:mt-[22px] md:group-hover:max-h-2 md:group-hover:bg-white/10" />

        <div className="mt-9 text-xl/none font-bold transition-all duration-200 md:group-hover:mt-2.5">
          {name}
        </div>

        <div className="text-sm">{job}</div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          <SvgIcon name="facebook" className="w-9" />
          <SvgIcon name="linkedin" className="w-9" />
          <SvgIcon name="twitter" className="w-9" />
        </div>
      </div>
    </div>
  );
}
