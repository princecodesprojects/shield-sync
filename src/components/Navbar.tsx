"use client";

import Image from "next/image";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  const [isOpne, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpne);
  };


  const stile={
    transition:"witdth 1s ease-in-out",

  }

  return (
    <nav className="border-1 py-5 relative">
      <div className="flex justify-around">
        <div className="flex gap-2">
          <Image
            src="/images/Frame.jpg"
            alt="Logo"
            width={30}
            height={30}
            className="w-7"
          />
          <h1 className="text-[#0F0E47] text-lg">ShieldSync</h1>
        </div>

        {isOpne && (
          <div  style={stile} className="absolute top-18 right-0 border-1 w-[50%] bg-[#0F0E47] text-white  h-[30vh] hidden flex-col justify-center items-center">
            {/* <button
              className="absolute top-3 right-5 p-2 bg-amber-50 text-black"
              onClick={handleClick}
            >
              <RxCross1 />
            </button> */}
            <ul className="text-xl font-medium flex flex-col gap-2">
              <li>Feature</li>
              <li>Solution</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
          </div>
        )}

        <div className="hidden md:block">
          <ul className=" md:text-[#4B5563] flex gap-5 text-lg md:gap-8">
            <li>Feature</li>
            <li>Solution</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="flex gap-3 items-center">
          <button className="text-[#4B5563] text-lg font-medium md:text-lg">Login</button>
          <button className="text-[#E5E7EB] bg-[#0F0E47] py-1 px-2 rounded-lg md:rounded-md md:px-3">
            Start Free Trial
          </button>
        </div>
        <div
          className="text-[#4B5563] py-1 text-xl md:hidden"
          onClick={handleClick}
        >
          {/* {!isOpne?<GiHamburgerMenu />:<RxCross1 className=""/>} */}
          <SidebarTrigger className="md:hidden flex  ml-4"><GiHamburgerMenu /></SidebarTrigger>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
