"use client";

import Image from "next/image";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b py-3 sm:py-4 lg:py-5">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/images/Frame.jpg"
            alt="Logo"
            width={30}
            height={30}
            className="w-6 sm:w-7 lg:w-8"
          />
          <h1 className="text-[#0F0E47] text-base sm:text-lg lg:text-xl font-medium pl-1">
            ShieldSync
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-8 xl:gap-10 text-[#4B5563]">
            <li className="hover:text-[#0F0E47] transition-colors cursor-pointer text-sm lg:text-base px-1">
              Feature
            </li>
            <li className="hover:text-[#0F0E47] transition-colors cursor-pointer text-sm lg:text-base px-1">
              Solution
            </li>
            <li className="hover:text-[#0F0E47] transition-colors cursor-pointer text-sm lg:text-base px-1">
              Pricing
            </li>
            <li className="hover:text-[#0F0E47] transition-colors cursor-pointer text-sm lg:text-base px-1">
              FAQ
            </li>
          </ul>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          <button className="text-[#4B5563] text-sm sm:text-base hover:text-[#0F0E47] transition-colors px-2">
            Login
          </button>
          <button className="text-[#E5E7EB] bg-[#0F0E47] py-1.5 px-3 sm:px-4 md:px-5 lg:px-6 rounded-lg text-sm sm:text-base hover:bg-[#1a1960] transition-colors">
            Start Free Trial
          </button>
          <button 
            onClick={handleClick}
            className="md:hidden flex items-center justify-center ml-2 sm:ml-4
              w-10 h-10 rounded-lg
              hover:bg-gray-100 transition-colors
              focus:outline-none focus:ring-2 focus:ring-[#0F0E47] focus:ring-opacity-50">
            {isOpen ? (
              <IoMdClose className="text-[#4B5563] text-2xl sm:text-3xl transition-transform duration-200 rotate-0 hover:rotate-90" />
            ) : (
              <GiHamburgerMenu className="text-[#4B5563] text-xl sm:text-2xl transition-transform duration-200 hover:scale-110" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#0F0E47] z-50 md:hidden">
          <div className="flex flex-col h-full relative">
            <button 
              onClick={handleClick}
              className="absolute top-4 right-4
                w-10 h-10 rounded-lg
                flex items-center justify-center
                text-white hover:bg-[#1a1960] transition-colors">
              <IoMdClose className="text-2xl sm:text-3xl transition-transform duration-200 rotate-0 hover:rotate-90" />
            </button>
            <ul className="flex flex-col items-center gap-6 text-white w-full max-w-sm mx-auto">
              <li className="text-lg sm:text-xl hover:text-gray-300 transition-colors w-full text-center py-2">
                Feature
              </li>
              <li className="text-lg sm:text-xl hover:text-gray-300 transition-colors w-full text-center py-2">
                Solution
              </li>
              <li className="text-lg sm:text-xl hover:text-gray-300 transition-colors w-full text-center py-2">
                Pricing
              </li>
              <li className="text-lg sm:text-xl hover:text-gray-300 transition-colors w-full text-center py-2">
                FAQ
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
