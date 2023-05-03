import {
  AdjustmentsHorizontalIcon,
  ComputerDesktopIcon,
  UserPlusIcon,
  Cog8ToothIcon,
  BellIcon,
  ArrowUpIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment, ReactNode } from "react";

import NavItem from "./nav-item";

import Logo from "@/components/ui/logo";

import { useAccountContext } from "@/utils/contexts/account";
import { useContentContext } from "@/utils/contexts/content";
import { useRoleContext } from "@/utils/contexts/role";
import { useSideDrawerContext } from "@/utils/contexts/side-drawer";
import { resourceIcon } from "@/utils/helpers";
import { useWindowSize } from "@/utils/hooks";

import UserAccountType from "@/utils/types/account/user";
import NotificationInterface from "@/utils/types/models/notification";
import RoleInterface from "@/utils/types/models/role";
import ResourceType from "@/utils/types/resource";
import Image from "next/image";
import SvgIcon from "@/components/ui/svg-icon";

const Group = (props: { title: string; children?: ReactNode }) => (
  <div>
    <GroupTitle>{props.title}</GroupTitle>
    <div className="space-y-3">{props.children}</div>
  </div>
);

const GroupTitle = (props: { children?: ReactNode }) => (
  <div className="mb-1 px-3 py-2 text-lg font-semibold uppercase">
    {props.children}
  </div>
);

const UserNavItem = (props: { resource: ResourceType }) => {
  const { content } = useContentContext();
  const { account: data } = useAccountContext();
  const { role } = useRoleContext();

  const {
    cms: { backend: cms },
  } = content!;

  const feature =
    data &&
    "role" in data &&
    data.role.features.find(
      ({ prefix }) => prefix.split("-").join("_") === props.resource
    );

  if (data && "role" in data) {
    if (!feature) return null;

    const resource = feature.prefix.split("-").join("_") as ResourceType;
    return (
      <NavItem
        key={JSON.stringify(cms.sidebar.menu[resource])}
        icon={resourceIcon(resource)}
        href={`/${role}/${feature.prefix}`}
      >
        {cms.sidebar.menu[resource].title}
      </NavItem>
    );
  } else
    return (
      <NavItem
        key={JSON.stringify(cms.sidebar.menu[props.resource])}
        icon={resourceIcon(props.resource)}
        href={`/${role}/${props.resource.split("_").join("-")}`}
      >
        {cms.sidebar.menu[props.resource].title}
      </NavItem>
    );
};

export default function SideDrawer() {
  const { width } = useWindowSize();
  const { open, setOpen } = useSideDrawerContext();
  const { content } = useContentContext();
  const { account: data } = useAccountContext();
  const { role } = useRoleContext();

  const {
    cms: { backend: cms },
  } = content!;

  const notifications = (data.notifications || []).filter(
    ({ readAt }) => !readAt
  );

  return (
    <Transition
      show={open || (width !== undefined && width > 768)}
      as={Fragment}
    >
      <div className="fixed inset-0 top-0 z-40 h-screen md:relative md:block">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="absolute z-0 ml-[18px] flex h-full w-[246px] flex-col bg-black/20 px-5 pb-[95px] pt-[18px] md:relative">
            <div>
              <Link href="/">
                <Logo className="h-10" />
              </Link>
            </div>

            <div className="mt-12 rounded-[20px] bg-black/20 px-3 pb-2.5 pt-3">
              <div className="flex items-center gap-2">
                <Image
                  width={100}
                  height={100}
                  src="/images/token.webp"
                  alt="Token Icon"
                  className="w-5 flex-none"
                />

                <div className="text-sm">Current SPTT price</div>
              </div>

              <div className="mt-2.5">
                <div className="ml-7 flex items-center gap-px font-display font-bold">
                  <span>$0.0058</span>

                  <ArrowUpIcon className="w-3.5 flex-none text-green" />
                </div>

                <div className="ml-4 mt-4 flex items-end justify-between">
                  <SvgIcon
                    name="curve-green"
                    className="h-[22px] w-auto flex-none"
                  />

                  <button className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-white/10 text-white">
                    <ArrowRightIcon className="w-3.5 flex-none" />
                  </button>
                </div>
              </div>
            </div>

            <div className="scrollbar-app mt-9 flex flex-1 flex-col">
              <div>
                <NavItem icon={ComputerDesktopIcon} href={`/${role}/dashboard`}>
                  {cms.sidebar.menu.dashboard.title}
                </NavItem>
                <UserNavItem resource="users" />
                <UserNavItem resource="packs" />
                <UserNavItem resource="holders" />
                <UserNavItem resource="payouts" />

                <NavItem
                  icon={resourceIcon("reports")}
                  href={`/${role}/reports`}
                  items={Object.entries(cms.sidebar.menu.reports)
                    .filter(([key]) => key !== "title")
                    .map(([key, label]) => ({
                      href: `/${key.split("_").join("-")}`,
                      label,
                    }))}
                >
                  {cms.sidebar.menu.reports.title}
                </NavItem>

                <NavItem
                  icon={AdjustmentsHorizontalIcon}
                  href={`/${role}/settings`}
                  items={Object.entries(cms.sidebar.menu.settings)
                    .filter(([key]) => key !== "title")
                    .map(([key, label]) => ({
                      href: `/${key.split("_").join("-")}`,
                      label,
                    }))}
                >
                  {cms.sidebar.menu.settings.title}
                </NavItem>

                {role === "admin" ||
                (data &&
                  "role" in data &&
                  data.role.features.find(({ prefix }) => prefix === "cms")) ? (
                  <NavItem
                    icon={Cog8ToothIcon}
                    href={`/${role}/cms`}
                    items={Object.entries(cms.sidebar.menu.cms)
                      .filter(([key]) => !["icon", "title"].includes(key))
                      .map(([key, label]) => ({ href: `/${key}`, label }))}
                  >
                    {cms.sidebar.menu.cms.title}
                  </NavItem>
                ) : null}
              </div>
            </div>
          </div>
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="absolute inset-0 -z-10 bg-black/30 backdrop-blur-sm backdrop-filter"
            onClick={() => setOpen(false)}
          />
        </Transition.Child>
      </div>
    </Transition>
  );
}
