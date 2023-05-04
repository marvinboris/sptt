import React, { ReactElement } from "react";

import Layout, { Head } from "@/components/backend/navigation/layout";
import AdminSettingsSystemUser from "@/components/backend/pages/admin/settings/system-user";

import { NextPageWithLayout } from "@/pages/_app";

import { useContentContext } from "@/utils/contexts/content";

const AdminSettingsSystemUserPage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
      backend: {
        pages: {
          settings: { system_user: title },
        },
      },
    },
  } = content!;

  const subtitle = "View and manage users";

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: ${subtitle}.`}
      />

      <div className="w-3/4">
        <AdminSettingsSystemUser title={title} subtitle={subtitle} />
      </div>
    </>
  );
};

AdminSettingsSystemUserPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminSettingsSystemUserPage;
