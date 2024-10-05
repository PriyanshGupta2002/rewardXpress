import React, { FC } from "react";
import { ProcessCardsProps } from "../../../types";

const ProcessCards: FC<ProcessCardsProps> = ({ Icon, text }) => {
  return (
    <div className="py-10 mt-14 sm:mt-11 md:last:mt-10 lg:mt-0 lg:last:mt-0 flex items-center justify-center px-5 h-40 rounded-md  relative text-base bg-slate-300/25 font-medium">
      {/* Semi-circle div */}
      <div className="h-10  w-16 rounded-t-full flex items-center justify-center bg-slate-300/25 absolute -top-10">
        {Icon}
      </div>
      <span className="text-base font-bold  text-neutral-500">{text}</span>
    </div>
  );
};

export default ProcessCards;
