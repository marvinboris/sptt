import React, { ReactElement } from "react";

import { NextPageWithLayout } from "../../_app";

import Layout, { Head } from "@/components/backend/navigation/layout";
import AdminPacksCreate from "@/components/backend/pages/admin/packs/create";

import { useContentContext } from "@/utils/contexts/content";

const AdminPacksCreatePage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
      backend: {
        pages: {
          packs: { add: title },
        },
      },
    },
  } = content!;

  const subtitle = "List of training course packs";

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: ${subtitle}.`}
      />

        <AdminPacksCreate />
    </>
  );
};

AdminPacksCreatePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminPacksCreatePage;
