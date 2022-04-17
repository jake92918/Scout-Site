import React from "react";
import Link from "next/link";
import Image from 'next/image';
import Script from 'next/script';

const Nav = () => {
    return (
        <div>
            <link rel="stylesheet" type="text/css" href="/styles/components/_nav.min.css" />
            <nav className="NavigationHeader">
                <div className="HeaderLogo">
                    <Link href="/">
                        <Image src="/Images/UXBLogo.png" alt="2nd Uxbridge Scouts" width={1231} height={492} layout='fill' objectFit='contain' />
                    </Link>
                </div>
                <div className="HeaderLinks">
                    <Link href={'/Sections'}>
                        <span>Sections</span>
                    </Link>

                    <Link href={'/Gallery'}>
                        <span>Gallery</span>
                    </Link>

                    <Link href={'/ContactUs'}>
                        <span>Contact Us</span>
                    </Link>

                    <Link href={'/Shop'}>
                        <span>Shop</span>
                    </Link>
                </div>

                <Script>
                    {`
                        const nav = document.querySelector(".NavigationHeader");

                        function fixnavbar(){
                            nav.style.width = (document.body.offsetWidth - window.scrollY * 2) + "px"
                        }

                        window.addEventListener("scroll", fixnavbar);
                    `}
                </Script>
            </nav>
        </div>
    );
};


export default Nav;