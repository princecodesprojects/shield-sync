import React from "react";
import Questions from "./Questions";

const AskedQuestion = () => {
  return (
    <section className="bg-[#f4f6fa] 
      py-8 sm:py-12 md:py-16 lg:py-20
      px-4 sm:px-6 md:px-8 lg:px-10">
      
      {/* Heading */}
      <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <h1 className="text-[#0F0E47] text-center text-2xl md:text-3xl font-normal">
          Frequently Asked Questions
        </h1>
      </div>

      {/* Questions Container */}
      <div className="max-w-[1200px] mx-auto
        w-full sm:w-[90%] md:w-[85%] lg:w-[80%]
        flex flex-col 
        gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        <Questions
          que="How does ShieldSync secure my backups?"
          answer="We use AES-256 encryption and immutable storage to ensure your backups are completely secure and protected against ransomware attacks."
        />
        <Questions
          que="Can I restore files instantly?"
          answer="We use AES-256 encryption and immutable storage to ensure your backups are completely secure and protected against ransomware attacks."
        />
        <Questions
          que="What happens if I exceed my storage?"
          answer="We use AES-256 encryption and immutable storage to ensure your backups are completely secure and protected against ransomware attacks."
        />
      </div>
    </section>
  );
};

export default AskedQuestion;
