import {
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  PencilIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React from "react";

import Button from "@/components/frontend/ui/form/button";
import Input from "@/components/frontend/ui/form/input";
import Select from "@/components/frontend/ui/form/select";
import TextArea from "@/components/frontend/ui/form/text-area";

export default function HomeContactSection() {
  return (
    <section className="relative z-0 flex flex-col items-center py-24">
      <h2 className="section-title max-w-2xl md:text-6xl">Contactez-nous</h2>

      <p className="mx-auto mt-5 max-w-3xl px-4 text-center font-body">
        {`Nous sommes disponibles pour vos suggestions et besoins. Prière de nous contact via le formulaire suivant.`}
      </p>

      <div className="relative mt-14 flex grid-cols-7 flex-col items-stretch md:grid">
        <div className="relative z-20 order-2 col-span-2 h-[200px] bg-white/50 md:order-1 md:h-auto">
          <iframe
            role="iframe"
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3613.8073542448806!2d55.1406664!3d25.0745178!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scm!4v1665798706407!5m2!1sen!2scm"
            className="absolute inset-0 h-full w-full"
          />
        </div>

        <div className="relative z-20 order-1 col-span-2 bg-gradient-to-tr from-primary-400 to-primary-700 px-8 py-12 text-white md:order-2 md:to-blue md:px-14">
          <div className="-mx-8 bg-black/30 px-8 py-5 md:mx-0 md:bg-transparent md:px-0 md:py-0">
            <p className="font-body text-xl md:text-base">
              Pour plus d’information sur nos produits et nos horaires
              d’ouverture, veuillez nous joindre par appel, ou prenez
              rendez-vous.
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-5">
            <div className="flex items-start gap-8 text-white">
              <EnvelopeIcon className="w-7 flex-none opacity-40" />
              <span>info@spreadtt.io</span>
            </div>
            <div className="flex items-start gap-8 text-white">
              <PhoneIcon className="w-7 flex-none opacity-40" />
              <span>(+237) 691 000 019</span>
            </div>
            <div className="flex items-start gap-8 text-white">
              <MapPinIcon className="w-7 flex-none opacity-40" />
              <span>
                Douala - Cameroon, Bonapriso, au niveau du carrefour Eto’o.
              </span>
            </div>
          </div>
        </div>

        <div className="inset-0 z-10 order-3 items-center bg-white pb-16 pt-12 md:absolute md:flex md:pb-0 md:pt-0">
          <div className="container grid-cols-7 md:grid">
            <div className="col-span-2" />

            <div className="col-span-2" />

            <div className="col-span-3 md:px-14">
              <form className="grid grid-cols-2 gap-x-6 gap-y-5">
                <Input
                  inputSize="sm"
                  id="name"
                  name="name"
                  icon={UserIcon}
                  placeholder="Your name"
                  required
                />
                <Input
                  inputSize="sm"
                  id="email"
                  type="email"
                  name="email"
                  icon={EnvelopeIcon}
                  placeholder="Email"
                  required
                />
                <Select
                  inputSize="sm"
                  id="subject"
                  name="subject"
                  icon={PencilIcon}
                  placeholder="Subject"
                  required
                >
                  <option value="">Subject</option>
                  <option value="1">Label 1</option>
                </Select>
                <Input
                  inputSize="sm"
                  id="phone"
                  type="tel"
                  name="phone"
                  icon={PhoneIcon}
                  placeholder="Phone No"
                  required
                />
                <TextArea
                  inputSize="sm"
                  id="message"
                  name="message"
                  className="col-span-2"
                  placeholder="Your message"
                  required
                />
                <div className="col-span-2 pt-3">
                  <Button icon={PaperAirplaneIcon}>Send message</Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="z-0 order-3 col-span-3 bg-white md:h-[426px]" />
      </div>
    </section>
  );
}
