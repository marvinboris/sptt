import React, { ReactElement } from "react";

import Layout, { Head } from "@/components/backend/navigation/layout";
import AdminSettingsMethodsPaymentMethodsSection from "@/components/backend/pages/admin/settings/methods/sections/payment-methods";
import AdminSettingsMethodsPaymentMethodSection from "@/components/backend/pages/admin/settings/methods/sections/payment-method";

import { NextPageWithLayout } from "@/pages/_app";

import { useContentContext } from "@/utils/contexts/content";

const AdminSettingsMethodsPage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
      backend: {
        pages: {
          settings: { methods: title },
        },
      },
    },
  } = content!;

  const subtitle = "View and manage payment methods";

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: ${subtitle}.`}
      />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2">
          <AdminSettingsMethodsPaymentMethodsSection
            title={title}
            subtitle={subtitle}
          />
        </div>

        <div>
          <AdminSettingsMethodsPaymentMethodSection />
        </div>
      </div>
    </>
  );
};

AdminSettingsMethodsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminSettingsMethodsPage;
