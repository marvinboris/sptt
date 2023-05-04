import React, { ReactElement } from "react";

import Layout, { Head } from "@/components/backend/navigation/layout";
import AdminSettingsMlm from "@/components/backend/pages/admin/settings/mlm";

import { NextPageWithLayout } from "@/pages/_app";

import { useContentContext } from "@/utils/contexts/content";

const AdminSettingsMlmPage: NextPageWithLayout = () => {
  const { content } = useContentContext();
  
  const {
    cms: {
      global: { app_name },
      backend: {
        pages: {
          settings: { mlm: title },
        },
      },
    },
  } = content!;

  const subtitle = "View and manage bonus settings"

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: ${subtitle}.`}
      />

      <div className="w-4/5">
        <AdminSettingsMlm subtitle={subtitle} />
      </div>
    </>
  );
};

AdminSettingsMlmPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminSettingsMlmPage;
