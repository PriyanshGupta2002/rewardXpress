import React from "react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { summary } from "@/lib/constants";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});
const Hero = () => {
  return (
    <div
      className={cn(
        montserrat.className,
        "max-w-6xl  m-auto p-4 grid grid-cols-2 mt-7 items-center rounded-lg"
      )}
    >
      <div className="relative aspect-square">
        <Image
          src={"/assets/referral.svg"}
          className="object-cover"
          alt="Referral"
          fill
        />
      </div>
      <div className={cn("flex flex-col gap-1 space-y-4  text-neutral-500")}>
        <h2 className={"text-4xl font-bold "}>Invite &amp; Earn</h2>
        <p className="text-2xl font-medium">
          You get 10% of their survey earnings for a lifetime.
        </p>

        <div className="flex flex-col gap-7">
          {summary.map((item, idx) => (
            <div
              className="flex items-center gap-2 text-lg font-medium text-pretty"
              key={idx}
            >
              <Image
                src={"/assets/check.svg"}
                alt="check"
                width={20}
                height={20}
              />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
