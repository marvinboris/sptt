import { useRouter } from "next/router";
import React, { ReactElement } from "react";

import Layout, { Head } from "@/components/backend/navigation/layout";
import CustomerDashboardStatCardsSection from "@/components/backend/pages/customer/dashboard/sections/stat-cards";
import CustomerDashboardTrainingPacksSection from "@/components/backend/pages/customer/dashboard/sections/training-packs";

import { NextPageWithLayout } from "@/pages/_app";

import { useContentContext } from "@/utils/contexts/content";

const CustomerDashboardPage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const { route } = useRouter();
  const role = route.split("/")[2];

  const {
    cms: {
      global: { app_name },
    },
  } = content!;

  const title = "Dashboard";

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: Your personal dashboard.`}
      />

      <CustomerDashboardStatCardsSection />

      <div className="mt-10">
        <CustomerDashboardTrainingPacksSection />
      </div>
    </>
  );
};

CustomerDashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CustomerDashboardPage;
