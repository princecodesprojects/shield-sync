import React from "react";
import CustomerCards from "./CustomerCards";

const CustumerSays = () => {
  return (
    <div className="main bg-gray-300 pb-10 ">
      <div className="heading pt-5">
        <h1 className="text-center text-[#0f0e47] text-2xl font-medium my-8 md:text-3xl">
          What Our Customers Say
        </h1>
      </div>
      <div className="cards-container     flex flex-col gap-3 md:flex-row md:w-[80%] mx-auto">
        <CustomerCards
          name="John Smith"
          profile="IT Director, TechCorp"
          about="ShieldSync has simplified our backup strategy across multiple cloud providers. It\'s reliable and cost-effective."
          image=""
        />
         <CustomerCards
          name="John Smith"
          profile="IT Director, TechCorp"
          about="ShieldSync has simplified our backup strategy across multiple cloud providers. It\'s reliable and cost-effective."
          image=""
        />
         <CustomerCards
          name="John Smith"
          profile="IT Director, TechCorp"
          about="ShieldSync has simplified our backup strategy across multiple cloud providers. It\'s reliable and cost-effective."
          image=""
        />
      </div>
    </div>
  );
};

export default CustumerSays;
