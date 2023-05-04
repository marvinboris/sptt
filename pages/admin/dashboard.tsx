import React, { ReactElement } from "react";

import Layout, { Head } from "@/components/backend/navigation/layout";
import AdminDashboardStatCardsSection from "@/components/backend/pages/admin/dashboard/sections/stat-cards";
import AdminDashboardStatChartsSection from "@/components/backend/pages/admin/dashboard/sections/stat-charts";

import { NextPageWithLayout } from "@/pages/_app";

import { useContentContext } from "@/utils/contexts/content";

const AdminDashboardPage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
      backend: {
        pages: {
          dashboard: {
            admin: { title },
          },
        },
      },
    },
  } = content!;

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: Your personal dashboard.`}
      />
      
      <AdminDashboardStatCardsSection />

      <AdminDashboardStatChartsSection />
    </>
  );
};

AdminDashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminDashboardPage;
