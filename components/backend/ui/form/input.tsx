import { CheckIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import React, {
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from "react";

import { checkValidity } from "@/utils/helpers";

import IconType from "@/utils/types/icon";
import ValidationType from "@/utils/types/validation";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: IconType;
  label?: ReactNode;
  addon?: ReactNode;
  validation?: ValidationType;
};

export default function Input({
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
    <div className={className}>
      {label && (
        <label
          htmlFor={props.id ? props.id : props.name}
          className="mb-3.5 flex items-end gap-2.5"
        >
          {Icon && <Icon className="mb-0.5 w-[21px] text-white/40" />}
          <span className="font-display font-bold text-white/70">{label}</span>
        </label>
      )}

      <div className="flex h-11 items-center rounded-[10px] bg-[#5A657D33]">
        <div>
          <div
            className={
              label
                ? "w-8"
                : Icon || addon
                ? "flex min-w-[47px] justify-center"
                : "w-3"
            }
          >
            {!label && Icon && <Icon className="w-[18px] text-white/40" />}
            {addon}
          </div>
        </div>

        <div className="relative flex h-full flex-1 items-center">
          <input
            {...props}
            onChange={onChange}
            className="h-full w-full flex-1 border-none bg-transparent text-sm text-white/70 outline-none focus:ring-0"
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
