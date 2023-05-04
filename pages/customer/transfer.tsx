import React, { ReactElement } from "react";

import { NextPageWithLayout } from "../_app";

import Layout, { Head } from "@/components/backend/navigation/layout";
import CustomerTransfer from "@/components/backend/pages/customer/transfer";

import { useContentContext } from "@/utils/contexts/content";

const CustomerTransferPage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
    },
  } = content!;

  const title = "Transfer";
  const subtitle = "List of all transfers";

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: ${subtitle}.`}
      />

      <CustomerTransfer title={title} subtitle={subtitle} />
    </>
  );
};

CustomerTransferPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CustomerTransferPage;
