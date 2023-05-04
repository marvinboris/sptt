import React, { ReactElement } from "react";

import Layout, { Head } from "@/components/backend/navigation/layout";
import AdminReportsPaidBonus from "@/components/backend/pages/admin/reports/paid-bonus";

import { NextPageWithLayout } from "@/pages/_app";

import { useContentContext } from "@/utils/contexts/content";

const AdminReportsPaidBonusPage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
      backend: {
        pages: {
          reports: { paid_bonus: title },
        },
      },
    },
  } = content!;

  const subtitle = "Bonus report"

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: ${subtitle}.`}
      />

      <AdminReportsPaidBonus title={title} subtitle={subtitle} />
    </>
  );
};

AdminReportsPaidBonusPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminReportsPaidBonusPage;
