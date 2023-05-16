import { CheckIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import React, {
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from "react";

import { checkValidity, classNames } from "@/utils/helpers";

import ValidationType from "@/utils/types/validation";

type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  inputSize?: "lg";
  label?: string;
  validation?: ValidationType;
};

export default function TextArea({
  inputSize,
  label,
  validation,
  ...props
}: TextAreaProps) {
  const [touched, setTouched] = useState(false);

  const valid = validation
    ? Object.values(checkValidity(props.value as string, validation)).reduce(
        (a, b) => a && b,
        true
      )
    : true;

  const onChange = props.onChange
    ? (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTouched(true);
        props.onChange!(e);
      }
    : () => {};

  return (
    <div className={props.className}>
      {label && inputSize !== "lg" && (
        <label
          htmlFor={props.id ? props.id : props.name}
          className="mb-3.5 font-display font-bold text-white/70"
        >
          <span>{label}</span>
        </label>
      )}

      <div className="relative rounded-xl bg-white/[0.04] border-2 border-transparent focus-within:border-secondary-500/40">
        <textarea
          {...props}
          onChange={onChange}
          placeholder={props.placeholder || label}
          className={classNames(
            "peer w-full border-none bg-transparent text-white/70 outline-none focus:ring-0",
            validation ? "pr-[59px]" : "",
            inputSize === "lg"
              ? "min-h-[145px] px-7 py-5"
              : "min-h-[100px] p-5 text-sm",
            label && inputSize === "lg"
              ? "placeholder:text-transparent"
              : "placeholder:text-white/[0.28]"
          )}
        />

        {label && inputSize === "lg" && (
          <label
            htmlFor={props.id ? props.id : props.name}
            className="absolute left-0 top-0 z-0 translate-y-0 bg-gradient-to-t from-nightblue from-[65%] to-transparent to-[65%] px-1 text-xs text-white/70 transition-all duration-200 before:absolute before:inset-0 before:-z-20 before:bg-gradient-to-t before:from-darkblue/40 before:from-[65%] before:to-transparent before:to-[65%] after:absolute after:inset-0 after:-z-10 after:bg-gradient-to-t after:from-white/[0.04] after:from-[65%] after:to-transparent after:to-[65%] peer-placeholder-shown:left-5 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/[0.28] peer-focus:left-5 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:text-white/70"
          >
            {label}
          </label>
        )}

        {touched && validation ? (
          <div className="absolute right-0 top-0 flex h-12 w-[47px] items-center justify-center">
            {valid ? (
              <CheckIcon className="w-[18px] text-green" />
            ) : (
              <ExclamationCircleIcon className="w-[18px] text-red" />
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
