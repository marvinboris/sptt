import React, { ReactElement } from "react";

import Layout, { Head } from "@/components/backend/navigation/layout";
import AdminSettingsKyc from "@/components/backend/pages/admin/settings/kyc";

import { useContentContext } from "@/utils/contexts/content";

import { NextPageWithLayout } from "@/pages/_app";

const AdminSettingsKycPage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
      backend: {
        pages: {
          settings: { kyc: title },
        },
      },
    },
  } = content!;

  const subtitle = "View and edit user kyc status";

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: ${subtitle}.`}
      />

      <AdminSettingsKyc title={title} subtitle={subtitle} />
    </>
  );
};

AdminSettingsKycPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminSettingsKycPage;
