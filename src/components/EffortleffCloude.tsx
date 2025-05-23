import React from "react";
import Image from "next/image";
//box color #8686AC
const EffortleffCloude = () => {
  return (
    <div className="w-full bg-[#E5E7EB]   md:p-0">
      <div className="w-11/12 mx-auto py-3 sm:w-[80%] md:w-[80%] xl:w-[60%]">
        <div className="text-[#0F0E47] text-center">
          <h1 className="text-2xl font-bold sm:text-3xl md:font-bold md:text-4xl xl:text-5xl pt-3 md:pt-5">
            Effortless Cloud Storage Backups for
          </h1>
          {/* <h1 className="text-xl font-bold md:font-medium md:text-5xl">
            <span className="text-[#0F0E47]">Az</span><span className="text-[#111827]">ure</span>
          </h1> */}
          <h1 className="text-center md:pt-1">
            <img
              src="/images/Azure.png"
              className="mx-auto w-22 md:w-30"
              alt=""
            />
          </h1>
        </div>
        <div className="text-[#4B5563] px-3 my-3 md:px-20">
          <p className="text-center md:text-sm xl:text-lg">
            ShieldSync automates cloud backups, protects against data loss, and
            ensures instant recovery all with enterprise-grade security and all
            policies against data loss.
          </p>
        </div>
        <div className="flex gap-3 justify-center pt-4 pb-5 md:pb-8">
          <button className="text-[#E5E7EB] bg-[#0F0E47] py-2 px-3  rounded-lg md:px-6 md:py-3">
            Start Free Trial
          </button>
          <button className="text-[#0F0E47] bg-white py-2 px-3   border-gray-400 rounded-lg md:px-6 md:py-3">
            Watch Demo
          </button>
        </div>
      </div>

      {/* Card div */}

      <div className=" mt-4 md:flex md:flex-col md:items-center md:my-0">
        {/* Top Cards */}
        <div className="top flex flex-col md:flex-row items-center gap-4 px-4 
          w-full max-w-[95%] lg:max-w-[85%] mx-auto
          sm:gap-3 sm:px-0 xl:flex-row xl:w-[73.66%] xl:justify-center xl:items-center xl:gap-3">
          
          {/* Top Left Card */}
          <div className="top-left bg-[#8686AC] 
            w-full max-w-[95%]
            sm:w-[85%] md:w-[85%] lg:w-[78%] xl:w-12/12
            rounded-lg sm:rounded-xl
            p-4 
            sm:p-4 md:p-5 lg:p-6 xl:p-6 
            min-h-[280px]
            sm:h-[300px] md:h-[350px] lg:h-[320px] xl:h-[320px]
            flex flex-col 
            gap-6 lg:gap-3
            sm:flex-row md:flex-col lg:flex-row xl:flex-row sm:gap-5 md:gap-6">
            <div className="w-full sm:w-[65%] md:w-full lg:w-[195%] xl:w-[120%] space-y-4   lg:flex lg:flex-col lg:gap-4 xl:flex xl:flex-col xl:gap-4">
              <div className="space-y-2">
                <h1 className="text-[#0F0E47] 
                  text-lg sm:text-xl md:text-2xl
                  font-medium">
                  Rapid, reliable recovery
                </h1>
                <p className="text-[#4B5563] 
                  text-sm sm:text-base
                  leading-5 sm:leading-6">
                  Recover anything—from a single file to your entire production
                  instance complete with network configurations in seconds.
                </p>
              </div>
              
              <div className="bg-white 
                rounded-lg
                p-4 sm:p-5 md:p-2
                space-y-2">
                <h3 className="text-[#0F0E47] 
                  text-base sm:text-lg
                  font-medium">
                  Capture VPC Settings
                </h3>
                <p className="text-[#0F0E47] 
                  text-sm sm:text-base
                  w-[90%] lg:w-[95%]">
                  Automatically capture changes in network configurations
                </p>
              </div>
            </div>
          
            <div className="flex flex-col md:flex-row lg:flex-col xl:flex-col    
              w-full sm:w-[40%] md:w-[100%] lg:w-[130%] xl:w-[100%] sm:mt-23 md:mt-0 lg:mt-40 xl:mt-40
              gap-3 sm:gap-4 ">
              <button className="text-[#0F0E47] 
                bg-white 
                border border-gray-200
                w-full 
                py-2 sm:py-2.5 lg:py-1 
                px-3 sm:px-4 lg:px-0
                text-sm sm:text-base
                rounded-2xl
                hover:bg-gray-50 transition-colors">
                Dr of encryption resourse
              </button>
              <button className="text-[#0F0E47] 
                bg-white 
                border border-gray-200
                w-full 
                py-2 sm:py-2.5 lg:py-1 
                px-3 sm:px-4 lg:px-0
                text-sm sm:text-base
                rounded-2xl
                hover:bg-gray-50 transition-colors">
                Architectural fallover/drill
              </button>
            </div>
          </div>

          {/* Top Right Card */}
          <div className="top-right bg-[#8686AC] 
            w-full max-w-[95%]
            sm:w-[85%] md:w-[80%] lg:w-[50%]  xl:w-7/12
            rounded-lg sm:rounded-xl
            p-4
            sm:p-4 md:p-5 lg:p-6
            min-h-[280px]
            sm:min-h-[270px] md:h-[350px] lg:h-[320px] xl:h[350px]">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-[#0F0E47] 
                text-lg sm:text-xl md:text-2xl
                font-medium">
                Automated cost saving
              </h1>
              <p className="text-[#4B5563] 
                text-sm sm:text-base  
                leading-5 sm:leading-6">
                Reduce storage and compute costs automatically —with N2WS
                Resource Control, storage-optimized archiving and ZeroEBS.
              </p>
            </div>
          
            <div className="flex gap-3 sm:gap-4 mt-10 md:mt-14 md:mb-14 lg:mt-5 xl:mt-5 xl:mb-5">
              <div className="flex-1 bg-white 
                rounded-xl sm:rounded-2xl
                p-3 sm:p-4 md:p-5">
                <p className="text-[#0F0E47] 
                  text-xs sm:text-sm 
                  mb-1 sm:mb-2">
                  Compute saving
                </p>
                <p className="text-[#0F0E47] 
                  text-lg sm:text-xl md:text-2xl
                  font-bold">
                  $1,248.75
                </p>
              </div>
              <div className="flex-1 bg-white 
                rounded-xl sm:rounded-2xl
                p-3 sm:p-4 md:p-5">
                <p className="text-[#0F0E47] 
                  text-xs sm:text-sm 
                  mb-1 sm:mb-2">
                  Storage saving
                </p>
                <p className="text-[#0F0E47] 
                  text-lg sm:text-xl md:text-2xl
                  font-bold">
                  98%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="bottom flex flex-col md:flex-row xl:flex-row items-center xl:justify-center
          gap-4 px-4 mt-4
          w-full max-w-[95%] lg:max-w-[85%] xl:w-[74%]  mx-auto
          sm:gap-3 sm:px-0 sm:mt-4 md:mt-6 lg:mt-8  xl:items-center xl:gap-3">
          
          {/* Bottom Left Card */}
          <div className="bottom-left bg-[#8686AC] 
             w-full max-w-[95%]
            sm:w-[85%] md:w-[42%] lg:w-[45%] xl:w-[40%]
            rounded-lg sm:rounded-xl
            p-4
            sm:p-4 md:p-5 xl:p-6 lg:p-6 xl:p-3 
            min-h-[180px]
            sm:h-[245px] md:h-[260px] lg:h-[260px] xl:h-[283px]
            @[768px]:w-[47%] @[768px]:h-[250px]
            @[834px]:w-[46%] @[834px]:h-[255px]
            @[912px]:w-[47%] @[912px]:h-[255px]
            @[1024px]:w-[48%] @[1024px]:h-[255px]
            @[1152px]:w-[46%] @[1152px]:h-[255px]
            @[1280px]:w-[45%] @[1280px]:h-[280px]
            @[1366px]:w-[42%] @[1366px]:h-[285px]
            @[1440px]:w-[40%] @[1440px]:h-[290px]
            @[1536px]:w-[38%] @[1536px]:h-[295px]">
            <div className="flex flex-col justify-between h-full">
              <div className="text space-y-2 sm:space-y-3">
                <h1 className="text-[#0F0E47] 
                  text-lg sm:text-xl md:text-2xl
                  font-medium">
                  Data sovereignty and security
                </h1>
                <p className="text-[#4B5563] 
                  text-sm sm:text-base
                  leading-5 sm:leading-6 md:leading-4 xl:leading-6">
                  Reduce your attack surface. Get total control over your
                  environment N2WS,for complete peace of mind.
                </p>
              </div>
          
              <div className="space-y-4 sm:space-y-5 md:space-y-0 xl:pt-0">
                <button className="text-[#0F0E47] 
                  bg-white 
                  w-full 
                  py-2 my-2 md: sm:py-2.5 md:py-0
                  px-1 sm:px-4 md:px-0 xl:py-2
                  text-sm sm:text-base
                  rounded-2xl
                  mb-[-13px] md:mb-1  xl:mb-5
                  hover:bg-gray-50 transition-colors">
                  N2WS&apos; server belongs to you it&apos;s not shared
                </button>
          
                <div className="logo">
                  <ul className="flex justify-between items-center 
                    px-1 sm:px-2 md:px-1
                    pt-4 sm:pt-5 md:py-2 lg:py-2">
                    <li>
                      <Image
                        src="/images/card-logo1.png"
                        alt="card1"
                        width={25}
                        height={10}
                        className="w-6 sm:w-7 md:w-8 lg:w-9"
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/card-logo2.png"
                        alt="card1"
                        width={30}
                        height={10}
                        className="w-7 sm:w-8 md:w-9 lg:w-10"
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/card-logo3.png"
                        alt="card1"
                        width={30}
                        height={10}
                        className="w-7 sm:w-8 md:w-9 lg:w-10"
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/card-logo4.png"
                        alt="card1"
                        width={40}
                        height={10}
                        className="w-8 sm:w-9 md:w-10 lg:w-11"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Right Card */}
          <div className="bottom-right bg-[#8686AC]  
            w-full max-w-[95%]
            sm:w-[85%] md:w-[58%] lg:w-[55%] xl:w-7/12
            rounded-lg sm:rounded-xl
            p-4
            sm:p-4 md:p-5 lg:p-6
            min-h-[180px]
            sm:min-h-[157px] md:h-[260px] lg:h-[260px] xl:h-[283px]
            @[768px]:w-[53%] @[768px]:h-[250px]
            @[834px]:w-[54%] @[834px]:h-[255px]
            @[912px]:w-[53%] @[912px]:h-[255px]
            @[1024px]:w-[58%] @[1024px]:h-[255px]
            @[1152px]:w-[56%] @[1152px]:h-[255px]
            @[1280px]:w-[55%] @[1280px]:h-[280px]
            @[1366px]:w-[52%] @[1366px]:h-[285px]
            @[1440px]:w-[50%] @[1440px]:h-[290px]
            @[1536px]:w-[48%] @[1536px]:h-[295px]">
            <div className="flex flex-col sm:flex-row justify-between h-full gap-2 sm:gap-2 xl:gap-4">
              <div className="w-full sm:w-7/12 md:w-10/12 xl:w-7/12 flex flex-col justify-between">
                <div className="space-y-2 sm:space-y-3">
                  <h1 className="text-[#0F0E47] 
                    text-lg sm:text-xl md:text-2xl
                    font-medium">
                    Multi-cloud Management
                  </h1>
                  <p className="text-[#4B5563] 
                    text-sm sm:text-base
                    leading-5 sm:leading-4 xl:leading-6">
                    Easily manage all backup & recovery policies in different
                    accounts, regions, and clouds—in one console.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:gap-3 xl:text-start">
                  <button className="text-[#0F0E47] 
                    bg-white 
                    w-full 
                    py-2 sm:py-2.5 md:py-3 xl:py-2
                    px-3 sm:px-4 md:px-5 xl:px-5
                    text-sm sm:text-base
                    rounded-2xl xl:text-start
                    hover:bg-gray-50 transition-colors">
                    Dr of encryption resourse
                  </button>
                  <button className="text-[#0F0E47] 
                    bg-white 
                    w-full 
                    py-2 sm:py-2.5 md:py-3 xl:py-2
                    px-3 sm:px-4 md:px-5 
                    text-sm sm:text-base
                    rounded-2xl
                    xl:text-start
                    hover:bg-gray-50 transition-colors">
                    Dr of encryption resourse
                  </button>
                </div>
              </div>
          
              <div className="w-full sm:w-5/12 md:w-4/12 flex items-center sm:mt-13 md:mt-18 lg:mt-10">
                <div className="bg-white w-full rounded-xl p-3 sm:p-4">
                  <Image
                    src="/images/bar chart.png"
                    alt="Bar Chart"
                    width={20}
                    height={20}
                    className="w-full object-contain h-30 lg:h-40" // Added lg:h-40 for larger height on desktop
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffortleffCloude;
