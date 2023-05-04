import { MapPinIcon } from "@heroicons/react/24/outline";
import React from "react";

import Button from "@/components/backend/ui/form/button";

export default function AdminSettingsCompanyProfileLocationSection() {
  return (
    <section
      id="location"
      className="space-y-5 rounded-[40px] bg-darkblue/40 px-6 pb-8 pt-5"
    >
      <iframe
        role="iframe"
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3613.8073542448806!2d55.1406664!3d25.0745178!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scm!4v1665798706407!5m2!1sen!2scm"
        className="aspect-video rounded-[25px]"
      />

      <div className="flex items-start gap-3.5">
        <MapPinIcon className="w-6 flex-none text-white/40" />

        <div className="space-y-2.5 pt-1">
          <div className="font-display font-bold text-white">Location</div>

          <p className="text-white/70">
            Douala - Cameroon, Bonapriso Rue chevreuil, en face du Lycee
            Bilingue de Bonapriso, 2ème etage, porte 203
          </p>
        </div>
      </div>

      <div>
        <Button
          className="w-full font-display text-sm font-bold"
          justify="center"
        >
          Edit map location
        </Button>
      </div>
    </section>
  );
}
