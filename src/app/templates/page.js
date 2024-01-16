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
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/fetch-graphic-1-1024x728.png",
   
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
    <div className="md:flex flex-col px-8  gap-8 w-full">
      <div className="md:flex justify-between items-center w-full">
        <div className="py-20 px-10 flex flex-col gap-4 w-full justify-start">
          <h1 className="font-bold text-2xl">
            Get a headstart with modern template designs
            </h1>
            <p>
            The template section has got you covered to launch your next big thing. You can experiment with pages in each template
            </p>
          </div>
          <div className="flex justify-end w-full right-0">
            <img src="/test.img/Group 1000003717.png" alt="img" />
          </div>
        </div>
        <div className="flex justify-between items-center shadow-lg px-4 py-10 relative">
          <input  onChange={handleSearch}
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm"
            placeholder="Search..."
            type="text"
            name="search"
          />
          <img src="/test.img/Vector.png" className="absolute right-7" alt="img"/>
         
        </div>
       
        <div className="md:flex  justify-between items-center shadow-lg px-4 py-4 gap-20">

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
