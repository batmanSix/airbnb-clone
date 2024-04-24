import React from 'react';
import Image from "next/image";
import Link from "next/link";
import DesktopLogo from "../../../public/airbnb-desktop.png";
import MobileLogo from "../../../public/airbnb-mobile.webp";
import UserNav from './UserNav';
import { SearchModalCompnent } from "./SearchModalCompnent";
function Navbar() {
  return (
    <nav className="w-full border-b sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href="/">
          <Image
            src={DesktopLogo}
            alt="Desktop Logo"
            className="w-32 hidden lg:block"
          />

          <Image
            src={MobileLogo}
            alt="Mobile Logo"
            className="block lg:hidden w-12"
          />
        </Link>
        <div className='max-sm:hidden'>
          <SearchModalCompnent></SearchModalCompnent>
        </div>
        <UserNav></UserNav>
      </div>
    </nav>
  );
}

export default Navbar;
