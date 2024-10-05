import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Montserrat } from "next/font/google";
import { donwloadLinks, footerLinks } from "@/lib/constants";
import DownloadBtn from "../Hero/download-btn";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  const date = new Date();
  return (
    <div className="p-4 bg-brand-secodary">
      <div className="max-w-6xl m-auto flex justify-evenly items-center">
        <div className="space-y-1">
          <Link href={"/"}>
            {" "}
            <span className="flex items-center gap-1  font-bold">
              <Image src={"/assets/logo.png"} alt="" width={60} height={30} />

              <h3
                className={`${montserrat.className} text-2xl text-brand-color`}
              >
                RewardXpress
              </h3>
            </span>
          </Link>
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
        <div className="space-y-2 flex flex-col">
          {footerLinks.map((item, idx) => (
            <Link
              className="text-base hover:text-brand-color transition-all ease-in-out text-neutral-500 font-semibold"
              href={item.url}
              key={idx}
            >
              {item.name}
            </Link>
          ))}

          <span className="flex items-center  font-bold">
            <h3 className={`text-base text-brand-color`}>
              RewardXpress {date.getFullYear()}{" "}
            </h3>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
