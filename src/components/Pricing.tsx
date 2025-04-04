import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div className="main  pb-10 md:pb-0 md:my-15">
      <div className="heading py-8 md:py-0">
        <h1 className="text-[#0F0E47] text-center text-3xl font-normal md:text-4xl">Simple, Transparent Pricing</h1>
      </div>
      <div className="time text-center md:pt-10 pb-8 ">
        <div className=" w-45 mx-auto bg-[#F3F4F6] py-2 px-3 rounded-lg">
        <button className="text-[#0F0E47] hover:bg-[#E5E7EB] py-2 px-3 rounded-xl mr-1">Monthly</button>
        <button className="text-[#0F0E47] hover:bg-[#E5E7EB] py-2 px-3 rounded-xl">Yearly</button>
        </div>
        
      </div>
      <div className="card-container flex flex-col gap-3       md:flex-row md:w-[80%] md:mx-auto">
        <PricingCard
          plan="Free Tier"
          price="$0"
          time="/mo"
          storage="5GB Storage"
          support="Basic Support"
          provider="1 Cloud Provider"
          button="Get Started"
          popular="false"
        />
        <PricingCard
          plan="Basic"
          price="$49"
          time="/mo"
          storage="5GB Storage"
          support="Basic Support"
          provider="1 Cloud Provider"
          button="Get Started"
          popular="true"
        />
        <PricingCard
          plan="Pro Plan"
          price="Custom"
          time=""
          storage="5GB Storage"
          support="Basic Support"
          provider="1 Cloud Provider"
          button="Get Started"
          popular="false"
        />
        <PricingCard
          plan="Pro Plan"
          price="Custom"
          time=""
          storage="5GB Storage"
          support="Basic Support"
          provider="1 Cloud Provider"
          button="Get Started"
          popular="false"
        />
      </div>
    </div>
  );
};

export default Pricing;
