import React from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Icon } from "@iconify/react";

const Nav = () => {
  return (
    <nav className="NavigationHeader">
      <div className="HeaderLogo">
        <Link href="/">
          <a className="Pointer">
            <Image
              src="/Images/MainWhite.png"
              alt="2nd Uxbridge Scouts"
              layout="fill"
              objectFit="contain"
            />
          </a>
        </Link>
      </div>
      <div className="HeaderLinks">
        <span id="NavMenuButton" className="MenuIcon">
          <Icon icon="ic:baseline-menu" />
        </span>

        <span className="CurrentPage">Current Page</span>

        <div class="dropdownMenu" style={{ height: 0 }}>
          <div class="dropdownMenuHeightWrapper">
            <Link href={"/Sections"}>
              <span>Sections</span>
            </Link>

            <Link href={"/Gallery"}>
              <span>Gallery</span>
            </Link>

            <Link href={"/ContactUs"}>
              <span>Contact Us</span>
            </Link>

            <Link href={"/Shop"}>
              <span>Shop</span>
            </Link>
          </div>
        </div>
      </div>

      <Script src="/scripts/navScript.js" />
    </nav>
  );
};

export default Nav;
