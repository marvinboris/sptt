import React, { ReactElement } from "react";

import { NextPageWithLayout } from "../_app";

import Layout, { Head } from "@/components/backend/navigation/layout";
import CustomerKycListSection from "@/components/backend/pages/customer/kyc/sections/list";
import CustomerKycVerifySection from "@/components/backend/pages/customer/kyc/sections/verify";

import { useContentContext } from "@/utils/contexts/content";

const CustomerKycPage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
    },
  } = content!;

  const title = "KYC";
  const subtitle = "Verify your account";

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: ${subtitle}.`}
      />

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 flex items-stretch">
          <CustomerKycListSection title={title} subtitle={subtitle} />
        </div>

        <div>
          <CustomerKycVerifySection />
        </div>
      </div>
    </>
  );
};

CustomerKycPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CustomerKycPage;
