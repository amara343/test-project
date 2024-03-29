"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import ChevronIcon from "../components/ChevronIcon";
import Tabs from "../components/Tabs";


const Home = () => {
  const [tab, setTab] = useState(1);
  const pathname = usePathname();
  console.log({ pathname });
  return (
    <div className="">
      <div className="flex flex-col px-8  gap-8">
        <div className="md:flex w-full ">
          <div className="py-10 px-32 gap-4  w-full max-w-[757px] flex flex-col">
            <h1 className="font-bold text-2xl">
              Ever growing library of copy/paste figma components
            </h1>
            <p>
              Welcome to Figit Library! you can literally copy anything and it
              will work. Everything on your fingertips for your next project and
              it’s free
            </p>
          </div>
          <div className="flex justify-end w-full">
            <img src="/test.img/Group 6609 1.png" alt="img" />
          </div>
        </div>
        <div className="flex justify-between items-center shadow-lg px-4 py-4 relative">
          <input
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm"
            placeholder="Search..."
            type="text"
            name="search"
          />
          <img
            src="/test.img/Vector.png"
            className="absolute right-7"
            alt="img"
          />
        </div>
        <div className="md:flex justify-between items-center shadow-lg px-4 py-4">
          <Tabs
            tab={tab}
            setTab={setTab}
            tabs={[
              { title: "Web page" },
              { title: "Marketing" },
              { title: "Ecommerce" },
            ]}
          />
          <div className="flex justify-end ">
            <ChevronIcon />
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Home;
