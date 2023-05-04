import React, { ReactElement } from "react";

import { NextPageWithLayout } from "../_app";

import Layout, { Head } from "@/components/backend/navigation/layout";
import AdminUsers from "@/components/backend/pages/admin/users";

import { useContentContext } from "@/utils/contexts/content";

const AdminUsersPage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
      backend: {
        pages: {
          users: { index: title },
        },
      },
    },
  } = content!;

  const subtitle = "All users with no purchase";

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: ${subtitle}.`}
      />

      <AdminUsers title={title} subtitle={subtitle} />
    </>
  );
};

AdminUsersPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminUsersPage;
