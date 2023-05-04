import NextHead from "next/head";
import { useRouter } from "next/router";
import React from "react";

import SideDrawer from "./side-drawer";
import Toolbar from "../toolbar";

import SideDrawerContext from "@/utils/contexts/side-drawer";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <SideDrawerContext.Provider value={{ open, setOpen }}>
      <div className="relative flex h-screen overflow-hidden bg-nightblue font-body">
        <SideDrawer />

        <div className="scrollbar-app flex h-screen flex-1 flex-col overflow-y-auto">
          <Toolbar />

          <div className="relative flex flex-1 flex-col">
            <main className="flex-1">
              <div className="px-[33px] pb-[54px] pr-[76px] pt-[29px] xl:pl-[33px] xl:pt-[47px]">
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </SideDrawerContext.Provider>
  );
}

export interface PageParams {
  title: string;
  description: string;
}

export const Head = ({ title, description }: PageParams) => {
  const { route: link } = useRouter();

  return (
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
};
