import { ListBulletIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { ComponentProps, ReactNode } from "react";

import Button from "./button";

type FormProps = ComponentProps<"form"> & {
  title: ReactNode;
  subtitle?: ReactNode;
  list?: string;
  link?: string;
  icon: (props: ComponentProps<"svg">) => JSX.Element;
  disabled?: boolean;
};

const Form = ({
  onSubmit,
  icon: Icon,
  title,
  subtitle,
  className = "",
  children,
  style,
  id,
  list,
  link,
  disabled,
}: FormProps) => (
  <div className="mb-[25px] rounded-[30px] bg-white px-[38.36px] py-8 shadow-2xl dark:bg-secondary-800">
    <div className="mb-[46.94px] flex flex-wrap items-center justify-between md:flex-nowrap">
      <div className="order-2 space-y-[4.63px] md:order-1">
        <div className="text-[25px] font-bold md:text-[22.21px] md:font-medium">
          {title}
        </div>

        {subtitle && <div className="text-[12.96px]">{subtitle}</div>}

        <div className="h-[6.5732px] w-[30.24px] rounded-xl bg-yellow" />
      </div>

      <div className="order-1 mb-8 ml-auto flex items-center md:order-2 md:mb-0 md:ml-0">
        {list && link ? (
          <Link href={link}>
            <Button icon={ListBulletIcon}>
              <span className="hidden md:inline">{list}</span>
              <Icon className="inline-block w-8 md:hidden" />
            </Button>
          </Link>
        ) : null}
      </div>
    </div>

    <div className={className} style={style}>
      {disabled ? (
        <div id={id}>{children}</div>
      ) : (
        <form onSubmit={onSubmit} id={id} encType="multipart/form-data">
          {children}
        </form>
      )}
    </div>
  </div>
);

export default Form;
