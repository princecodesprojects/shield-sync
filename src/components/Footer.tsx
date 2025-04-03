import React from "react";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="footer-main bg-[#0F0E47] text-white py-10 flex flex-col gap-5 md:gap-8">
      <div className="top-content flex flex-col gap-3 md:flex-row       -1 md:w-[80%] py-2 md:mx-auto">
        <div className="logo       -white       -1 w-[80%] flex flex-col gap-3 md:w-[25%] mx-auto">
          <div className="top flex gap-2">
            <Image
              src="/images/Frame.jpg"
              alt="Logo"
              width={30}
              height={30}
              className="w-7"
            />
            <h1 className=" text-lg">ShieldSync</h1>
          </div>
          <div className="bottom">
            <h1>Secure cloud backup solution for modern businesses</h1>
          </div>
        </div>
        <div className="product       -white       -1 w-[80%] mx-auto md:w-[22%]">
          <h1 className="text-lg py-2">Product</h1>
          <ul className="flex flex-col gap-2">
            <li>Features</li>
            <li>Products</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="company       -white       -1 w-[80%] mx-auto md:w-[22%]">
          <h1 className="py-2 text-lg">Company</h1>
          <ul className="flex flex-col gap-2">
            <li>About</li>
            <li>Blog</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="connect       -white       -1 w-[80%] mx-auto md:w-[22%]">
          <h1 className="py-2 text-lg">Connect</h1>
          <ul className="flex gap-4">
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaGithub />
            </li>
          </ul>
        </div>
      </div>
      <div className="line w-[80%] h-[2px] bg-gray-500 mx-auto"></div>
      {/* <hr className="w-[80%] mx-auto" /> */}
      <div className="bottom       -white       -1 w-[80%] mx-auto">
        <h1 className="text-center">
          &copy; 2025 ShieldSync. All right reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
