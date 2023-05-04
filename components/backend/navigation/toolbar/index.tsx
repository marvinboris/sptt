import {
  AdjustmentsHorizontalIcon,
  ArrowRightOnRectangleIcon,
  Bars3BottomLeftIcon,
  ClipboardDocumentIcon,
  HomeIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import LanguageSelect from "./language-select";
import Logout from "./logout";
import Notifications from "./notifications";

import { useAccountContext } from "@/utils/contexts/account";
import { useContentContext } from "@/utils/contexts/content";
import { useSideDrawerContext } from "@/utils/contexts/side-drawer";
import { classNames, resourceIcon } from "@/utils/helpers";
import ResourceType from "@/utils/types/resource";

export default function Toolbar() {
  const { open, setOpen } = useSideDrawerContext();
  const { account } = useAccountContext();

  const { route } = useRouter();
  const role = route.split("/")[1] as "admin" | "user" | "customer";
  const section = route.split("/")[2] as ResourceType | "dashboard";

  const { content } = useContentContext();
  const {
    cms: {
      backend: {
        header,
        pages: { [section]: cms },
      },
    },
  } = content!;

  const Icon = section === "dashboard" ? HomeIcon : resourceIcon(section);
  const isCustomer = role === "customer";

  const handleLogout = () => {};

  return (
    <header
      className={classNames(
        "sticky top-0 z-30 ml-8 mr-20 mt-14 flex flex-none items-center overflow-hidden rounded-[14px] bg-nightblue after:absolute after:inset-0 after:z-0 after:bg-lightblue/10",
        isCustomer ? "h-[84px]" : "h-[69px]"
      )}
    >
      <div className="relative flex flex-1 items-center pl-[33px] pr-4 md:pl-[26px] md:pr-6">
        <div
          className="hidden cursor-pointer"
          onClick={() => setOpen((open) => !open)}
        >
          <Bars3BottomLeftIcon className="w-10 text-primary-600" />
        </div>

        <div className="flex items-center gap-2.5">
          <Icon className="w-[21px] flex-none text-white" />

          <div className="h-1.5 w-1.5 flex-none rounded-full bg-white/10" />

          <div className="font-body text-white/80">
            <span className="font-display font-bold">
              {"title" in cms ? cms.title : cms[role].title}
            </span>{" "}
            / home
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2.5 rounded-full border border-white/30 bg-black/[0.04] px-3.5 py-2.5">
          <div className="font-body text-sm opacity-60">
            <span className="font-display font-bold">
              https://www.spreadtt.io/
            </span>
            ref?=0x023810...3k5G
          </div>

          <div className="flex aspect-square w-[22px] flex-none items-center justify-center rounded-full bg-green text-white">
            <ClipboardDocumentIcon className="w-3.5" />
          </div>
        </div>

        <div className="ml-auto flex">
          <div className="mr-5 md:mr-[51.69px]">
            <LanguageSelect />
          </div>
          <Notifications />
        </div>
      </div>

      <div className="h-10 w-[3px] flex-none rounded-full bg-secondary-700/10" />

      <div className="ml-8 flex items-center justify-between gap-7 pr-9">
        <div className="hidden md:block">
          <div className="font-display font-bold">
            {isCustomer ? account.name : "Admin Account"}
          </div>

          {isCustomer ? (
            <div
              className={classNames(
                "mt-1 inline-flex h-6 items-center gap-[5px] rounded-md pl-[7px] pr-2.5",
                account.kyc ? "bg-white/10" : "bg-red/20"
              )}
            >
              <XCircleIcon
                className={classNames(
                  "w-3",
                  account.kyc ? "text-green" : "text-red opacity-60"
                )}
              />

              <span
                className={classNames(
                  "text-[10px] text-white",
                  account.kyc ? "" : "opacity-60"
                )}
              >
                {account.kyc ? "Verified user" : "Not verified"}
              </span>
            </div>
          ) : (
            <div className="mt-px font-body text-sm opacity-60">
              {account.name}
            </div>
          )}
        </div>

        <div className="group relative">
          <Image
            width={1920}
            height={1920}
            src="/images/icons/user-pic-wrapper.svg"
            alt="User pic wrapper"
            className="w-14"
          />

          <div className="absolute left-1/2 top-1/2 -ml-[1px] h-9 w-9 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
            {account.photo && (
              <Image
                width={1920}
                height={1920}
                src={account.photo}
                alt="User pic"
                className="image-cover absolute inset-0"
              />
            )}
          </div>

          <div className="absolute right-0 top-full origin-top-right scale-0 pt-1.5 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
            <div className="w-40 rounded-[14px] bg-white px-[7px] pb-6 pt-[7px] text-sm shadow-sm dark:bg-secondary-800">
              <div className="space-y-2.5 px-[13px]">
                <Link
                  href={`/${role}/settings`}
                  className="flex cursor-pointer items-center space-x-[7px]"
                >
                  <span>
                    <AdjustmentsHorizontalIcon className="w-4 opacity-20" />
                  </span>
                  <span>{header.settings}</span>
                </Link>
                <Logout action={handleLogout}>
                  <div className="flex cursor-pointer items-center space-x-[7px] text-red">
                    <span>
                      <ArrowRightOnRectangleIcon className="w-4" />
                    </span>
                    <span className="font-bold">{header.logout}</span>
                  </div>
                </Logout>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
