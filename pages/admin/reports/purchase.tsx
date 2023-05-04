import React, { ReactElement } from "react";

import Layout, { Head } from "@/components/backend/navigation/layout";
import AdminReportsPurchase from "@/components/backend/pages/admin/reports/purchase";

import { NextPageWithLayout } from "@/pages/_app";

import { useContentContext } from "@/utils/contexts/content";

const AdminReportsPurchasePage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
      backend: {
        pages: {
          reports: { purchase: title },
        },
      },
    },
  } = content!;

  const subtitle = "View all transactions";

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: ${subtitle}.`}
      />

      <AdminReportsPurchase title={title} subtitle={subtitle} />
    </>
  );
};

AdminReportsPurchasePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminReportsPurchasePage;
