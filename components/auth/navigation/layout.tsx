import { ReactNode, useEffect } from "react";
import NextHead from "next/head";
import Link from "next/link";

import Logo from "../../ui/logo";
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  return (
    <div className="relative z-0 overflow-hidden bg-grid-primary-600/[0.05]">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary-600/50 to-transparent" />

      <div className="container flex min-h-screen flex-col">
        <header className="pt-5">
          <Link href="/">
            <Logo />
          </Link>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="relative w-full max-w-4xl rounded-[40.8836px] bg-white pt-[44px] pb-[50px] shadow-lg dark:bg-secondary-800 md:pt-[51px] md:pb-[66px]">
            {children}
          </div>
        </div>
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
