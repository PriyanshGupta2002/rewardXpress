"use client";
import Image from "next/image";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navMenuItems } from "@/lib/constants";
import { Menu } from "lucide-react";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="max-w-7xl m-auto pt-3 px-3 xl:px-0 items-center flex justify-between">
      {/* <span className="w-[100px] flex items-center justify-center text-sm h-[30px] rounded-lg bg-neutral-200">
        100 X 30
      </span> */}
      <Link href={"/"}>
        {" "}
        <span className="flex items-center gap-1  font-bold">
          <Image src={"/assets/logo.png"} alt="" width={60} height={30} />

          <h3 className={`${montserrat.className} text-2xl text-brand-color`}>
            RewardExpress
          </h3>
        </span>
      </Link>

      <span className="cursor-pointer lg:hidden">
        <Menu className="h-5 w-5 text-zinc-400 font-semibold" />
      </span>
      <div className="hidden lg:flex items-center gap-3">
        <NavigationMenu>
          <NavigationMenuList>
            {navMenuItems.map((item) => (
              <NavigationMenuItem key={item.link}>
                <Link href={item.link} legacyBehavior passHref>
                  <NavigationMenuLink
                    active={pathName.includes(item.link)}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
