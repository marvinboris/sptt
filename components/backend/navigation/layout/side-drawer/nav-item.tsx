import React, { ComponentProps, ReactNode, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { useSideDrawerContext } from "@/utils/contexts/side-drawer";
import { classNames } from "@/utils/helpers";
import { useWindowSize } from "@/utils/hooks";
import IconType from "@/utils/types/icon";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface NavItemProps {
  href: string;
  children?: ReactNode;
  items?: { href: string; label: string }[];
  icon: IconType;
}

export default function NavItem({
  href,
  icon: Icon,
  children,
  items,
}: NavItemProps) {
  const router = useRouter();
  const active = router.asPath.startsWith(href);

  const { width } = useWindowSize();
  const { setOpen } = useSideDrawerContext();

  const [navItemOpen, setNavItemOpen] = useState(false);

  const hideSideDrawer = () => {
    if (width !== undefined && width < 768) setOpen(false);
  };

  return items ? (
    <div>
      <button
        onClick={() => setNavItemOpen((status) => !status)}
        className={classNames(
          "flex h-[54px] w-full items-center gap-4 truncate rounded-[14px] p-4 text-white/80 transition-all duration-200",
          active
            ? "border border-primary-600 bg-black/10 font-display font-bold shadow-lg shadow-primary-600/10"
            : "font-medium"
        )}
      >
        <Icon
          className={classNames(
            active ? "text-primary-400" : "text-white/80",
            "w-[21px] flex-none opacity-60"
          )}
        />

        <div>{children}</div>

        <div className="ml-auto">
          <ChevronDownIcon
            className={classNames(
              "w-3.5 text-white/80 transition-all duration-200",
              navItemOpen
                ? "relative z-0 rotate-180 after:absolute after:inset-0 after:-z-10 after:rounded-full after:bg-secondary-100/20"
                : ""
            )}
          />
        </div>
      </button>

      <div
        className={classNames(
          "relative mx-2 overflow-hidden rounded-b-xl text-sm transition-all duration-200",
          navItemOpen ? "max-h-96 pb-[18px] pt-3" : "max-h-0",
          active ? "bg-primary-400/10" : ""
        )}
      >
        <div className="absolute -top-1 left-[23px] h-full w-[5px] opacity-20">
          <div className="h-full w-full bg-gradient-to-b from-transparent from-10% via-white/50 via-80% to-transparent" />
        </div>

        <div className="space-y-2.5">
          {items.map(({ href: link, label }) => {
            const active = router.asPath.startsWith(href + link);

            return (
              <div
                key={`nav-item-${href}-items-${link}`}
                className="relative ml-14"
              >
                <div
                  className={classNames(
                    "absolute -left-7 top-1/2 h-0.5 -translate-y-1/2 transition-all duration-200",
                    active ? "w-3.5 bg-green" : "w-2 bg-white/40"
                  )}
                />

                <Link
                  onClick={hideSideDrawer}
                  className={classNames(
                    active ? "font-display font-bold text-green" : "text-white",
                    "transition-all duration-200"
                  )}
                  href={href + link}
                >
                  {label}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <Link
      href={href}
      onClick={hideSideDrawer}
      className={classNames(
        "block h-[54px] w-full rounded-[14px] bg-gradient-to-r shadow-lg transition-all duration-200",
        active
          ? "from-primary-400 to-blue p-px font-display font-bold shadow-primary-600/10"
          : "from-transparent to-transparent p-0 font-medium shadow-transparent"
      )}
    >
      <div
        className={classNames(
          "relative z-0 flex h-full gap-4 truncate rounded-[14px] text-white/80 transition-all duration-200 after:absolute after:inset-0 after:-z-10",
          active
            ? "bg-nightblue p-[15px] after:bg-black/40"
            : "bg-transparent p-4 after:bg-transparent"
        )}
      >
        <Icon
          className={classNames(
            active ? "text-primary-400" : "text-white/80",
            "w-[21px] flex-none opacity-60"
          )}
        />

        <div>{children}</div>
      </div>
    </Link>
  );
}
