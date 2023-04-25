import NextHead from "next/head";
import { ComponentProps } from "react";

import Footer from "./footer";
import Toolbar from "./toolbar";
import { classNames } from "@/app/helpers/utils";

export default function Layout({
  auth,
  children,
}: ComponentProps<"div"> & { auth?: boolean }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Toolbar auth={auth} />

      <div className={classNames("main-wrapper", auth ? "relative pt-36 overflow-x-clip" : "")}>
        {children}
      </div>

      {auth ? null : <Footer />}
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
