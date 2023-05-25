import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";

import SvgIcon from "@/components/ui/svg-icon";
import Button from "../form/button";

interface PackBlockProps {
  name: string;
  amount: number;
}

export default function PackBlock({ name, amount }: PackBlockProps) {
  return (
    <div className="group flex-none rounded-[30px] bg-white px-6 pb-8 pt-5 transition-all duration-200 md:w-[308px] md:pb-12 md:hover:pb-8">
      <h3 className="inline-flex h-11 items-center rounded-lg bg-blue/10 px-6 text-lg/none font-bold text-blue">
        {name}
      </h3>

      <div className="mt-4 flex items-end">
        <span className="text-3xl/none font-bold text-blue">${amount}</span>

        <span className="ml-1 text-xs text-secondary-500/60">
          (128,877,812.32 SPTT)
        </span>
      </div>

      <div className="mt-[18px] space-y-1">
        {[
          "Support de cours",
          "Videos de formation",
          "Zoom chaque (02) mois pendant (01) an.",
          "Suivie dans le groupe Telegram",
          "Évaluations (Théorique et pratique) avec corrections.",
        ].map((item, i) => (
          <div key={`pack-item-${i}`} className="flex items-start">
            <div className="w-5 flex-none">
              <SvgIcon name="check-circle" className="w-full" />
            </div>

            <div className="ml-3.5 text-xs text-secondary-600">{item}</div>
          </div>
        ))}
      </div>

      <div className="max-h-0 pt-5 opacity-0 transition-all duration-200 md:group-hover:max-h-20 md:group-hover:opacity-100">
        <Button icon={ArrowRightIcon} className="w-full">
          Voir plus
        </Button>
      </div>
    </div>
  );
}
