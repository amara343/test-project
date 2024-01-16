"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";
const Sidebar = () => {
  const Icons = [
    { image: "/test.img/grid.svg", href: "/components", title: "Components" },
    {
      image: "/test.img/documents.svg",
      href: "/templates",
      title: "Templates",
    },
    { image: "/test.img/shapes.svg", href: "/icons", title: "Icons" },
    {
      image: "/test.img/monitor-mobbile.png",
      href: "/mockups",
      title: "Mockups",
    },
    { image: "/test.img/edit-2.png", href: "/content", title: "Content" },
  ];
  const pathname = usePathname();
  console.log({ pathname });
 
  return (
    <div className="sm:flex hidden side left-20  flex-col gap-10  py-20 ">
      <div className="flex fixed flex-col gap-4 justify-center items-center">
        <img src="/test.img/Group 812382.png" alt="img" />
        <h1 className="font-bold text-sm">Figma Library</h1>
        <p className="font-normal text-xs py-2">DESIGN 10X FASTER</p>
      </div>
    
           
          
      <div className="flex py-40 fixed flex-col gap-4 dalay-100">
        {Icons.map((items) => (
          <div className="   ">
            <Link
              href={items.href}
              className={`flex flex-col justify-center w-full ${
                items.href === pathname
                  ? "bg-black text-white rounded-md"
                  : "hover:bg-gray-200"
              }  flex flex-col   hover:rounded-md delay-400  items-center   rounded-lg py-4 px-2 duration-300`}
            >
              <>
                <img src={items.image} /> {items.title}
              </>
            </Link>
          </div>
        ))}
      
      </div>
      
    </div>
  );
};

export default Sidebar;
