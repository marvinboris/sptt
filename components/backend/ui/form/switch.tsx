import { Switch as HSwitch } from "@headlessui/react";
import React, { ReactNode } from "react";

import { classNames } from "@/utils/helpers";

type SwitchProps = {
  checked?: boolean;
  className?: string;
  id?: string;
  label: ReactNode;
  name?: string;
  onChange: (props?: any) => void;
};

export default function Switch({
  checked,
  className,
  id,
  label,
  name,
  onChange,
}: SwitchProps) {
  return (
    <div className="flex gap-3">
      <div className="text-xs md:w-1/2">{label}</div>

      <div>
        <HSwitch
          id={id}
          checked={checked}
          onChange={onChange}
          name={name}
          className={classNames(
            `relative inline-flex h-6 w-[46px] shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-white/10 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`,
            className || ""
          )}
        >
          <span className="sr-only">{label}</span>
          <span
            aria-hidden="true"
            className={`${
              checked ? "translate-x-[22px]" : "translate-x-0"
            } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-green shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </HSwitch>
      </div>
    </div>
  );
}
