import React from "react";
import KeyFeatureCard from "./KeyFeatureCard";

const KeyFeatures = () => {
  return (
    <div className="bg-[#E5E7EB]">
      <div className="top py-10">
        <h1 className="text-[#0F0E47] text-2xl text-center">Key Features</h1>
      </div>
      <div className="bottom md:w-[80%]  flex flex-col gap-3 items-center pb-10 md:flex-row md:mx-auto md:justify-center">
        <KeyFeatureCard
          logo="/images/upload.png"
          heading="Automated Cloud Backups"
          para="Schedule and manage backups for AWS S3,Azure Blob & GCP Storage"
          size=""
        />
        <KeyFeatureCard
          logo="/images/lock.png"
          heading="Immutable & Encrypted Storage"
          para="Prevent ransomware attacks with AES-256 encryption"
          size="md:w-5"
        />
        <KeyFeatureCard
          logo="/images/reload.png"
          heading="One-Click Data Recovery"
          para="Instantly restore files and folders from cloud backups"
          size="md:w-5"
        />
      </div>
    </div>
  );
};

export default KeyFeatures;
