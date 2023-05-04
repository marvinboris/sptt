import React, { ReactElement } from "react";

import { NextPageWithLayout } from "../_app";

import Layout, { Head } from "@/components/backend/navigation/layout";
import CustomerCourses from "@/components/backend/pages/customer/courses";

import { useContentContext } from "@/utils/contexts/content";

const CustomerCoursesPage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
    },
  } = content!;

  const title = "My packs";
  const subtitle = "View all details on packs";

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: ${subtitle}.`}
      />

      <CustomerCourses title={title} subtitle={subtitle} />
    </>
  );
};

CustomerCoursesPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CustomerCoursesPage;
