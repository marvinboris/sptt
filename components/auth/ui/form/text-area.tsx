import { InputHTMLAttributes, ReactNode } from "react";
import { classNames } from "../../../../app/helpers/utils";

type InputProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  inputSize?: "sm" | "lg";
  label?: ReactNode;
};

export default function TextArea({
  label,
  inputSize = "lg",
  ...props
}: InputProps) {
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

      <div
        className={classNames(
          inputSize === "sm" ? "rounded-[24px]" : "rounded-[30px]",
          "bg-[#D9D9D966]"
        )}
      >
        <textarea
          {...props}
          className={classNames(
            inputSize === "sm"
              ? "min-h-[100px] text-sm"
              : "min-h-[200px] text-lg",
            "w-full border-none bg-transparent p-5 text-[#4A5568] outline-none placeholder:opacity-60"
          )}
        />
      </div>
    </div>
  );
}
