import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface Que {
    que: string
    answer: string
}

const Questions = ({ que, answer }: Que) => {
    return (
        <div className="mx-auto 
            max-w-[768px] 
            w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%]
            bg-white 
            rounded-lg
            shadow-sm
            p-2 sm:p-3 md:p-4">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger 
                        className="text-[#0F0E47]
                        text-sm sm:text-base md:text-lg lg:text-xl
                        font-medium
                        hover:no-underline
                        px-3 sm:px-4 md:px-5
                        py-3 sm:py-4">
                        {que}
                    </AccordionTrigger>
                    <AccordionContent 
                        className="text-[#4B5563]
                        text-xs sm:text-sm md:text-base
                        leading-relaxed
                        px-3 sm:px-4 md:px-5
                        pb-3 sm:pb-4">
                        {answer}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default Questions;
