"use client"
import React, { useState } from 'react';
 
import Website from "../components/Website";
import Webapp from "../components/Webapp";
import Social from "../components/Social";
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
    img: "https://figmalibrary.com/wp-content/uploads/2022/12/Graphic-1-1024x728.jpeg", logo:"	https://figmalibrary.com/wp-content/uploads/Union.svg", heading:"PRO"
   
  },
  
];
const Cards2 = [
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/Graphic-final-1-1024x728.png",
   
  },
   {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/fetch-graphic-1-1024x728.png",
   
  },
  
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/11/hyphen-Graphic-1-1024x728.png", 
    
  },
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/12/Graphic-1-2048x1456.jpg",
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/12/Graphic-3-1024x728.jpg",
   
  },
  {
    img:"https://figmalibrary.com/wp-content/uploads/2022/12/Graphic-1-2048x1456.jpeg",logo:"	https://figmalibrary.com/wp-content/uploads/Union.svg", heading:"PRO"
  },
  {
    img: "https://figmalibrary.com/wp-content/uploads/2022/12/Krew-Marketing-Template-1024x728.jpg",  logo:"	https://figmalibrary.com/wp-content/uploads/Union.svg", heading:"PRO"
   
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
    <div className="flex flex-col px-6  gap-8">
     <div className="md:flex flex-wrap max-w-[1427px] items-center gap-x-6  justify-between ">
       <div className="pt-20 pb-16 px-16 gap-5 justify-start flex flex-wrap">
         <h1 className="font-bold text-2xl leading-5 not-italic">
            Get a headstart with modern template designs
            </h1>
            <p>
            The template section has got you covered to launch your next big thing. You can experiment with pages in each template
            </p>
          </div>
          <div className="flex w-full justify-end lg:absolute top-[70px] right-16">
            <img src="/test.img/Group 1000003717.png" alt="img" />
          </div>
        </div>
        <div className="flex justify-between items-center  rounded-lg relative border border-[#e5e7eb]">
          <input  onChange={handleSearch}
            class="placeholder: placeholder:text-[#6b7280] block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-xs font-medium"
            placeholder="Search..."
            type="text"
            name="search"
            className="py-3 px-4 w-full rounded-lg"
          />
          <img src="/test.img/Vector.png" className="absolute right-7" alt="img"/>
         
        </div>
       
        <div className="md:flex text-sm text-[#6b7280] justify-between items-center gap-20 ">

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
          {/* <div className="flex justify-end ">

        <ChevronIcon />
          </div> */}
        
        </div>
        {/* <div>
          {image.map((user)=>{
            <div>
              <img src={user.img}/>
            </div>
          }
          )}
        </div>
         */}
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
