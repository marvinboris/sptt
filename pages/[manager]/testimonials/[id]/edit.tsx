import { ReactElement } from "react";

import Layout from "../../../../components/backend/navigation/layout";
import ManageAddOrEditTestimonials from "../../../../components/backend/ui/page/add-or-edit/testimonials";

import { _delete } from "../../../../features/backend/backendSlice";

import { NextPageWithLayout } from "../../../_app";

const ManagerTestimonialsEditPage: NextPageWithLayout = () => (
  <ManageAddOrEditTestimonials edit />
);

ManagerTestimonialsEditPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ManagerTestimonialsEditPage;
