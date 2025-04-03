import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  interface Que{
    que:string
    answer:string
  }
  

const Questions = ({que,answer}:Que) => {
  return (
    <div className="mx-auto max-w-[768px] bg-white w-[90%] rounded-lg">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-[#0F0E47]">{que}<span className="text-black"></span></AccordionTrigger>
          <AccordionContent className="text-[#4B5563]">
           {answer}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Questions;
