// components/Navbar.tsx
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../public/assets/logo.png";
import HomeMenu from "@/components/navbar/DishesMenu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MergeMenu from "@/components/navbar/MergeMenu";
import Pages from "@/components/navbar/Pages";

const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false);

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
        isScrolled ? "fixed bg-white shadow-lg" : "absolute bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4">
        <div>
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>
        <div className="flex items-center gap-5">
          <p className="uppercase">Home</p>
          <HomeMenu />
          <MergeMenu />
          <Pages />
          <p className="uppercase hover:text-primary cursor-pointer">Admin</p>
        </div>
        <div className="flex gap-4">
          <SearchIcon />
          <ShoppingCartIcon />
          <FavoriteBorderIcon />
          <PermIdentityIcon />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
