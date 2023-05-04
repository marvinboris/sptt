import React, { ReactElement } from "react";

import Layout, { Head } from "@/components/backend/navigation/layout";
import AdminSettingsSendToken from "@/components/backend/pages/admin/settings/send-token";

import { useContentContext } from "@/utils/contexts/content";

import { NextPageWithLayout } from "@/pages/_app";

const AdminSettingsSendTokenPage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
      backend: {
        pages: {
          settings: { send_token: title },
        },
      },
    },
  } = content!;

  const subtitle = "Send token to a wallet";

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: ${subtitle}.`}
      />

      <AdminSettingsSendToken title={title} subtitle={subtitle} />
    </>
  );
};

AdminSettingsSendTokenPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminSettingsSendTokenPage;
