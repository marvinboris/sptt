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
  label?: string;
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
    <div className={classNames("relative", className || "")}>
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
          <input
            {...props}
            onChange={onChange}
            placeholder={props.placeholder || label}
            className={classNames(
              "peer h-full w-full flex-1 border-none bg-transparent text-white/70 outline-none focus:ring-0",
              label && inputSize === "lg" ? "placeholder:text-transparent" : ""
            )}
          />

          {label && inputSize === "lg" && (
            <label
              htmlFor={props.id ? props.id : props.name}
              className="absolute -left-8 top-0 z-0 -translate-y-1/2 bg-gradient-to-t from-nightblue from-[65%] to-transparent to-[65%] px-1 text-xs text-white/70 transition-all duration-200 before:absolute before:inset-0 before:-z-20 before:bg-gradient-to-t before:from-darkblue/40 before:from-[65%] before:to-transparent before:to-[65%] after:absolute after:inset-0 after:-z-10 after:bg-gradient-to-t after:from-white/[0.04] after:from-[65%] after:to-transparent after:to-[65%] peer-placeholder-shown:left-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/[0.28] peer-focus:-left-8 peer-focus:top-0 peer-focus:text-xs peer-focus:text-white/70"
            >
              {label}
            </label>
          )}

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
