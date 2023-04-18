import { ArrowRightIcon } from "@heroicons/react/24/outline";

import SvgIcon from "@/components/ui/svg-icon";
import Button from "../form/button";

interface PackBlockProps {
  name: string;
  amount: number;
}

export default function PackBlock({ name, amount }: PackBlockProps) {
  return (
    <div className="group w-[308px] flex-none rounded-[30px] bg-white px-6 pb-12 pt-5 transition-all duration-200 hover:pb-8">
      <h3 className="inline-flex items-center h-11 rounded-lg bg-blue/10 px-6 text-lg/none font-bold text-blue">
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
            <SvgIcon name="check-circle" className="w-5 flex-none" />

            <div className="ml-3.5 text-xs text-secondary-600">{item}</div>
          </div>
        ))}
      </div>

      <div className="max-h-0 pt-5 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-200">
        <Button icon={ArrowRightIcon} className="w-full">
          Voir plus
        </Button>
      </div>
    </div>
  );
}
