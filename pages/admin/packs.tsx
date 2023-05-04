import React, { ReactElement } from "react";

import { NextPageWithLayout } from "../_app";

import Layout, { Head } from "@/components/backend/navigation/layout";
import AdminPacks from "@/components/backend/pages/admin/packs";

import { useContentContext } from "@/utils/contexts/content";

const AdminUsersPage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
      backend: {
        pages: {
          packs: { index: title, add },
        },
      },
    },
  } = content!;

  const subtitle = "List of training course packs"

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: ${subtitle}.`}
      />

      <div className="w-3/4">
        <AdminPacks add={add} title={title} subtitle={subtitle} />
      </div>
    </>
  );
};

AdminUsersPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminUsersPage;
