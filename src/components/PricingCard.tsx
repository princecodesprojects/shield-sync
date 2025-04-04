import React from "react";
import Image from "next/image";

interface Props {
  plan: string;
  price: string;
  storage: string;
  support: string;
  provider: string;
  button: string;
  popular: string;
  time: string;
}

const PricingCard = ({
  plan,
  price,
  storage,
  support,
  provider,
  button,
  popular,
  time
}: Props) => {
  return (
    <div className="relative 
      w-[90%] sm:w-[85%] md:w-[80%] lg:w-[95%]
      min-h-[300px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[280px] xl:min-h-[300px] // Reduced by 30%
      mx-auto 
      flex flex-col justify-center items-center 
      border rounded-lg 
      transition-all duration-300
      hover:bg-[#8686AC] group">
      
      {popular === "true" && (
        <div className="absolute top-0 right-0 
          bg-[#0F0E47] text-white 
          text-xs sm:text-sm 
          px-3 py-1.5 
          rounded-tr-lg rounded-bl-lg">
          Popular
        </div>
      )}

      <div className="w-[90%] h-full py-6 sm:py-8 md:py-10 lg:py-6 xl:py-7 // Adjusted padding
        px-4 sm:px-5 md:px-6">
        <h2 className="text-[#0F0E47] group-hover:text-white 
          text-sm sm:text-base md:text-lg lg:text-xl
          font-medium mb-3 sm:mb-4 lg:mb-2 // Reduced margin
          transition-colors">
          {plan}
        </h2>

        <div className="price-section mb-6 sm:mb-8 lg:mb-4 xl:mb-5"> 
          <h1 className="text-[#0F0E47] group-hover:text-white 
            text-2xl sm:text-3xl md:text-2xl lg:text-3xl 
            font-meduim transition-colors">
            {price}
            <span className="text-lg sm:text-xl md:text-xl ml-1">{time}</span>
          </h1>
        </div>

        <div className="features space-y-3 sm:space-y-4 lg:space-y-2 xl:space-y-3">
          {[storage, support, provider].map((feature, index) => (
            <div key={index} 
              className="flex items-center gap-3 
              text-[#0F0E47] group-hover:text-white 
              transition-colors">
              <Image
                src="/images/tick.png"
                width={16}
                height={16}
                alt="checkmark"
                className="w-4 sm:w-5"
              />
              <span className="text-sm sm:text-base md:text-lg">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <button className="w-full 
          bg-[#0F0E47] text-white 
          text-sm sm:text-base
          py-2.5 sm:py-3 md:py-3.5 lg:py-2.5 xl:py-3 // Adjusted padding
          rounded-lg 
          mt-6 sm:mt-8 md:mt-10 lg:mt-6 xl:mt-7 // Reduced margin
          transition-all duration-300
          hover:bg-[#1a1959]">
          {button}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
