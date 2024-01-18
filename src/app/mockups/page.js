"use client";
import Link from "next/link";
import React, { useState } from "react";
import ChevronIcon from "../components/ChevronIcon";
import Tabs from "../components/Tabs";
import Devices from "../components/Devices";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
const Cards = [
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/11/mobile-mockup-6-500x375.jpg",
  },
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/11/desktop-mockup-3-500x375.jpg",
  },
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/11/desktop-mockup-3-500x375.jpg",
  },
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/11/mobile-mockup-6-500x375.jpg",
  },
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/11/mobile-mockup-6-500x375.jpg",
  },
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/11/mobile-mockup-6-500x375.jpg",
  },
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/11/mobile-mockup-2-500x375.jpg",
  },
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/11/desktop-mockup-1-500x375.jpg"
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/mobile-mockup-1-1-500x375.jpg",
     
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/mobile-mockup-10-500x375.jpg",
     
  },
 
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/11/mobile-mockup-2-500x375.jpg",
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/desktop-mockup-5-500x281.jpg",
   
  }, {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/mobile-mockup-12-500x375.jpg",
   
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/mobile-mockup-10-500x375.jpg",
     
  },
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/11/desktop-mockup-1-500x375.jpg"
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/mobile-mockup-1-1-500x375.jpg",
     
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/mobile-mockup-10-500x375.jpg",
     
  },
 
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/11/mobile-mockup-2-500x375.jpg",
  },
];
const Cards1 = [
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/11/Hero-Mockup-17-500x435.jpg",
  },
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/11/hero-mockup-10-500x375.jpg",
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/hero-mockup-3-768x601.jpg",
   
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/hero-mockup-2-500x251.jpg",
   
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/hero-mockup-2-500x251.jpg",
   
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/hero-mockup-14-500x388.jpg",
   
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/hero-mockup-3-768x601.jpg",
   
  },

  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/hero-mockup-3-768x601.jpg",
   
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/hero-mockup-11-768x546.jpg",
    
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/hero-mockup-7-768x615.jpg ",
    
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/hero-mockup-2-500x251.jpg",
   
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/hero-mockup-2-500x251.jpg",
   
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/hero-mockup-2-500x251.jpg",
   
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/hero-mockup-14-500x388.jpg",
   
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/hero-mockup-3-768x601.jpg",
   
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/hero-mockup-7-768x615.jpg ",
    
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/hero-mockup-2-500x251.jpg",
   
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/hero-mockup-2-500x251.jpg",
   
  },
];
const Cards2= [
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/11/Portfolio-Mockup-4-500x375.jpg",
  },
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/11/hero-mockup-11-500x356.jpg"
  },
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/11/mobile-mockup-10-500x375.jpg"
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/mobile-mockup-1-1-768x576.jpg",
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/Hero-Mockup-20-500x435.jpg",
  },
 
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/mobile-mockup-8-768x576.jpg",
  },
 
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/mobile-mockup-9-768x576.jpg ",
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/mobile-mockup-9-768x576.jpg ",
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/Hero-Mockup-20-500x435.jpg",
  },
   {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/tablet-mockup-3-768x576.jpg",
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/mobile-mockup-9-768x576.jpg ",
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/Hero-Mockup-20-500x435.jpg",
  },
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/11/Portfolio-Mockup-12-768x576.jpg",
  },
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/11/Portfolio-Mockup-11-768x668.jpg",
  },
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/11/hero-mockup-1-768x456.jpg",
  },
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/11/hero-mockup-1-768x456.jpg",
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/tablet-mockup-3-768x576.jpg",
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/mobile-mockup-9-768x576.jpg ",
  },
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/11/hero-mockup-11-500x356.jpg"
  },
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/11/mobile-mockup-10-500x375.jpg"
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/mobile-mockup-1-1-768x576.jpg",
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/Hero-Mockup-20-500x435.jpg",
  },
 
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/mobile-mockup-8-768x576.jpg",
  },

];

const Page = () => {
  const [tab, setTab] = useState(0);
  const [filtered, setfiltered] = useState(
    tab === 1 ? Cards : tab === 2 ? Cards1 : Cards2
  );
  const handleSearch = (e) => {
    let query = e.target.value;
    let filtered = (tab === 1 ? Cards : tab === 2 ? Cards1 : Cards2).filter(
      (user) => user.img.includes(query)
    );
    setfiltered(filtered);
  };
  return (
    <div className="flex justify-center ">
      <div className="md:flex flex-col  px-8 w-full gap-8">
        <div className="md:flex flex-row justify-between w-full">
          <div className="py-10 px-10  w-full flex flex-col gap-4 justify-center">
            <h1 className="font-bold text-2xl">
            Present your creations like a boss
            </h1>
            <p>
            Organize Figma files with cover designs, present on Dribbble like a pro, impress your viewer with mockup on Behnace
            </p>
          </div>
          <div className="flex w-full justify-end lg:absolute top-[43px] right-16">
            <img src="https://figmalibrary.com/wp-content/themes/figmalib/images/mockups-page.svg" alt="img" />
          </div>
        </div>
        <div className="flex justify-between items-center shadow-lg px-4 py-4 relative">
          <input onChange={handleSearch}
            class="placeholder: placeholder:text-[#6b7280] block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm"
            placeholder="Search..."
            type="text"
            name="search"
            className="py-4 px-4 w-full rounded-lg"
          />
          <img src="/test.img/Vector.png" className="absolute right-7" alt="img"/>
         
        </div>
        <div className="md:flex text-sm text-[#6b7280] justify-between gap-20">
          <Tabs
            tab={tab}
            setTab={(tab) => {
              setfiltered(tab === 1 ? Cards : tab === 2 ? Cards1 : Cards2);
              setTab(tab);
            }}
            tabs={[
              { title: "Devices" },
              { title: "Hero" },
              { title: "Portfolio" },
            ]}
          />
           <div className="flex justify-end ">

<ChevronIcon />
  </div>
        </div>
        {tab === 1 ? (<Devices  Cards={filtered}/>) : tab === 2 ?( <Hero  Cards={filtered}/>) : (<Portfolio  Cards={filtered} />)}
      </div>
    </div>
  );
};

export default Page;
