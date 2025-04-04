import React from "react";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0F0E47] text-white 
      py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto
        px-4 sm:px-6 md:px-8 lg:px-10
        flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        
        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
          gap-8 sm:gap-10 md:gap-12 lg:gap-16
          w-full max-w-[1280px] mx-auto">
          
          {/* Logo Section */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/footerLogo.png"
                alt="Logo"
                width={30}
                height={30}
                className="w-6 sm:w-7"
              />
              <h1 className="text-lg sm:text-xl font-medium">ShieldSync</h1>
            </div>
            <p className="text-sm sm:text-base text-gray-300">
              Secure cloud backup solution for modern businesses
            </p>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h2 className="text-lg sm:text-xl font-medium">Product</h2>
            <ul className="flex flex-col gap-2 sm:gap-3
              text-sm sm:text-base text-gray-300">
              <li className="hover:text-white transition-colors">Features</li>
              <li className="hover:text-white transition-colors">Products</li>
              <li className="hover:text-white transition-colors">Pricing</li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h2 className="text-lg sm:text-xl font-medium">Company</h2>
            <ul className="flex flex-col gap-2 sm:gap-3
              text-sm sm:text-base text-gray-300">
              <li className="hover:text-white transition-colors">About</li>
              <li className="hover:text-white transition-colors">Blog</li>
              <li className="hover:text-white transition-colors">Career</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h2 className="text-lg sm:text-xl font-medium">Connect</h2>
            <ul className="flex gap-4 text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">
                <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700 my-4 sm:my-6" />

        {/* Copyright */}
        <div className="text-center text-sm sm:text-base text-gray-300">
          &copy; 2025 ShieldSync. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
