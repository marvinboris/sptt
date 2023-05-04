import React, { ReactElement } from "react";

import { NextPageWithLayout } from "../_app";

import Layout, { Head } from "@/components/backend/navigation/layout";
import AdminPayouts from "@/components/backend/pages/admin/payouts";

import { useContentContext } from "@/utils/contexts/content";

const AdminPayoutsPage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
      backend: {
        pages: {
          payouts: { index: title },
        },
      },
    },
  } = content!;

  const subtitle = "View and manage payouts";

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: ${subtitle}.`}
      />

      <AdminPayouts title={title} subtitle={subtitle} />
    </>
  );
};

AdminPayoutsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminPayoutsPage;
