import { CheckIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import React, { ChangeEvent, ComponentProps, ReactNode, useState } from "react";

import { checkValidity, classNames } from "@/utils/helpers";

import ValidationType from "@/utils/types/validation";
import IconType from "@/utils/types/icon";

type SelectProps = ComponentProps<"select"> & {
  icon?: IconType;
  label?: ReactNode;
  addon?: ReactNode;
  append?: ReactNode;
  validation?: ValidationType;
};

export default function Select({
  icon: Icon,
  label,
  addon,
  append,
  className,
  validation,
  ...props
}: SelectProps) {
  const [touched, setTouched] = useState(false);

  const valid = validation
    ? Object.values(checkValidity(props.value as string, validation)).reduce(
        (a, b) => a && b,
        true
      )
    : true;

  const onChange = props.onChange
    ? (e: ChangeEvent<HTMLSelectElement>) => {
        setTouched(true);
        props.onChange!(e);
      }
    : () => {};

  return (
    <div className={className}>
      {label && (
        <label htmlFor={props.id ? props.id : props.name}>{label}</label>
      )}

      <div className="flex h-11 items-center rounded-[10px] bg-[#5A657D33]">
        <div>
          <div
            className={
              Icon || addon ? "flex min-w-[47px] justify-center" : "w-3"
            }
          >
            {Icon && <Icon className="w-[18px]" />}
            {addon}
          </div>
        </div>

        <div className="relative flex h-full flex-1 items-center">
          <select
            {...props}
            onChange={onChange}
            className="h-full w-full flex-1 border-none bg-transparent text-sm text-inherit outline-none focus:ring-0"
          />

          {touched && validation ? (
            <div className="relative flex h-full w-[47px] items-center justify-center">
              {valid ? (
                <CheckIcon className="w-[18px] text-green" />
              ) : (
                <ExclamationCircleIcon className="w-[18px] text-red" />
              )}
            </div>
          ) : (
            <div className="w-3" />
          )}

          {append ? (
            <div className="relative flex h-full w-[47px] items-center justify-center">
              {append}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
