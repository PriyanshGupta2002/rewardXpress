"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FC } from "react";
import { FAQAccordionProps } from "../../../types";
const FAQAccordion: FC<FAQAccordionProps> = ({ faq }) => {
  return (
    <div className="container mx-auto p-3">
      <Accordion type="single" collapsible>
        {faq?.map((item, idx) => (
          <AccordionItem value={item.question} key={idx}>
            <AccordionTrigger className="text-neutral-500 font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-neutral-500 font-semibold">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
