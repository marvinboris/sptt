import {
  BriefcaseIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import React, { ReactElement } from "react";

import Layout, { Head } from "@/components/backend/navigation/layout";
import Button from "@/components/backend/ui/form/button";
import Input from "@/components/backend/ui/form/input";

import { useContentContext } from "@/utils/contexts/content";
import { useRoleContext } from "@/utils/contexts/role";

import { NextPageWithLayout } from "@/pages/_app";

const AdminSettingsMethodsPage: NextPageWithLayout = () => {
  const { content } = useContentContext();
  const { role } = useRoleContext();

  const {
    cms: {
      global: { app_name },
      backend: {
        pages: {
          settings: { company_profile },
        },
      },
    },
  } = content!;

  return (
    <>
      <Head
        link={`/${role}/settings/company-profile`}
        title={`${company_profile} | ${app_name}`}
        description={`${app_name}: View and manage users.`}
      />

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="rounded-[40px] bg-darkblue/40 pl-12 pr-14 pt-8 pb-[76px]">
            <div className="flex justify-between">
              <div>
              <div className="font-display text-[25px]/[1.21] font-bold">
                Company profile
              </div>

              <div className="mt-px text-sm text-white/40">
              View and manage users
              </div>

              <div className="mt-3.5 h-[7px] w-8 rounded-full bg-green" />
              </div>

              <div>
                <Button
                  className="font-display text-sm font-bold"
                  color="green"
                  icon={PlusIcon}
                >
                  Save settings
                </Button>
                </div>
            </div>

            <form className="mt-8 grid grid-cols-2 gap-8">
            <Input
                id="name"
                name="name"
                label="Company name"
                icon={BriefcaseIcon}
                defaultValue="info@spreadtt.io"
              />
              <Input
                id="email"
                type="email"
                name="email"
                label="Company Email ID"
                icon={EnvelopeIcon}
                defaultValue="info@spreadtt.io"
              />
              <Input
                id="company-phone"
                type="tel"
                name="company_phone"
                label="Company Phone"
                icon={PhoneIcon}
                defaultValue="+237 612 34 56 78"
              />
              <Input
                id="phone"
                type="tel"
                name="phone"
                label="Phone No. 2"
                icon={BriefcaseIcon}
                defaultValue="+237 612 34 56 78"
              />
            </form>
          </div>
        </div>

        <div>
          <div className="rounded-[40px] bg-darkblue/40 px-6 pt-5 pb-8 space-y-5">
          <iframe role="iframe"
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3613.8073542448806!2d55.1406664!3d25.0745178!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scm!4v1665798706407!5m2!1sen!2scm"
            className="aspect-video rounded-[25px]"
          />
          
          <div className="flex items-start gap-3.5">
            <MapPinIcon className="flex-none w-6 text-white/40" />

            <div className="pt-1 space-y-2.5">
              <div className="font-bold font-display text-white">Location</div>

              <p className="text-white/70">
              Douala - Cameroon, Bonapriso
              Rue chevreuil, en face du 
              Lycee Bilingue de Bonapriso,
              2ème etage, porte 203
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
          </div>
        </div>
      </div>
    </>
  );
};

AdminSettingsMethodsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminSettingsMethodsPage;
