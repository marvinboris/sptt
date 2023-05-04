import React, { ReactElement } from "react";

import { NextPageWithLayout } from "../_app";

import Layout, { Head } from "@/components/backend/navigation/layout";
import CustomerBonus from "@/components/backend/pages/customer/bonus";

import { useContentContext } from "@/utils/contexts/content";

const CustomerBonusPage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
    },
  } = content!;

  const title = "Bonus";
  const subtitle = "Level bonus received";

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: ${subtitle}.`}
      />

      <CustomerBonus title={title} subtitle={subtitle} />
    </>
  );
};

CustomerBonusPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CustomerBonusPage;
