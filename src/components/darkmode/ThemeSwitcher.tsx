"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { FaArrowUp, FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { TiArrowUp } from "react-icons/ti";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="relative">
      <div onClick={scrollTop}
        className={`${
          isVisible ? "absolute grow-from-bottom flex justify-center items-start top-[-45px] " : "hidden"
        } z-10 bg-primary h-16 rounded-t-full w-full opacity-50 pt-3`}
      >
        <FaArrowUp className="text-lg" />
      </div>
      <button
        onClick={handleTheme}
        className="z-20 p-3 rounded-full flex justify-center items-center bg-primary"
      >
        {theme === "light" ? (
          <FaMoon className="text-white text-lg" />
        ) : (
          <IoSunny className="text-white text-lg" />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
