import {
  ArrowRightOnRectangleIcon,
  EnvelopeIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import React, { ReactElement } from "react";

import Button from "@/components/auth/ui/form/button";
import Input from "@/components/auth/ui/form/input";
import Layout, { Head } from "@/components/frontend/navigation/layout";
import SvgIcon from "@/components/ui/svg-icon";

import { NextPageWithLayout } from "./_app";

const params = {
  link: "/login",
  title: `Login | ${process.env.NEXT_PUBLIC_COMPANY_NAME!}`,
  description:
    "The Spread Tech Token Login Page is designed to provide users access to their accounts. Join the Spread Tech community today!",
};

const LoginPage: NextPageWithLayout = () => {
  return (
    <>
      <Head {...params} />
      <main className="container">
        <div className="mx-auto max-w-md rounded-[40px] bg-black/20 px-10 pb-10 pt-12 md:pt-9 leading-none">
          <SvgIcon
            name="../login-polygon"
            className="hidden md:block -z-10 absolute left-0 top-28 w-[280px] h-[280px] -translate-x-1/2"
          />
          <SvgIcon
            name="../login-ellipse"
            className="hidden md:block -z-10 absolute right-0 top-0 w-[500px] h-[500px] translate-x-1/4"
          />
          <SvgIcon
            name="../home-bg-light"
            className="md:hidden block -z-10 absolute top-36 inset-x-0 w-full opacity-20 scale-[3]"
          />

          <header className="text-center md:text-left">
            <h2 className="text-[25px] md:text-[35px] font-bold text-white">Account login</h2>

            <div className="mt-2 font-body text-lg">Welcome back !</div>
          </header>

          <form className="mt-12 md:mt-8">
            <Input
              type="email"
              name="email"
              placeholder="Email address"
              icon={EnvelopeIcon}
            />
            <Input
              className="mt-3.5"
              type="password"
              name="password"
              placeholder="Password"
              icon={LockClosedIcon}
            />

            <div className="mt-8 md:mt-6 text-right font-body">
              Forgot password ?{" "}
              <span className="cursor-pointer font-display font-bold text-primary-400">
                Reset here
              </span>
            </div>

            <div className="mt-8 md:mt-10">
              <Button icon={ArrowRightOnRectangleIcon} className="w-full">
                Login
              </Button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout auth>{page}</Layout>;
};

export default LoginPage;
