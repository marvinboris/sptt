import React, { ReactElement } from "react";

import Layout, { Head } from "@/components/backend/navigation/layout";
import AdminSettingsCompanyProfileFormSection from "@/components/backend/pages/admin/settings/company-profile/sections/form";
import AdminSettingsCompanyProfileLocationSection from "@/components/backend/pages/admin/settings/company-profile/sections/location";

import { NextPageWithLayout } from "@/pages/_app";

import { useContentContext } from "@/utils/contexts/content";

const AdminSettingsMethodsPage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
      backend: {
        pages: {
          settings: { company_profile: title },
        },
      },
    },
  } = content!;

  const subtitle = "View and manage users";

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: ${subtitle}.`}
      />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2">
          <AdminSettingsCompanyProfileFormSection />
        </div>

        <div>
          <AdminSettingsCompanyProfileLocationSection />
        </div>
      </div>
    </>
  );
};

AdminSettingsMethodsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminSettingsMethodsPage;
