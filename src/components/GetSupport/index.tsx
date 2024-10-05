import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabData } from "@/lib/constants";
import FAQAccordion from "./faq";

const FAQ = () => {
  return (
    <div className="w-full max-w-6xl m-auto p-3">
      <Tabs defaultValue={tabData[0].tabValue}>
        <TabsList>
          {tabData.map((item, idx) => (
            <TabsTrigger value={item.tabValue} key={`${idx}-${item.tabValue}`}>
              {item.tabName}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabData.map((item, idx) => (
          <TabsContent value={item.tabValue} key={idx}>
            <FAQAccordion faq={item.faq} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default FAQ;
