import {
  ArrowRightOnRectangleIcon,
  EnvelopeIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { ReactElement } from "react";

import Button from "@/components/auth/ui/form/button";
import Input from "@/components/auth/ui/form/input";
import Layout, { Head } from "@/components/frontend/navigation/layout";
import SvgIcon from "@/components/ui/svg-icon";

import { NextPageWithLayout } from "./_app";

const params = {
  link: "/register",
  title: `Create account | ${process.env.NEXT_PUBLIC_COMPANY_NAME!}`,
  description:
    "The Spread Tech Token Signup Page is the gateway to becoming a part of our community. Don't wait, join Spread Tech today and start exploring the exciting world of cryptocurrency!",
};

const RegisterPage: NextPageWithLayout = () => {
  return (
    <>
      <Head {...params} />
      <main>
        <div className="mx-auto max-w-xl rounded-[40px] bg-black/20 px-10 pb-10 pt-9 leading-none">
          <SvgIcon
            name="../register-polygon"
            className="absolute left-0 top-1/2 h-[280px] w-[280px] -translate-x-1/2"
          />
          <SvgIcon
            name="../register-ellipse"
            className="absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/4"
          />

          <header>
            <h2 className="text-[35px] font-bold text-white">Create account</h2>

            <div className="mt-2 font-body text-lg">Fill the form below</div>
          </header>

          <form className="mt-8">
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              <Input name="first_name" placeholder="First name" />
              <Input name="last_name" placeholder="Last name" />
              <Input type="email" name="email" placeholder="Email address" />
              <Input
                type="tel"
                name="phone"
                addon="+237"
                placeholder="698 83 89 09"
              />
              <Input type="password" name="password" placeholder="Password" />
              <Input
                type="password"
                name="password_confirmation"
                placeholder="Confirm password"
              />

              <div className="col-span-2 mt-2 flex items-center font-body">
                <div className="relative flex items-center">
                  <input
                    id="terms-conditions"
                    type="checkbox"
                    className="h-8 w-8 rounded-lg text-white opacity-0 peer"
                  />

                  <label htmlFor="terms-conditions" className="absolute left-0 top-0 h-8 w-8 rounded-lg border-2 border-[#CFB4F133] bg-[#D9D9D91A] peer-checked:bg-primary-400 peer-checked:border-transparent transition-all duration-200" />

                  <label htmlFor="terms-conditions" className="ml-3.5 block">
                    Accept terms & conditions
                  </label>
                </div>
              </div>

              <div className="mt-12">
                <Button className="w-full">Create account</Button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

RegisterPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout auth>{page}</Layout>;
};

export default RegisterPage;
