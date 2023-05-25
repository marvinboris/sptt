import { CheckIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import React, { ChangeEvent, ComponentProps, ReactNode, useState } from "react";

import { checkValidity, classNames } from "@/utils/helpers";

import ValidationType from "@/utils/types/validation";
import IconType from "@/utils/types/icon";

type SelectProps = ComponentProps<"select"> & {
  inputSize?: "lg";
  icon?: IconType;
  label?: ReactNode;
  addon?: ReactNode;
  append?: ReactNode;
  validation?: ValidationType;
};

export default function Select({
  inputSize,
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
      {label && inputSize !== "lg" && (
        <label
          htmlFor={props.id ? props.id : props.name}
          className="mb-3.5 flex items-end gap-2.5 font-display font-bold text-white/70"
        >
          {Icon && <Icon className="mb-0.5 w-[21px] text-white/40" />}
          <span>{label}</span>
        </label>
      )}

      <div
        className={classNames(
          "flex items-center rounded-[10px] bg-white/[0.04]",
          inputSize === "lg"
            ? "h-[60px] border-2 border-transparent focus-within:border-secondary-500/40"
            : "h-11"
        )}
      >
        <div>
          <div
            className={
              label && inputSize !== "lg"
                ? "w-8"
                : Icon || addon
                ? classNames(
                    "flex justify-center",
                    inputSize === "lg" ? "min-w-[60px]" : "min-w-[47px]"
                  )
                : "w-3"
            }
          >
            {(!label || (label && inputSize === "lg")) && Icon && (
              <Icon
                className={classNames(
                  "text-white/40",
                  inputSize === "lg" ? "w-6" : "w-[18px]"
                )}
              />
            )}
            {addon}
          </div>
        </div>

        <div className="relative flex h-full flex-1 items-center">
          <select
            {...props}
            onChange={onChange}
            className="peer h-full w-full flex-1 border-none bg-transparent text-white/70 outline-none focus:ring-0"
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
