// components/Navbar.tsx
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../../public/assets/logo.png";
import logoLight from "../../../../public/assets/logoLight.png";
import { useTheme } from "next-themes";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { MdFavorite } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full top-0 z-50  ${
        isScrolled ? "fixed  shadow-lg" : "absolute bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4">
        <div>
          {theme === "dark" ? (
            <>
              {" "}
              <Image src={logoLight} alt="logo" width={100} height={100} />
            </>
          ) : (
            <>
              {" "}
              <Image src={logo} alt="logo" width={100} height={100} />
            </>
          )}
        </div>
        <div className="flex items-center gap-5">
          <Link href={"/"}>
            <p className="uppercase text-textColor hover:text-primary">Home</p>
          </Link>
          <Link href={'/admin/dashboard'}>
            {" "}
            <p className="uppercase text-textColor hover:text-primary cursor-pointer">
              Admin
            </p>
          </Link>
        </div>
        <div className="flex gap-4">
          <CiSearch className="text-textColor hover:text-primary" />
          <CiShoppingCart className="text-textColor hover:text-primary" />
          <MdFavorite className="text-red-700" />
          <IoPersonCircleOutline className="text-textColor hover:text-primary" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
