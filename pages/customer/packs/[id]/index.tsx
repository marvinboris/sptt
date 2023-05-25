import React, { ReactElement } from "react";

import Layout, { Head } from "@/components/backend/navigation/layout";
import CustomerPackDetails from "@/components/backend/pages/customer/packs/details";

import { NextPageWithLayout } from "@/pages/_app";

import { useContentContext } from "@/utils/contexts/content";

const CustomerPackDetailsPage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
    },
  } = content!;

  const title = "Pack details";
  const subtitle = "View all details on packs";

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: ${subtitle}.`}
      />

      <CustomerPackDetails />
    </>
  );
};

CustomerPackDetailsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CustomerPackDetailsPage;
