import { processLinks } from "@/lib/constants";
import React from "react";
import ProcessCards from "./process-cards";

const Process = () => {
  return (
    <div className="max-w-7xl mx-auto p-3 ">
      <h1 className="text-center mx-auto text-4xl font-semibold">
        What{" "}
        <strong className="text-brand-color font-bold">RewardExpress</strong>{" "}
        Offers?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-24">
        {processLinks.map((item, idx) => (
          <ProcessCards
            Icon={<item.Icon className="w-5 h-5 text-zinc-400" />}
            text={item.text}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Process;
