// components/Navbar.tsx
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../../public/assets/logo.png";
import logoLight from "../../../../public/assets/logoLight.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useTheme } from "next-themes";

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
      className={`w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "fixed bg-bgColor shadow-lg" : "absolute bg-transparent"
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
          <p className="uppercase text-textColor hover:text-primary">Home</p>
          {/* <HomeMenu /> */}
          {/* <MergeMenu />
          <Pages /> */}
          <p className="uppercase text-textColor hover:text-primary cursor-pointer">
            Admin
          </p>
        </div>
        <div className="flex gap-4">
          <SearchIcon className="text-textColor hover:text-primary" />
          <ShoppingCartIcon className="text-textColor hover:text-primary" />
          <FavoriteBorderIcon className="text-red-700" />
          <PermIdentityIcon className="text-textColor hover:text-primary" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
