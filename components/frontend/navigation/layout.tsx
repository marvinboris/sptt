import NextHead from "next/head";
import React, { ComponentProps } from "react";

import Footer from "./footer";
import Toolbar from "./toolbar";
import { classNames } from "@/utils/helpers";

export default function Layout({
  auth,
  children,
}: ComponentProps<"div"> & { auth?: boolean }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Toolbar auth={auth} />

      <div
        className={classNames(
          "main-wrapper",
          auth
            ? "relative flex flex-col justify-center overflow-x-clip pt-32 pb-24 md:justify-start md:pt-36"
            : ""
        )}
      >
        {children}
      </div>

      <div className={auth ? "md:hidden" : "bg-night/80"}>
        <Footer />
      </div>
    </div>
  );
}

export interface PageParams {
  link: string;
  title: string;
  description: string;
}

export const Head = ({ link, title, description }: PageParams) => (
  <NextHead>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={link} />

    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={link} />

    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
  </NextHead>
);
