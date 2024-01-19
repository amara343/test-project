"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";
const Sidebar = () => {
  const Icons = [
    { image: "https://figmalibrary.com/wp-content/uploads/2022/10/grid-2.svg", href: "/components", title: "Components" },
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
    <div className="sm:flex hidden z-50 side left-20 pt-2 flex-col gap-12 pl-4 justify-between align-center ">
     <div className=" flex justify-start"> <div className="flex fixed flex-col py-4 justify-center items-center ">
        <img src="https://figmalibrary.com/wp-content/themes/figmalib/images/logo2.svg" alt="img" />
       
      </div>
    
           
          
      <div className="flex pt-32 fixed flex-col  dalay-100 p-4 h-full px-4">
        {Icons.map((items) => (
          <div className="  ">
            <Link
              href={items.href}
              className={`flex flex-col justify-center gap-3 w-full ${
                items.href === pathname
                  ? "bg-black text-white rounded-md"
                  : "hover:bg-gray-200"
              }  flex flex-col   hover:rounded-md delay-400  items-center   rounded-lg py-4 px-2 duration-300`}
            >
              <>
                <img src={items.image} /> <p className="font-normal text-xs">{items.title}</p>
              </>
            </Link>
          </div>
        ))}
      
      </div>
      </div>
      {/* <div className='fixed md:bg-black md:text-white bg-transparent text-white flex'>
        <button className="flex justify-end">Login</button>
    </div> */}
      
    </div>
  );
};

export default Sidebar;
