import React, { ReactElement } from "react";

import { NextPageWithLayout } from "../_app";

import Layout, { Head } from "@/components/backend/navigation/layout";
import CustomerPacks from "@/components/backend/pages/customer/packs";

import { useContentContext } from "@/utils/contexts/content";

const CustomerPacksPage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
    },
  } = content!;

  const title = "Pack list";
  const subtitle = "View all details on packs";

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: ${subtitle}.`}
      />

      <CustomerPacks />
    </>
  );
};

CustomerPacksPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CustomerPacksPage;
