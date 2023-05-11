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
  label?: ReactNode;
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
      {label && (
        <label
          className="block truncate"
          htmlFor={props.id ? props.id : props.name}
        >
          {label}
        </label>
      )}

      <div className="relative rounded-xl bg-white/[0.04]">
        <textarea
          {...props}
          onChange={onChange}
          className={classNames(
            "w-full border-none bg-transparent text-white/70 placeholder:text-white/[0.28] outline-none focus:ring-0",
            validation ? "pr-[59px]" : "",
            inputSize === "lg" ? "min-h-[145px] px-7 py-5" : "min-h-[100px] text-sm p-5"
          )}
        />

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
