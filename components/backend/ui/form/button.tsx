import React, { type ReactNode } from "react";

import { classNames } from "@/utils/helpers";
import IconType from "@/utils/types/icon";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: string;
  size?: "" | "sm" | "lg" | "xl";
  justify?: "start" | "center";
  pill?: boolean;
  icon?: IconType;
  children: ReactNode;
  onClick?: () => void;
};

export default function Button({
  color = "primary-600",
  size = "",
  justify = "start",
  pill,
  icon: Icon,
  children,
  onClick,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={classNames(
        size === "sm" ? "h-9" : "h-11",
        justify === "center" ? "justify-center" : "justify-start pr-9",
        `group inline-flex items-center truncate px-[15px] text-sm transition-all duration-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2`,
        pill ? "rounded-full" : "rounded-[10px]",
        color === "green"
          ? "bg-green text-white focus-visible:outline-green hover:text-secondary-100 active:text-green/10"
          : color === "night"
          ? "bg-night text-white focus-visible:outline-night hover:text-secondary-100 active:text-night/10"
          : color === "red"
          ? "bg-red text-white focus-visible:outline-red hover:text-secondary-100 active:text-red/10"
          : color === "yellow"
          ? "bg-yellow text-white focus-visible:outline-yellow hover:text-secondary-100 active:text-yellow/10"
          : color === "secondary"
          ? "bg-secondary-600 text-white focus-visible:outline-secondary-600 hover:text-secondary-100 active:text-secondary-600/10"
          : color === "white"
          ? "focus-visible:outline-white"
          : "bg-gradient-to-r from-primary-700 to-primary-400 text-white focus-visible:outline-primary-600 hover:text-secondary-100 active:text-primary-600/10",
        rest.className!
      )}
    >
      {Icon && (
        <Icon
          className={classNames(
            color === "white"
              ? "text-green/40 group-hover:text-green"
              : "text-white/40 group-hover:text-white",
            "mr-[14px] w-5 transition-all duration-200"
          )}
        />
      )}
      <span className={size === "sm" ? "" : "font-medium"}>{children}</span>
    </button>
  );
}
