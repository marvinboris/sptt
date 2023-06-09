import React, { ReactElement } from "react";

import { NextPageWithLayout } from "../_app";

import Layout, { Head } from "@/components/backend/navigation/layout";
import CustomerSettingsProfileSection from "@/components/backend/pages/customer/settings/sections/profile";
import CustomerSettingsPasswordSection from "@/components/backend/pages/customer/settings/sections/password";
import CustomerSettingsCscSection from "@/components/backend/pages/customer/settings/sections/csc";
import CustomerSettingsPinSection from "@/components/backend/pages/customer/settings/sections/pin";

import { useContentContext } from "@/utils/contexts/content";

const CustomerSettingsPage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
    },
  } = content!;

  const title = "Settings";
  const subtitle = "View and manage your profile";

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: ${subtitle}.`}
      />

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
        <div className="flex items-stretch xl:col-span-2">
          <CustomerSettingsProfileSection />
        </div>

        <div>
          <CustomerSettingsPasswordSection />
        </div>

        <div className="flex items-stretch xl:col-span-2">
          <CustomerSettingsCscSection />
        </div>

        <div>
          <CustomerSettingsPinSection />
        </div>
      </div>
    </>
  );
};

CustomerSettingsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CustomerSettingsPage;
