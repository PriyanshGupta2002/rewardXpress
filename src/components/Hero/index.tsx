import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

import DownloadBtn from "./download-btn";
import { donwloadLinks } from "@/lib/constants";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto grid bg-stone-100 px-8 rounded-lg grid-cols-1  lg:grid-cols-2 items-center">
      <div className="space-y-6">
        <div
          className={cn(
            montserrat.className,
            "text-7xl text-zinc-800 font-bold"
          )}
        >
          Earn Money by answering surveys
        </div>
        <div className="flex items-center gap-5">
          {donwloadLinks.map((item, idx) => (
            <DownloadBtn
              key={idx}
              appLink={item.appLink}
              provider={item.provider}
              svgLink={item.svgLink}
              text={item.text}
            />
          ))}
        </div>
      </div>
      <div className="ml-auto animate-float">
        <Image src={"/assets/hero.svg"} width={500} height={200} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
