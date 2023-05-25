import Link from "next/link";
import React from "react";

import SocialNetworks from "./social-networks";

export default function Footer() {
  return (
    <footer>
      <div className="container flex flex-col items-center justify-between py-8 md:h-[100px] md:flex-row md:py-0">
        <div className="order-2 mt-7 font-body text-sm md:order-1 md:mt-0 md:text-base">
          Copyrights 2023. All rights reserved.{" "}
          <Link href="/" className="font-display font-bold text-primary-400">
            spreatt.io
          </Link>
        </div>

        <div className="order-1 md:order-2">
          <SocialNetworks />
        </div>
      </div>
    </footer>
  );
}
