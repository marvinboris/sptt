import { Popover, Transition } from "@headlessui/react";
import {
  XMarkIcon,
  HomeIcon,
  IdentificationIcon,
  Squares2X2Icon,
  UserGroupIcon,
  UsersIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

import { useContentContext } from "@/utils/contexts/content";
import { classNames } from "@/utils/helpers";
import IconType from "@/utils/types/icon";

import Logo from "@/components/ui/logo";
import SvgIcon from "@/components/ui/svg-icon";

import NavItem from "./nav-item";

const RenderMobileNavItem = (
  item: {
    name: string;
    href: string;
    icon: IconType;
  },
  close: () => void
) => {
  const router = useRouter();

  const content = (
    <>
      <item.icon
        className="h-6 w-6 flex-shrink-0 text-primary-600"
        aria-hidden="true"
      />
      <span className="ml-3 text-base font-medium text-secondary-900 dark:text-white">
        {item.name}
      </span>
    </>
  );

  return item.href.startsWith("#") && router.pathname === "/" ? (
    <a
      key={item.name}
      href={item.href}
      onClick={close}
      className="-m-3 flex items-center rounded-md p-3 hover:bg-secondary-50 dark:hover:bg-secondary-800"
    >
      {content}
    </a>
  ) : (
    <Link
      key={item.name}
      href={item.href.startsWith("#") ? `/${item.href}` : item.href}
      onClick={close}
      className="-m-3 flex items-center rounded-md p-3 hover:bg-secondary-50 dark:hover:bg-secondary-800"
    >
      {content}
    </Link>
  );
};

export default function Toolbar({ auth = false }) {
  const { content } = useContentContext();

  const {
    cms: {
      global: { app_name },
      frontend: {
        header: { menu },
      },
    },
  } = content!;

  const mobileNavItems = [
    { name: menu.home, href: "/", icon: HomeIcon },
    { name: menu.about, href: "/about", icon: IdentificationIcon },
    { name: menu.white_paper, href: "/white-paper", icon: DocumentTextIcon },
    { name: menu.team, href: "/team", icon: UserGroupIcon },
    { name: menu.partners, href: "/partners", icon: UsersIcon },
    { name: menu.sign_in, href: "/login", icon: UserIcon },
    {
      name: menu.create_account,
      href: "/register",
      icon: ArrowRightOnRectangleIcon,
    },
  ];

  return (
    <Popover className="absolute top-0 z-40 w-full text-white">
      {({ close }) => (
        <>
          <div className="container">
            <div
              className={classNames(
                "flex pt-10 transition-all duration-200",
                auth ? "md:pt-5" : ""
              )}
            >
              <div className="flex justify-start">
                <Link href="/" className="cursor-pointer">
                  <span className="sr-only">{app_name}</span>
                  <Logo />
                </Link>
              </div>

              <div className="ml-auto flex items-center gap-9">
                <div className="flex items-center">
                  <Popover.Group
                    as="nav"
                    className="hidden items-center space-x-5 overflow-visible md:flex lg:space-x-8"
                  >
                    <NavItem exact href="/" home>
                      Home
                    </NavItem>
                    <NavItem href="/about">About Us</NavItem>
                    <NavItem href="/white-paper">White paper</NavItem>
                    <NavItem href="/team">Team</NavItem>
                    <NavItem href="/partners">Partners</NavItem>

                    <Link href="/login" className="flex items-end gap-2">
                      <SvgIcon name="sign-in" className="w-[30px]" />
                      <div className="border-b-2 border-blue">Sign In</div>
                    </Link>

                    <div>
                      <Link
                        href="/register"
                        className="inline-block h-12 rounded-full bg-gradient-to-r from-primary-400 to-blue p-px text-sm font-medium"
                      >
                        <div
                          className={classNames(
                            "relative z-0 flex h-full w-full items-center overflow-hidden rounded-full bg-secondary-900 px-6 before:absolute before:inset-0 before:transition-all before:duration-200",
                            auth ? "before:bg-translate" : "before:bg-night/20"
                          )}
                        >
                          Create account
                        </div>
                      </Link>
                    </div>
                  </Popover.Group>
                </div>

                <div className="ml-auto md:hidden">
                  <Popover.Button className="flex h-10 items-center justify-center rounded-md focus:outline-none">
                    <span className="sr-only">Ouvrir le menu</span>
                    <Squares2X2Icon className="w-9" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
          </div>

          <Popover.Overlay className="fixed inset-x-0 top-0 z-40 h-screen bg-black/20 backdrop-blur-sm backdrop-filter dark:bg-secondary-900/80 md:hidden" />
          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Panel
              focus
              className="fixed inset-x-0 top-0 z-50 md:hidden"
            >
              <div className="absolute left-0 top-0 w-full pt-4">
                <div className="container flex justify-end">
                  <Popover.Button className="-mr-2 flex h-10 items-center justify-center rounded-md p-2 focus:outline-none">
                    <span className="sr-only">Fermer le menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>

              <div className="container mt-[72px]">
                <div className="divide-y-2 divide-secondary-50 rounded-lg bg-white shadow-lg ring-1 ring-black/5 dark:divide-secondary-200/10 dark:bg-secondary-800 dark:ring-white/5">
                  <div className="px-5 py-8">
                    <nav className="grid gap-y-8">
                      {mobileNavItems.map((item) =>
                        RenderMobileNavItem(item, close)
                      )}
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
