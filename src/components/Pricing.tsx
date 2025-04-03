import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div className="main       pb-10">
      <div className="heading py-5">
        <h1 className="text-[#0F0E47] text-center text-2xl font-medium md:text3xl">Simple, Transparent Pricing</h1>
      </div>
      <div className="time text-center pt-1 pb-5">
        <button className="text-[#0F0E47] bg-gray-300 py-2 px-3 rounded-xl mr-1">Monthly</button>
        <button className="text-[#0F0E47] bg-gray-300 py-2 px-3 rounded-xl">Yearly</button>
      </div>
      <div className="card-container flex flex-col gap-3       md:flex-row md:w-[80%] md:mx-auto">
        <PricingCard
          plan="Free Tier"
          price="$0"
          storage="5GB Storage"
          support="Basic Support"
          provider="1 Cloud Provider"
          button="Get Started"
          popular="false"
        />
        <PricingCard
          plan="Free Tier"
          price="$0"
          storage="5GB Storage"
          support="Basic Support"
          provider="1 Cloud Provider"
          button="Get Started"
          popular="true"
        />
        <PricingCard
          plan="Free Tier"
          price="$0"
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
