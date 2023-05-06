import { CheckIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import React, {
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from "react";

import { checkValidity, classNames } from "@/utils/helpers";

import IconType from "@/utils/types/icon";
import ValidationType from "@/utils/types/validation";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  inputSize?: "lg";
  icon?: IconType;
  label?: ReactNode;
  addon?: ReactNode;
  validation?: ValidationType;
};

export default function Input({
  inputSize,
  icon: Icon,
  label,
  addon,
  className,
  validation,
  ...props
}: InputProps) {
  const [touched, setTouched] = useState(false);

  const valid = validation
    ? Object.values(checkValidity(props.value as string, validation)).reduce(
        (a, b) => a && b,
        true
      )
    : true;

  const onChange = props.onChange
    ? (e: ChangeEvent<HTMLInputElement>) => {
        setTouched(true);
        props.onChange!(e);
      }
    : () => {};

  return (
    <div className={classNames("group relative", className || "")}>
      {label && (
        <label
          htmlFor={props.id ? props.id : props.name}
          className={
            inputSize === "lg"
              ? "absolute transition-all duration-200 left-[60px] top-1/2 -translate-y-1/2 text-white/[0.28] group-focus-within:left-7 group-focus-within:top-0 group-focus-within:text-xs group-focus-within:text-white/70"
              : "mb-3.5 flex items-end gap-2.5 font-display font-bold text-white/70"
          }
        >
          {inputSize === "lg"
            ? null
            : Icon && <Icon className="mb-0.5 w-[21px] text-white/40" />}
          <span>{label}</span>
        </label>
      )}

      <div
        className={classNames(
          "flex items-center rounded-[10px] bg-white/[0.04]",
          inputSize === "lg"
            ? "h-[60px] focus-within:border-2 focus-within:border-secondary-500/40"
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
          <input
            {...props}
            onChange={onChange}
            className="h-full w-full flex-1 border-none bg-transparent text-white/70 outline-none focus:ring-0"
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
        </div>
      </div>
    </div>
  );
}
