import React from "react";
import Image from "next/image";

export default function WhyShieldSync() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      {/* Heading */}
      <div className="heading pb-4 sm:pb-6 md:pb-8 lg:pb-10">
        <h1 className="text-[#0f0e47] text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium text-center">
          Why ShieldSync?
        </h1>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10
        w-[92%] sm:w-[90%] md:w-[88%] lg:w-[90%] xl:w-[85%]
        mx-auto justify-between">
        
        {/* Left Section - Features */}
        <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[45%] 
          flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          
          {/* Feature 1 */}
          <div>
            <h1 className="flex items-center gap-2 sm:gap-3">
              <Image 
                width={28}
                height={28}
                src="/images/check.png"
                alt="Automated Backup Icon"
                className="w-5 sm:w-6 md:w-7 lg:w-8"
              />
              <span className="text-[#0f0e47] text-sm sm:text-base md:text-lg lg:text-xl font-medium">
                100% Automated Cloud Storage Backup
              </span>
            </h1>
            <h2 className="text-[#4B5563] pl-7 sm:pl-8 md:pl-9 lg:pl-10 
              pt-2 sm:pt-2.5 md:pt-3
              text-xs sm:text-sm md:text-base lg:text-lg">
              No manual intervention required
            </h2>
          </div>

          {/* Feature 2 */}
          <div>
            <h1 className="flex items-center gap-2 sm:gap-3">
              <Image 
                width={28}
                height={28}
                src="/images/shield.png"
                alt="Shield Icon"
                className="w-5 sm:w-6 md:w-7 lg:w-8"
              />
              <span className="text-[#0f0e47] text-sm sm:text-base md:text-lg lg:text-xl font-medium">
                Ransomware Protection
              </span>
            </h1>
            <h2 className="text-[#4B5563] pl-7 sm:pl-8 md:pl-9 lg:pl-10 
              pt-2 sm:pt-2.5 md:pt-3
              text-xs sm:text-sm md:text-base lg:text-lg">
              Backups remain untouchable with immutable storage
            </h2>
          </div>

          {/* Feature 3 */}
          <div>
            <h1 className="flex items-center gap-2 sm:gap-3">
              <Image 
                width={28}
                height={28}
                src="/images/bar.png"
                alt="Scale Icon"
                className="w-5 sm:w-6 md:w-7 lg:w-8"
              />
              <span className="text-[#0f0e47] text-sm sm:text-base md:text-lg lg:text-xl font-medium">
                Affordable & Scalable
              </span>
            </h1>
            <h2 className="text-[#4B5563] pl-7 sm:pl-8 md:pl-9 lg:pl-10 
              pt-2 sm:pt-2.5 md:pt-3
              text-xs sm:text-sm md:text-base lg:text-lg">
              Pay-as-you-grow model tailored for SMBs
            </h2>
          </div>
        </div>

        {/* Right Section - Backup Status */}
        <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[45%] 
          bg-gray-300 py-4 sm:py-5 md:py-6 lg:py-7 
          rounded-xl mt-6 lg:mt-0">
          <div className="w-[90%] sm:w-[88%] md:w-[85%] mx-auto 
            bg-white rounded-xl p-4 sm:p-5">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-[#0f0e47] text-sm sm:text-base md:text-lg font-medium">
                Backup Status
              </h1>
              <h1 className="text-gray-600 text-xs sm:text-sm md:text-base">
                Last backup: 2 min ago
              </h1>
            </div>
            <div className="progress mt-3 sm:mt-4">
              <div className="bg-gray-200 w-full h-2 rounded-lg">
                <div className="bg-[#0f0e47] w-[80%] h-2 rounded-lg 
                  transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
