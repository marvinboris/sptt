import { HomeIcon } from "@heroicons/react/24/outline";
import React, { ReactElement } from "react";

import { NextPageWithLayout } from "../_app";

import Layout, { Head } from "@/components/backend/navigation/layout";
import AdminDashboardStatCardsSection from "@/components/backend/pages/admin/dashboard/stat-cards";
import AdminDashboardStatChartsSection from "@/components/backend/pages/admin/dashboard/stat-charts";

import { useContentContext } from "@/utils/contexts/content";
import { useRoleContext } from "@/utils/contexts/role";

const data = {
  blocks: {
    totalPurchase: "38.45k",
    totalTokenHolders: 102,
    totalCoursesPakcs: 18,
    todaysPurchase: "65.89k",
  },
};

const AdminDashboardPage: NextPageWithLayout = () => {
  const { content } = useContentContext();
  const { role } = useRoleContext();

  const {
    cms: {
      global: { app_name },
      backend: {
        pages: {
          dashboard: {
            [role as "admin" | "user"]: { title },
          },
        },
      },
    },
  } = content!;

  return (
    <>
      <Head
        link={`/${role}/dashboard`}
        title={`${title} | ${app_name}`}
        description={`${app_name}: Votre tableau de bord personnel.`}
      />
      
      <AdminDashboardStatCardsSection blocks={data.blocks} />

      <AdminDashboardStatChartsSection />
    </>
  );
};

AdminDashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminDashboardPage;
