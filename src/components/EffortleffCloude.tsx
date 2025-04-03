import React from "react";
import Image from "next/image";
//box color #8686AC
const EffortleffCloude = () => {
  return (
    <div className="w-full h-full bg-[#E5E7EB]   md:p-0">
      <div className="w-11/12 mx-auto py-3 md:w-3/5">
        <div className="text-[#0F0E47] text-center">
          <h1 className="text-xl font-bold md:font-medium md:text-5xl pt-3 md:pt-5">
            Effortless Cloud Storage Backups for{" "}
          </h1>
          <h1 className="text-xl font-bold  md:font-medium md:text-5xl">
            Azure
          </h1>
        </div>
        <div className="text-[#4B5563] px-3 my-3 md:px-20">
          <p className="text-center md:text-sm">
            ShieldSync automates cloud backups, protects against data loss, and
            ensures instant recovery all with enterprise-grade security and all
            policies against data loss.
          </p>
        </div>
        <div className="flex gap-3 justify-center pb-5 md:pb-8">
          <button className="text-[#E5E7EB] bg-[#0F0E47] py-1 px-2  rounded-lg">
            Start Free Trial
          </button>
          <button className="text-[#0F0E47] bg-white py-1 px-2 border-1 border-gray-400 rounded-lg">
            Watch Demo
          </button>
        </div>
      </div>

      {/* Card div */}

      <div className=" mt-6 md:flex md:flex-col md:items-center md:my-0">
        <div className="top  flex flex-col items-center gap-3 md:flex md:flex-row md:w-8/12 md:justify-center md:items-center md:gap-3">
          <div className="top-left bg-[#8686AC]  w-10/12 rounded-lg  md:rounded-xl p-4 md:flex md:gap-3 md:py-8 md:w-7/12">
            <div className="text md:w-[55%]">
              <div className="top-text md:pt-0">
                <h1 className="text-[#0F0E47] text-lg font-medium">Rapid, reliable recovery</h1>
                <p className="text-[#4B5563] text-start leading-4">
                  Recover anything—from a single file to your entire production
                  instance complete with network configurations in seconds.
                </p>
              </div>
              <div className="bottom-text border my-3 bg-white rounded-lg pl-14 py-5">
                <h3 className="text-[#0F0E47]">Capture VPC Settings</h3>
                <p className="text-[#0F0E47] text-sm w-50 ">
                  Automatically capture changes in network configurations
                </p>
              </div>
            </div>
            <div className="circle-buttn flex flex-col gap-1 md:w-[40%] md:mt-34">
              <button className="text-[#0F0E47] bg-white border w-[100%] rounded-2xl">Dr of encryption resourse</button>
              <button className="text-[#0F0E47] bg-white border w-[100%] rounded-2xl">Architectural fallover/drill</button>
            </div>
          </div>
          <div className="top-right bg-[#8686AC] w-10/12  rounded-lg md:rounded-xl p-4 mt-2 md:w-5/12 md:mt-0 md:py-7" style={{marginTop:"0px"}}>
            <div className="text">
              <h1 className="text-[#0F0E47] text-lg font-medium">Automated cost saving</h1>
              <p className="text-[#4B5563] text-start leading-4 py-2 md:py-5 md:pb-10">
                Reduce storage and compute costs automatically —with N2WS
                Resource Control, storage-optimized archiving and ZeroEBS.
              </p>
            </div>
            <div className="card flex gap-3">
              <div className="left-card bg-white p-4 rounded-2xl md:w-6/12">
                <p className="text-[#0F0E47] text-sm">Compute saving</p>
                <p className="text-[#0F0E47] text-md font-bold">$1,248.75</p>
              </div>
              <div className="right-card bg-white p-4 rounded-2xl md:w-5/12">
                <p className="text-[#0F0E47] text-sm">Storage saving</p>
                <p className="text-[#0F0E47] text-md font-bold">98%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom flex flex-col items-center  mt-2 gap-3 md:flex-row md:w-8/12">
          <div className="bottom-left bg-[#8686AC]  w-10/12  rounded-lg  p-4 md:w-5/12">
            <div className="text">
            <h1 className="text-[#0F0E47] text-lg font-medium">Data sovereignty and security</h1>
              <p className="text-[#4B5563] text-start leading-4 py-2">
                Reduce storage and compute costs automatically —with N2WS
                Resource Control, storage-optimized archiving and ZeroEBS.
              </p>
            </div>
            <div className="button ">
            <button className="text-[#0F0E47] bg-white text-sm py-1 w-[100%] rounded-2xl md:pt-4">N2WS&apos; server belongs to you it&apos;s not shared</button>
            </div>
            <div className="logo">
                <ul className="flex pt-5 justify-between items-center px-1">
                    <li><Image
                        src="/images/card-logo1.png"
                        alt="card1"
                        width={25}
                        height={10}
                    /></li>
                   <li><Image
                        src="/images/card-logo2.png"
                        alt="card1"
                        width={30}
                        height={10}
                    /></li>
                    <li><Image
                        src="/images/card-logo3.png"
                        alt="card1"
                        width={30}
                        height={10}
                    /></li>
                    <li><Image
                        src="/images/card-logo4.png"
                        alt="card1"
                        width={40}
                        height={10}
                    /></li> 
                </ul>
            </div>
          </div>
          <div className="bottom-right bg-[#8686AC]  w-10/12  rounded-lg p-4 md:flex md:gap-3 md:py-7">
            <div className="left md:w-7/12">
              <div className="top">
              <h1 className="text-[#0F0E47] text-lg font-medium">Automated cost saving</h1>
              <p className="text-[#4B5563] text-start leading-4 py-2 md:py-3">
                Reduce storage and compute costs automatically —with N2WS
                Resource Control, storage-optimized archiving and ZeroEBS.
              </p>
              </div>
              <div className="bottom flex flex-col gap-2 md:gap-4">
              <button className="text-[#0F0E47] bg-white   text-sm py-1 w-[100%] rounded-2xl">Dr of encryption resourse</button>
              <button className="text-[#0F0E47]  bg-white text-sm py-1 w-[100%] rounded-2xl">Dr of encryption resourse</button>
              </div>
            </div>
            <div className="right pt-2 md:w-5/12">
                <div className="bottom-img bg-white flex justify-center">
                <Image
                    src="/images/bar chart.png"
                    alt="card1"
                    width={150}
                    height={60}
                    className=""/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffortleffCloude;
