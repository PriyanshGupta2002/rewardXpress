import React, { FC } from "react";
import { DownloadBtnTypes } from "../../../types";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const DownloadBtn: FC<DownloadBtnTypes> = ({
  provider,
  appLink,
  text,
  svgLink,
}) => {
  return (
    <Link href={appLink}>
      <div className="flex items-center gap-3 cursor-pointer bg-gray-200 shadow-sm w-[250px] justify-center py-2 px-4 rounded-lg">
        <div>
          <Image src={svgLink} alt={provider} height={60} width={60} />
        </div>
        <div className={cn(poppins.className, "flex flex-col ")}>
          <span className="font-semibold text-sm">{text}</span>
          <span className="text-2xl font-bold">{provider}</span>
        </div>
      </div>
    </Link>
  );
};

export default DownloadBtn;
