import { useRouter } from "next/router";
import Link from "next/link";
import React, { ComponentProps, ReactNode } from "react";

import SvgIcon from "@/components/ui/svg-icon";
import { classNames } from "@/utils/helpers";

interface NavItemProps {
  exact?: boolean;
  href: string;
  children: ReactNode;
  home?: boolean;
}

export default function NavItem({ href, home, exact, children }: NavItemProps) {
  const router = useRouter();
  const active = exact
    ? router.pathname === href
    : router.pathname.startsWith(href);

  const content = (
    <>
      {home ? (
        <div className="mr-[6.65px]">
          <SvgIcon name="home" className="w-[18px]" />
        </div>
      ) : null}

      <span>{children}</span>
    </>
  );

  return href.startsWith("#") ? (
    <a
      href={href}
      className={classNames(
        active
          ? "font-display before:absolute before:-z-10 before:h-11 before:w-[66px] before:-translate-x-4 before:rounded-[14px] before:bg-white/10 after:absolute after:h-2 after:w-2 after:-translate-x-7 after:rounded-full after:bg-primary-400"
          : "font-body",
        "inline-flex items-center truncate transition-all duration-200"
      )}
    >
      {content}
    </a>
  ) : (
    <Link
      href={href}
      className={classNames(
        active
          ? "font-display before:absolute before:-z-10 before:h-11 before:w-[66px] before:-translate-x-4 before:rounded-[14px] before:bg-white/10 after:absolute after:z-0 after:h-2 after:w-2 after:-translate-x-7 after:rounded-full after:bg-primary-400"
          : "font-body",
        "inline-flex items-center truncate transition-all duration-200"
      )}
    >
      {content}
    </Link>
  );
}
