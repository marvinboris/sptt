import React, { ReactElement } from "react";

import Layout, { Head } from "@/components/backend/navigation/layout";

import { NextPageWithLayout } from "@/pages/_app";

import { useContentContext } from "@/utils/contexts/content";
import AdminSettingsGeneration from "@/components/backend/pages/admin/settings/generation";

const AdminSettingsGenerationPage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
      backend: {
        pages: {
          settings: { generation: title },
        },
      },
    },
  } = content!;

  const subtitle = "View and manage referal commission";

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: ${subtitle}.`}
      />

      <div className="xl:w-4/5 2xl:w-3/5">
        <AdminSettingsGeneration title={title} subtitle={subtitle} />
      </div>
    </>
  );
};

AdminSettingsGenerationPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminSettingsGenerationPage;
