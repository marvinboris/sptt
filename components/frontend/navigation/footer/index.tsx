import Link from "next/link";

import SocialNetworks from "./social-networks";

export default function Footer() {
  return (
    <footer className="bg-night/80">
      <div className="container h-[100px] flex items-center justify-between">
        <div>Copyrights 2023. All rights reserved. <Link href="/" className="font-bold text-primary-700">spreatt.io</Link></div>

        <div>
          <SocialNetworks />
        </div>
      </div>
    </footer>
  );
}
