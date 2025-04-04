import React from "react";
import Image from "next/image";

export default function WhyShieldSync() {
  // Feature data for mapping

  return (
    <section className="py-10 md:py-15">
      <div className="heading pb-5 md:pb-8">
        <h1 className="text-[#0f0e47] text-4xl text-center">Why ShieldSync?</h1>
      </div>
      <div className="box flex flex-col items-center gap-3     md:flex md:flex-row w-[90%] mx-auto justify-between">
        <div className="left  w-[85%] flex flex-col gap-3 md:w-[45%]">
          <div >
            <h1 className="flex gap-2">
              <Image 
              width={10}
              height={10}
              src="/images/check.png"
              alt="logo"
              className="w-5 md:w-7"
              />
              <span className="text-[#0f0e47] text-sm font-medium md:text-xl">100% Automated Cloud Storage Backup</span>
            </h1>
            <h2 className="text-[#4B5563] pl-6 pt-3 md:text-lg md:pl-10">No manual intervention required</h2>
          </div>
          <div>
          <h1 className="flex gap-2">
              <Image 
              width={10}
              height={10}
              src="/images/shield.png"
              alt="logo"
             className="w-5 md:w-7"
              />
              <span className="text-[#0f0e47] text-sm font-medium md:text-xl">Ransomware Protection</span>
            </h1>
            <h2 className="text-[#4B5563] pl-6 pt-3 md:text-lg md:pl-10">Backups remain untouchable with immutable storage</h2>
          </div>
          <div>
          <h1 className="flex gap-1">
              <Image 
              width={10}
              height={10}
              src="/images/bar.png"
              alt="logo"
              className="w-5 md:w-7"
              />
              <span className="text-[#0f0e47] text-sm font-medium md:text-xl">Affordable & Scalable</span>
            </h1>
            <h2 className="text-[#4B5563] pl-6 pt-3 md:text-lg md:pl-10">Pay-as-you-grow model tailored for SMBs</h2>
          </div>
        </div>
        <div className="right   w-[82%] bg-gray-300 py-5 rounded-xl md:w-[45%] md:py-7">
            <div className="box   w-[90%] mx-auto bg-white rounded-xl md:w-[85%]">
                <div className="container p-2">
                    <div className="text flex justify-between">
                        <h1 className="text-[#0f0e47]">Backup Status</h1>
                        <h1 className="text-gray-600">Last backup: 2 min ago</h1>
                    </div>
                    <div className="progress   mt-5">
                         <p className="bg-gray-200 w-59  md:w-123 h-2 rounded-lg"><p className="bg-[#0f0e47] w-50 md:w-100 h-2 "></p></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
