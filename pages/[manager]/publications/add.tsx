import { ReactElement } from "react";

import Layout from "../../../components/backend/navigation/layout";
import ManageAddOrEditPublications from "../../../components/backend/ui/page/add-or-edit/publications";

import { _delete } from "../../../features/backend/backendSlice";

import { NextPageWithLayout } from "../../_app";

const ManagerPublicationsAddPage: NextPageWithLayout = () => (
  <ManageAddOrEditPublications />
);

ManagerPublicationsAddPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ManagerPublicationsAddPage;
