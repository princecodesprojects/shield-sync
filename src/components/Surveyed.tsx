import React from "react";
import Image from "next/image";

const Surveyed = () => {
  return (
    <div>
      <div className="top text-center pt-6">
        <h1 className="text-[#0F0E47] text-xl font-medium md:text-2xl md:font-bold">
          94% of surveyed organizations are
        </h1>
        <h1 className="text-[#0F0E47]  text-xl font-medium md:text-2xl md:font-bold">
          using public cloud computing services
        </h1>
        <p className="text-[#4B5563] text-center px-4 py-5 md:w-5/12  md:mx-auto">
          And the most reliable and fastest growing organizations are protecting
          their cloud workloads and staying ahead of the curve with N2WS Backup
          & Recovery
        </p>
      </div>
      <div className="bottom pt-3 pb-10 md:pb-15">
        <ul className="flex w-[90%]   mx-auto justify-between items-center flew-wrap"> 
          <li className="flex md:gap-1">
            <Image
              src="/images/bristol.png"
              alt="card1"
              width={50}
              height={50}
              className="w-20 h-10 md:w-50"
            />
          </li>
          <li>
            <Image
              src="/images/Vector4.png"
              alt="card1"
              width={50}
              height={10}
              className="md:w-25"
            />
          </li>
          <li className="bg-black/70 md:p-2 md:rounded-[60%]">
            <Image
              src="/images/vodaLogo.png"
              alt="card1"
              width={25}
              height={10}
              className="w-5 md:w-7"
            />
          </li>
          <li>
            <Image
              src="/images/nasa.png"
              alt="card1"
              width={25}
              height={10}
              className="w-8 md:w-15"
            />
          </li>
          <li>
            <Image
              src="/images/accenture.png"
              alt="card1"
              width={25}
              height={10}
              className="w-15 md:w-30"
            />
          </li>
          <li>
            <Image
              src="/images/db.png"
              alt="card1"
              width={25}
              height={10}
              className="w-8 md:w-15"
            />
          </li>
        </ul>
        <ul className="flex w-[90%] md:w-[80%]   mx-auto justify-between items-center mt-3 md:mt-8">
          <li>
          <Image
              src="/images/Vector.png"
              alt="card1"
              width={40}
              height={10}
              className="md:w-13"
            />
          </li>
          <li>
          <Image
              src="/images/moderna.png"
              alt="card1"
              width={40}
              height={10}
               className="w-13 h-7 md:w-25"
            />
          </li>
          <li className="flex">
          <Image
              src="/images/trelo.png"
              alt="card1"
              width={30}
              height={10}
               className="w-12 md:w-20"
            />  
          </li>
          <li>
          <Image
            src="/images/hp2.png"
            alt="card1"
            width={40}
            height={10}
             className="w-8 md:w-12"
          />
          </li>
          <li>
          <Image
            src="/images/wharton.png"
            alt="card1"
            width={40}
            height={10}
            className="w-15 md:w-25"
          />
          </li>
          <li>
          <Image
            src="/images/WB.png"
            alt="card1"
            width={40}
            height={10}
            className="w-8 md:w-12"
          />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Surveyed;
