import React, { ReactElement } from "react";

import Layout, { Head } from "@/components/backend/navigation/layout";
import AdminReportsCommission from "@/components/backend/pages/admin/reports/commission";

import { NextPageWithLayout } from "@/pages/_app";

import { useContentContext } from "@/utils/contexts/content";

const AdminReportsCommissionPage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
      backend: {
        pages: {
          reports: { commission: title },
        },
      },
    },
  } = content!;

  const subtitle = "View and manage commissions";

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: ${subtitle}.`}
      />

      <AdminReportsCommission title={title} subtitle={subtitle} />
    </>
  );
};

AdminReportsCommissionPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminReportsCommissionPage;
