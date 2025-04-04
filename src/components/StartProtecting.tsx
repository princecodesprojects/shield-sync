import { Button } from "@/components/ui/button";
import React from "react";

const StartProtecting: React.FC = () => {
  return (
    <section className="py-10 md:py-20 w-full max-w-[1440px] mx-auto">
      <div className="max-w-[1280px] mx-auto px-4 flex flex-col items-center justify-center text-center space-y-6">
        <h2 className="text-[36px] font-normal text-[#0f0e47] max-w-[680px] font-uxpilot-ai-inter-regular">
          Start Protecting Your Cloud Data Today
        </h2>

        <p className="text-gray-600 w-[95%]">
          Join thousands of SMBs who trust ShieldSync for their cloud backup
          needs
        </p>

        <Button className="bg-[#0f0e47] px-3  text-white h-13 md:h-[45px] w-[160px] md:w-[170px] rounded-lg text-lg md:font-light mt-4">
          Sign Up for Free
        </Button>
      </div>
    </section>
  );
};

export default StartProtecting;
