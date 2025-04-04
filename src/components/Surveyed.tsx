import React from "react";
import Image from "next/image";

const Surveyed = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="text-center max-w-4xl mx-auto">
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-[#0F0E47] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium md:font-bold">
            94% of surveyed organizations are
          </h1>
          <h1 className="text-[#0F0E47] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium md:font-bold">
            using public cloud computing services
          </h1>
          <p className="text-[#4B5563] text-sm sm:text-base lg:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 max-w-2xl mx-auto leading-relaxed">
            And the most reliable and fastest growing organizations are protecting
            their cloud workloads and staying ahead of the curve with N2WS Backup
            & Recovery
          </p>
        </div>
      </div>

      {/* Logo Grid Section */}
      <div className="mt-8 sm:mt-12 lg:mt-16 space-y-8 sm:space-y-10 lg:space-y-12">
        {/* Top Row Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10 items-center justify-items-center max-w-7xl mx-auto px-4">
          <div className="w-full flex justify-center px-2 sm:px-3">
            <Image
              src="/images/bristol.png"
              alt="Bristol Logo"
              width={101}      // Increased from 78 by another 30%
              height={34}      // Increased from 26 by another 30%
              className="w-24 sm:w-32 md:w-36 lg:w-40 xl:w-44 2xl:w-48 h-auto object-contain transition-all duration-300"
              priority
            />
          </div>
          <div className="w-full flex justify-center px-2 sm:px-3">
            <Image
              src="/images/Vector4.png"
              alt="Vector Logo"
              width={50}
              height={15}
              className="w-12 sm:w-16 md:w-20 lg:w-22 h-auto object-contain"
            />
          </div>
          <div className="w-full flex justify-center px-2 sm:px-3">
            <div className="bg-black/70 p-1.5 rounded-full flex items-center justify-center">
              <Image
                src="/images/vodaLogo.png"
                alt="Vodafone Logo"
                width={15}
                height={15}
                className="w-3 sm:w-4 md:w-5 lg:w-6 h-auto object-contain"
              />
            </div>
          </div>
          <div className="w-full flex justify-center px-2 sm:px-3">
            <Image
              src="/images/nasa.png"
              alt="NASA Logo"
              width={40}
              height={15}
              className="w-10 sm:w-14 md:w-18 lg:w-20 h-auto object-contain"
            />
          </div>
          <div className="w-full flex justify-center px-2 sm:px-3">
            <Image
              src="/images/accenture.png"
              alt="Accenture Logo"
              width={60}
              height={15}
              className="w-14 sm:w-18 md:w-22 lg:w-24 h-auto object-contain"
            />
          </div>
          <div className="w-full flex justify-center px-2 sm:px-3">
            <Image
              src="/images/db.png"
              alt="DB Logo"
              width={40}
              height={15}
              className="w-10 sm:w-14 md:w-18 lg:w-20 h-auto object-contain"
            />
          </div>
        </div>

        {/* Bottom Row Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10 items-center justify-items-center max-w-7xl mx-auto px-4">
          <div className="w-full flex justify-center px-2 sm:px-3">
            <Image
              src="/images/Vector.png"
              alt="Vector Logo"
              width={40}
              height={15}
              className="w-10 sm:w-14 md:w-18 lg:w-20 h-auto object-contain"
            />
          </div>
          <div className="w-full flex justify-center px-2 sm:px-3">
            <Image
              src="/images/moderna.png"
              alt="Moderna Logo"
              width={50}
              height={20}
              className="w-12 sm:w-16 md:w-20 lg:w-22 h-auto object-contain"
            />
          </div>
          <div className="w-full flex justify-center px-4 sm:px-6">
            <Image
              src="/images/trelo.png"
              alt="Trello Logo"
              width={63}      // Reduced from 90 by 30%
              height={21}     // Reduced from 30 by 30%
              className="w-14 sm:w-20 md:w-25 lg:w-28 h-auto object-contain"  // Reduced from w-20/w-28/w-36/w-40
            />
          </div>
          <div className="w-full flex justify-center px-4 sm:px-6">
            <Image
              src="/images/hp2.png"
              alt="HP Logo"
              width={42}      // Reduced from 60 by 30%
              height={21}     // Reduced from 30 by 30%
              className="w-11 sm:w-14 md:w-20 lg:w-22 h-auto object-contain"  // Reduced from w-16/w-20/w-28/w-32
            />
          </div>
          <div className="w-full flex justify-center px-4 sm:px-6">
            <Image
              src="/images/wharton.png"
              alt="Wharton Logo"
              width={100}
              height={30}
              className="w-24 sm:w-32 md:w-40 lg:w-44 h-auto object-contain"
            />
          </div>
          <div className="w-full flex justify-center px-4 sm:px-6">
            <Image
              src="/images/WB.png"
              alt="WB Logo"
              width={42}      // Reduced from 60 by 30%
              height={21}     // Reduced from 30 by 30%
              className="w-11 sm:w-14 md:w-20 lg:w-22 h-auto object-contain"  // Reduced from w-16/w-20/w-28/w-32
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surveyed;
