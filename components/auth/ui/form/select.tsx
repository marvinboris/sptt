import React, { ComponentProps, ReactNode } from "react";

import { classNames } from "@/utils/helpers";
import IconType from "@/utils/types/icon";

type SelectProps = ComponentProps<"select"> & {
  inputSize?: "sm" | "lg";
  icon?: IconType;
  label?: ReactNode;
  addon?: ReactNode;
  append?: ReactNode;
};

export default function Select({
  icon: Icon,
  label,
  addon,
  append,
  inputSize = "lg",
  className,
  ...props
}: SelectProps) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={props.id ? props.id : props.name}>{label}</label>
      )}

      <div
        className={classNames(
          inputSize === "sm" ? "h-12" : "h-[60px]",
          "relative flex items-center rounded-[300px] bg-[#D9D9D966]",
          props.disabled ? "opacity-50" : "opacity-100"
        )}
      >
        <div>
          {Icon && (
            <div
              className={classNames(
                inputSize === "sm" ? "w-12" : "w-12 md:w-16",
                "relative z-10 flex justify-center"
              )}
            >
              {
                <Icon
                  className={classNames(
                    inputSize === "sm"
                      ? "w-4 text-[#4A5568]/20"
                      : "w-6 text-primary-600 md:text-primary-600/20"
                  )}
                />
              }
            </div>
          )}
          {addon && (
            <div className="relative z-20 flex min-w-[48px] items-center justify-center text-center md:min-w-[64px]">
              {addon}
            </div>
          )}
        </div>

        <div
          className={classNames(
            inputSize === "sm"
              ? Icon || addon
                ? "pr-5"
                : "px-5"
              : Icon || addon
              ? "pr-8"
              : "px-8",
            "relative z-0 flex-1"
          )}
        >
          <select
            {...props}
            className={classNames(
              inputSize === "sm" ? "text-sm" : "text-lg",
              "min-h-[48px] w-full border-none bg-transparent text-[#4A5568] outline-none placeholder:opacity-60"
            )}
          />
        </div>

        {append && <div className="pr-4">{append}</div>}
      </div>
    </div>
  );
}
