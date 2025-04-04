"use client";


import React, { useState } from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {

const monthly=[
  {
    price:"$5",
    plan:"Free Tier",
    time:"/mo",
    storage:"5GB Storage",
    support:"Basic Support",
    provider:"1 Cloud Provider",
    button:"Get Started",
    popular:"false"
  },
  {
    price:"$15",
    plan:"Basic",
    time:"/mo",
    storage:"5GB Storage",
    support:"Basic Support",
    provider:"1 Cloud Provider",
    button:"Get Started",
    popular:"false"
  },
  {
    price:"$24",
    plan:"Pro Plan",
    time:"/mo",
    storage:"5GB Storage",
    support:"Basic Support",
    provider:"1 Cloud Provider",
    button:"Get Started",
    popular:"false"
  },
  {
    price:"$39",
    plan:"MSP Plan",
    time:"/mo",
    storage:"5GB Storage",
    support:"Basic Support",
    provider:"1 Cloud Provider",
    button:"Get Started",
    popular:"false"
  }
]

const yearly=[
  {
    price:"$55",
    plan:"Free Tier",
    time:"/yr",
    storage:"5GB Storage",
    support:"Basic Support",
    provider:"1 Cloud Provider",
    button:"Get Started",
    popular:"false"
  },
  {
    price:"$125",
    plan:"Basic",
    time:"/yr",
    storage:"5GB Storage",
    support:"Basic Support",
    provider:"1 Cloud Provider",
    button:"Get Started",
    popular:"false"
  },
  {
    price:"$324",
    plan:"Pro Plan",
    time:"/yr",
    storage:"5GB Storage",
    support:"Basic Support",
    provider:"1 Cloud Provider",
    button:"Get Started",
    popular:"false"
  },
  {
    price:"$390",
    plan:"MSP Plan",
    time:"/yr",
    storage:"5GB Storage",
    support:"Basic Support",
    provider:"1 Cloud Provider",
    button:"Get Started",
    popular:"false"
  }
]






  const [isMonthly, setIsMonthly] = useState(true);



  return (
    <div className="main pb-10 md:pb-0 md:my-15">
      <div className="heading py-8 md:py-0">
        <h1 className="text-[#0F0E47] text-center text-3xl font-normal md:text-4xl">
          Simple, Transparent Pricing
        </h1>
      </div>
      <div className="time text-center md:pt-10 pb-8">
        <div className="w-45 mx-auto bg-[#F3F4F6] py-2 px-3 rounded-lg">
          <button 
            onClick={() => setIsMonthly(true)}
            className={`py-2 px-3 rounded-xl mr-1 transition-colors
              ${isMonthly 
                ? 'bg-[#0F0E47] text-white' 
                : 'bg-[#E5E7EB] text-[#0F0E47]'
              }`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setIsMonthly(false)}
            className={`py-2 px-3 rounded-xl transition-colors
              ${!isMonthly 
                ? 'bg-[#0F0E47] text-white' 
                : 'bg-[#E5E7EB] text-[#0F0E47]'
              }`}
          >
            Yearly
          </button>
        </div>
      </div>
     
      <div className="card-container flex flex-col gap-3       md:flex-row md:w-[80%] md:mx-auto">

        {isMonthly ? (
          monthly.map((item, index) => (
            <PricingCard
              key={index}
              plan={item.plan}
              price={item.price}
              time={item.time}
              storage={item.storage}
              support={item.support}
              provider={item.provider}
              button={item.button}
              popular={item.popular}
            />
          ))
        ) : (
          yearly.map((item, index) => (
            <PricingCard
              key={index}
              plan={item.plan}
              price={item.price}
              time={item.time}
              storage={item.storage}
              support={item.support}
              provider={item.provider}
              button={item.button}
              popular={item.popular}
            />
          ))
        )}
        {/* <PricingCard
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
        /> */}
        {/* <PricingCard
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
        /> */}
      </div>
    </div>
  );
};

export default Pricing;
