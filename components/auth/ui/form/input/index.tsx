import { InputHTMLAttributes, ReactNode } from "react";

import { classNames } from "@/app/helpers/utils";
import IconType from "@/app/types/icon";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  inputSize?: "sm" | "lg";
  icon?: IconType;
  label?: ReactNode;
  addon?: ReactNode;
  append?: ReactNode;
};

export default function Input({
  icon: Icon,
  label,
  addon,
  append,
  inputSize = "lg",
  className,
  ...props
}: InputProps) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={props.id ? props.id : props.name}>{label}</label>
      )}

      <div
        className={classNames(
          inputSize === "sm" ? "h-12" : "h-[60px]",
          "relative flex items-center rounded-xl bg-white/10 opacity-40",
          props.disabled ? "opacity-50" : "opacity-100"
        )}
      >
        <div>
          {Icon ? (
            <div
              className={classNames(
                inputSize === "sm" ? "w-12" : "w-20 pr-3",
                "relative z-10 flex justify-center"
              )}
            >
              <Icon
                className={classNames(
                  inputSize === "sm"
                    ? "w-4 text-white/20"
                    : "w-6 text-white/20"
                )}
              />

              <div className="absolute right-4 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#D9D9D9]/10" />
            </div>
          ) : null}

          {addon ? (
            <div className="relative z-20 flex font-body md:text-lg items-center justify-center text-center min-w-[80px] pr-3 after:absolute after:h-6 after:w-0.5 after:bg-white/20 after:top-1/2 after:right-3 after:-translate-y-1/2 after:-translate-x-1/2">
              {addon}
            </div>
          ) : null}
        </div>

        <div
          className={classNames(
            inputSize === "sm"
              ? Icon || addon
                ? "pr-5"
                : "px-5"
              : Icon || addon
              ? "pr-4"
              : "px-4",
            "relative z-0 flex-1"
          )}
        >
          <input
            {...props}
            className={classNames(
              inputSize === "sm" ? "text-sm" : "md:text-lg",
              "min-h-[48px] w-full border-none bg-transparent font-body text-white outline-none placeholder:opacity-70"
            )}
          />
        </div>

        {append && <div className="pr-4">{append}</div>}
      </div>
    </div>
  );
}
