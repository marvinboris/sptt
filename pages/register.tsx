import {
  ArrowRightOnRectangleIcon,
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React, { ReactElement } from "react";

import Button from "@/components/auth/ui/form/button";
import Input from "@/components/auth/ui/form/input";
import Layout, { Head } from "@/components/frontend/navigation/layout";
import SvgIcon from "@/components/ui/svg-icon";

import { NextPageWithLayout } from "./_app";
import { useWindowSize } from "@/utils/hooks";

const params = {
  link: "/register",
  title: `Create account | ${process.env.NEXT_PUBLIC_COMPANY_NAME!}`,
  description:
    "The Spread Tech Token Signup Page is the gateway to becoming a part of our community. Don't wait, join Spread Tech today and start exploring the exciting world of cryptocurrency!",
};

const RegisterPage: NextPageWithLayout = () => {
  const { width } = useWindowSize();

  return (
    <>
      <Head {...params} />
      <main className="container">
        <div className="mx-auto max-w-xl rounded-[40px] bg-black/20 px-10 pb-10 pt-9 leading-none">
          <SvgIcon
            name="../register-polygon"
            className="absolute left-0 top-1/2 hidden h-[280px] w-[280px] -translate-x-1/2 md:block"
          />
          <SvgIcon
            name="../register-ellipse"
            className="absolute right-0 top-0 hidden h-[500px] w-[500px] translate-x-1/4 md:block"
          />
          <SvgIcon
            name="../home-bg-light"
            className="md:hidden block -z-10 absolute top-36 inset-x-0 w-full opacity-20 scale-[3]"
          />

          <header className="text-center md:text-left">
            <h2 className="text-[25px] font-bold text-white md:text-[35px]">
              Create account
            </h2>

            <div className="mt-2 font-body text-lg">Fill the form below</div>
          </header>

          <form className="mt-12 md:mt-8">
            <div className="flex h-[60px] items-center justify-between rounded-xl border border-primary-500/[.15] bg-[#33274B] px-6 opacity-40 md:hidden">
              <span className="font-body">Ref ID :</span>
              <span className="font-display font-bold">F48DK02</span>
            </div>

            <div className="mt-4 grid gap-x-4 gap-y-2 md:mt-0 md:grid-cols-2 md:gap-y-2.5">
              <input type="hidden" name="ref" defaultValue="F48DK02" />
              <Input
                name="first_name"
                placeholder="First name"
                icon={width! < 768 ? UserIcon : undefined}
              />
              <Input
                name="last_name"
                placeholder="Last name"
                icon={width! < 768 ? UserIcon : undefined}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email address"
                icon={width! < 768 ? EnvelopeIcon : undefined}
              />
              <Input
                type="tel"
                name="phone"
                addon="+237"
                placeholder="698 83 89 09"
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                icon={width! < 768 ? LockClosedIcon : undefined}
              />
              <Input
                type="password"
                name="password_confirmation"
                placeholder="Confirm password"
                icon={width! < 768 ? LockClosedIcon : undefined}
              />

              <div className="mt-8 flex items-center font-body md:col-span-2 md:mt-2">
                <div className="relative flex items-center">
                  <input
                    id="terms-conditions"
                    type="checkbox"
                    className="peer h-8 w-8 rounded-lg text-white opacity-0"
                  />

                  <label
                    htmlFor="terms-conditions"
                    className="absolute left-0 top-0 h-8 w-8 rounded-lg border-2 border-[#CFB4F133] bg-[#D9D9D91A] transition-all duration-200 peer-checked:border-transparent peer-checked:bg-primary-400"
                  />

                  <label htmlFor="terms-conditions" className="ml-3.5 block">
                    Accept terms & conditions
                  </label>
                </div>
              </div>

              <div className="mt-8 md:mt-12">
                <Button className="w-full">Create account</Button>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-10 text-center font-body md:hidden">
          Have an account ?{" "}
          <span className="cursor-pointer font-display font-bold text-primary-400">
            Sign In
          </span>
        </div>
      </main>
    </>
  );
};

RegisterPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout auth>{page}</Layout>;
};

export default RegisterPage;
