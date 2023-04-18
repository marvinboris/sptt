import {
  ArrowDownOnSquareIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
import {
  ChangeEvent,
  FormEvent,
  ReactElement,
  useEffect,
  useState,
} from "react";

import { NextPageWithLayout } from "../../_app";

import { useContentContext } from "../../../app/contexts/content";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import Status from "../../../app/types/enums/status";
import ContentType from "../../../app/types/content";

import Layout, { Head } from "../../../components/backend/navigation/layout";
import Button from "../../../components/backend/ui/form/button";
import Input from "../../../components/backend/ui/form/input";
import PageTitle from "../../../components/backend/ui/title/page";

import { selectAuth } from "../../../features/auth/authSlice";
import {
  get,
  patch,
  selectBackend,
} from "../../../features/backend/backendSlice";

const Separator = ({ sm }: { sm?: boolean }) => (
  <div className={`md:col-span-2 xl:col-span-3 mb-${sm ? 2 : 3}`} />
);

const ManagerCmsGeneralPage: NextPageWithLayout = () => {
  const { content } = useContentContext();
  const {
    cms: {
      global: { app_name, logo },
      backend: {
        components: {
          form: { save },
        },
        pages: {
          cms: { title, general, form },
        },
      },
    },
  } = content!;

  const dispatch = useAppDispatch();
  const { role } = useAppSelector(selectAuth);
  const { status, data } = useAppSelector(selectBackend);

  const [value, setValue] = useState<any>(content!.cms.general);

  const [params] = useState({
    role: role!,
    resource: "cms",
  });

  useEffect(() => {
    if (status === Status.IDLE && !(data && data.cms)) {
      dispatch(get(params));
    }
  }, [data, dispatch, params, role, status]);

  useEffect(() => {
    if (data && data.cms && data.cms.general) setValue({ ...data.cms.general });
  }, [data]);

  const prefix = `general`;
  const prefixId = `general`;
  const global = ["Date", "Time", "Home"].map((item) => (
    <Input
      key={Math.random()}
      id={`${prefixId}-${item.toLowerCase()}`}
      name={`${prefix}[${item.toLowerCase()}]`}
      label={item}
      defaultValue={value[item.toLowerCase()]}
    />
  ));
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ].map((item, index) => (
    <Input
      key={Math.random()}
      id={`${prefixId}-date-${index}`}
      name={`${prefix}[days][${index}]`}
      label={item}
      defaultValue={value.days[index]}
    />
  ));
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ].map((item, index) => (
    <Input
      key={Math.random()}
      id={`${prefixId}-months-${index}`}
      name={`${prefix}[months][${index}]`}
      label={item}
      defaultValue={value.months[index]}
    />
  ));

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    dispatch(patch({ ...params, id: "general", data: e.target }));
  };

  return (
    <>
      <Head
        link={`/${role}/cms/general`}
        title={`${title} | ${app_name}`}
        description=""
      />
      <main className="flex-1">
        <PageTitle icon={Cog8ToothIcon} title={title} subtitle={general} />

        <div className="px-[33px] pt-[29px] pb-[54px] md:px-[42px] md:pt-[47px]">
          <div className="mb-[25px] rounded-[30px] bg-white py-8 px-[38.36px] shadow-2xl dark:bg-secondary-800">
            <div className="mb-[46.94px] flex flex-wrap items-center justify-between md:flex-nowrap">
              <div className="order-2 md:order-1">
                <div className="mb-[4.63px] text-[25px] font-bold md:text-[22.21px] md:font-medium">
                  {general}
                </div>

                <div className="h-[6.5732px] w-[30.24px] rounded-xl bg-yellow" />
              </div>

              <div className="order-1 ml-auto mb-8 flex items-center md:order-2 md:ml-0 md:mb-0"></div>
            </div>

            <form onSubmit={submitHandler}>
              <div className="grid grid-cols-1 gap-y-2 gap-x-4 overflow-auto md:grid-cols-2 xl:grid-cols-3">
                {global}
                <Separator />

                <div className="md:col-span-2 xl:col-span-3">
                  <h4 className="font-bold">Week days</h4>
                </div>
                <Separator sm />
                {weekDays}
                <Separator />

                <div className="md:col-span-2 xl:col-span-3">
                  <h4 className="font-bold">Months</h4>
                </div>
                <Separator sm />
                {months}
              </div>

              <div className="mt-5">
                <Button pill icon={ArrowDownOnSquareIcon} color="green">
                  {save}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

ManagerCmsGeneralPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ManagerCmsGeneralPage;
