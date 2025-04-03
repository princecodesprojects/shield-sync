import React from "react";
import Questions from "./Questions";

const AskedQuestion = () => {
  return (
    <div className="main border bg-[#f4f6fa] py-8">
      <div className="headi my-5">
        <h1 className="text-[#0F0E47] text-center text-xl md:text-2xl md:font-medium">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="questions-container w-[90%] mx-auto flex flex-col gap-3">
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
    </div>
  );
};

export default AskedQuestion;
