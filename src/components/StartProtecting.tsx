import { Button } from "@/components/ui/button";
import React from "react";

const StartProtecting: React.FC = () => {
  return (
    <section className="py-15 md:py-20 w-full max-w-[1440px] mx-auto">
      <div className="max-w-[1280px] mx-auto px-4 flex flex-col items-center justify-center text-center space-y-6">
        <h2 className="text-[36px] font-normal text-[#0f0e47] max-w-[680px] font-uxpilot-ai-inter-regular">
          Start Protecting Your Cloud Data Today
        </h2>

        <p className="text-gray-600 max-w-[711px] font-inter">
          Join thousands of SMBs who trust ShieldSync for their cloud backup
          needs
        </p>

        <Button className="bg-[#0f0e47] text-white h-10 md:h-[50px] w-[140px] md:w-[180px] rounded-lg text-lg font-normal font-['Inter-Regular',Helvetica] mt-4">
          Sign Up for Free
        </Button>
      </div>
    </section>
  );
};

export default StartProtecting;
