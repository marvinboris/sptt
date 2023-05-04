import React, { ReactElement } from "react";

import { NextPageWithLayout } from "../_app";

import Layout, { Head } from "@/components/backend/navigation/layout";
import CustomerCommissions from "@/components/backend/pages/customer/commissions";

import { useContentContext } from "@/utils/contexts/content";

const CustomerCommissionsPage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
    },
  } = content!;

  const title = "Commissions";
  const subtitle = "Referal commissions received";

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: ${subtitle}.`}
      />

      <CustomerCommissions title={title} subtitle={subtitle} />
    </>
  );
};

CustomerCommissionsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CustomerCommissionsPage;
