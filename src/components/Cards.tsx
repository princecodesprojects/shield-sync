import React from "react";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="w-full max-w-[95%] lg:max-w-[85%] xl:w-[73.66%] mx-auto">
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Top Left Card */}
        <div className="bg-[#8686AC] rounded-lg sm:rounded-xl p-4 sm:p-6 min-h-[280px] sm:h-[300px]">
          <div className="space-y-4">
            <div>
              <h2 className="text-[#0F0E47] text-lg sm:text-xl md:text-2xl font-medium">
                Rapid, reliable recovery
              </h2>
              <p className="text-[#4B5563] text-sm sm:text-base mt-2 leading-6">
                Recover anything—from a single file to your entire production instance complete with
                network configurations—in seconds.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-5">
              <h3 className="text-[#0F0E47] font-medium mb-2">Capture VPC Settings</h3>
              <p className="text-[#4B5563] text-sm">
                Automatically capture changes in network configurations.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <button className="text-[#0F0E47] bg-white px-4 py-2 rounded-full text-sm border hover:bg-gray-50 transition-colors">
                DR of encrypted resources
              </button>
              <button className="text-[#0F0E47] bg-white px-4 py-2 rounded-full text-sm border hover:bg-gray-50 transition-colors">
                Orchestrated failover/drills
              </button>
            </div>
          </div>
        </div>

        {/* Top Right Card */}
        <div className="bg-[#8686AC] rounded-lg sm:rounded-xl p-4 sm:p-6 min-h-[280px] sm:h-[300px]">
          <div className="space-y-4">
            <h2 className="text-[#0F0E47] text-lg sm:text-xl md:text-2xl font-medium">
              Automated cost savings
            </h2>
            <p className="text-[#4B5563] text-sm sm:text-base leading-6">
              Reduce storage and compute costs automatically — with N2WS Resource Control, storage-optimized
              archiving and ZeroEBS.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white rounded-xl p-4">
                <p className="text-[#4B5563] text-sm mb-1">Compute savings</p>
                <p className="text-[#0F0E47] text-xl font-bold">$1,248.75</p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="text-[#4B5563] text-sm mb-1">Storage savings</p>
                <p className="text-[#0F0E47] text-xl font-bold">98%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4">
        {/* Bottom Left Card */}
        <div className="bg-[#8686AC] rounded-lg sm:rounded-xl p-4 sm:p-6 min-h-[280px] sm:h-[300px]">
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-4">
              <h2 className="text-[#0F0E47] text-lg sm:text-xl md:text-2xl font-medium">
                Data sovereignty and security
              </h2>
              <p className="text-[#4B5563] text-sm sm:text-base leading-6">
                Reduce your attack surface. Get total control over your environment with N2WS, for complete peace of mind.
              </p>
            </div>

            <div className="space-y-6">
              <button className="w-full text-[#0F0E47] bg-white px-4 py-2 rounded-full text-sm hover:bg-gray-50 transition-colors">
                N2WS&apos; server belongs to you—it&apos;s not shared
              </button>

              <div className="flex justify-between items-center px-2">
                <Image src="/images/card-logo1.png" alt="logo" width={25} height={10} className="w-6 sm:w-7" />
                <Image src="/images/card-logo2.png" alt="logo" width={30} height={10} className="w-7 sm:w-8" />
                <Image src="/images/card-logo3.png" alt="logo" width={30} height={10} className="w-7 sm:w-8" />
                <Image src="/images/card-logo4.png" alt="logo" width={40} height={10} className="w-8 sm:w-9" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right Card */}
        <div className="bg-[#8686AC] rounded-lg sm:rounded-xl p-4 sm:p-6 min-h-[280px] sm:h-[300px]">
          <div className="flex flex-col sm:flex-row gap-6 h-full">
            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-[#0F0E47] text-lg sm:text-xl md:text-2xl font-medium">
                  Multi-cloud management
                </h2>
                <p className="text-[#4B5563] text-sm sm:text-base mt-2 leading-6">
                  Easily manage all backup & recovery policies in different accounts, regions, and clouds—in one console.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <button className="text-[#0F0E47] bg-white px-4 py-2 rounded-full text-sm hover:bg-gray-50 transition-colors">
                  Built for easy multi-tenancy
                </button>
                <button className="text-[#0F0E47] bg-white px-4 py-2 rounded-full text-sm hover:bg-gray-50 transition-colors">
                  Easy audit reports and API
                </button>
              </div>
            </div>

            <div className="w-full sm:w-1/2 flex items-center">
              <div className="bg-white rounded-xl p-4 w-full">
                <Image
                  src="/images/bar chart.png"
                  alt="Bar Chart"
                  width={150}
                  height={60}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards; 