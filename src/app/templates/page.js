"use client"
import React, { useState } from 'react';
 
import Website from "../components/Website";
import Webapp from "../components/Webapp";
import Social from "../components/Social";
import ChevronIcon from '../components/ChevronIcon';
import Tabs from '../components/Tabs';
const Cards = [
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/fetch-graphic-1-1024x728.png",
   
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/Graphic-final-1-1024x728.png",
   
  },
 
];
const Cards1 = [
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/12/Graphic-1-1024x728.jpg",
   
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/12/Graphic-1-1024x728.jpeg",
   
  },
  
];
const Cards2 = [
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/hyphen-Graphic-1-1024x728.png",
    
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/12/Graphic-3-1024x728.jpg",
   
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/hyphen-Graphic-1-1024x728.png",
   
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
    <div className="flex flex-col px-8  gap-8 w-full">
     <div className="md:flex flex-wrap w-full max-w-[1276px] items-center justify-between">
       <div className="py-20 px-10 gap-4 w-full justify-start flex flex-col">
         <h1 className="font-extrabold text-2xl leading-5 not-italic">
            Get a headstart with modern template designs
            </h1>
            <p>
            The template section has got you covered to launch your next big thing. You can experiment with pages in each template
            </p>
          </div>
          <div className="flex w-full justify-end lg:absolute top-[43px] right-16">
            <img src="/test.img/Group 1000003717.png" alt="img" />
          </div>
        </div>
        <div className="flex justify-between items-center  rounded-lg relative border border-[#e5e7eb]">
          <input  onChange={handleSearch}
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
              { title: "Admin Templates" },
              { title: "Ecommerce Templates" },
              { title: "Marketing Templates" },
            ]}
          />
          <div className="flex justify-end ">

        <ChevronIcon />
          </div>
        
        </div>
        
         {tab === 1 ? (
          <Website Cards={filtered} />
        ) : tab === 2 ? (
          <Webapp Cards={filtered} />
        ) : (
          <Social Cards={filtered} />
        )}
      </div>
    </div>
  );
};
export default Page;
