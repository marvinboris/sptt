import React, { ReactElement } from "react";

import Layout, { Head } from "@/components/backend/navigation/layout";
import CustomerPackCourse from "@/components/backend/pages/customer/packs/course";

import { NextPageWithLayout } from "@/pages/_app";

import { useContentContext } from "@/utils/contexts/content";

const CustomerPackCoursePage: NextPageWithLayout = () => {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
    },
  } = content!;

  const title = "Course details";
  const subtitle = "View all details on pack's course details";

  return (
    <>
      <Head
        title={`${title} | ${app_name}`}
        description={`${app_name}: ${subtitle}.`}
      />

      <CustomerPackCourse />
    </>
  );
};

CustomerPackCoursePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CustomerPackCoursePage;
