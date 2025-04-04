import { Button } from "@/components/ui/button";
import React from "react";

const StartProtecting: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 
      w-full max-w-[1440px] mx-auto">
      <div className="max-w-[1280px] mx-auto 
        px-4 sm:px-6 md:px-8 lg:px-10
        flex flex-col items-center justify-center 
        text-center 
        space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
        
        <h2 className="text-[#0f0e47] 
          text-2xl sm:text-3xl md:text-4xl lg:text-[36px]
          font-normal 
          max-w-[680px] 
          leading-tight sm:leading-tight md:leading-tight
          font-uxpilot-ai-inter-regular">
          Start Protecting Your Cloud Data Today
        </h2>

        <p className="text-gray-600 
          text-sm sm:text-base md:text-lg
          w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%]
          max-w-[560px]">
          Join thousands of SMBs who trust ShieldSync for their cloud backup needs
        </p>

        <Button className="bg-[#0f0e47] 
          px-3 sm:px-4 md:px-5
          text-white 
          h-11 sm:h-12 md:h-13 lg:h-[45px]
          w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px]
          rounded-lg 
          text-base sm:text-lg
          font-normal md:font-light 
          mt-2 sm:mt-3 md:mt-4
          transition-all duration-300
          hover:bg-[#1a1959]">
          Sign Up for Free
        </Button>
      </div>
    </section>
  );
};

export default StartProtecting;
