"use client"
import React, { useState } from 'react';
 
import Website from "../components/Website";
import Webapp from "../components/Webapp";
import Social from "../components/Social";
import ChevronIcon from '../components/ChevronIcon';
import Tabs from '../components/Tabs';
const Cards = [
  {
    img: "/test.img/image 16.png",
    para: "Page 1 ( Homepage )",
    icon: "/test.img/Frame.png",
    button: "Copy to clipboard",
  },
  {
    img: "/test.img/image 16.png",
    para: "Page 2 ( About us )",
    icon: "/test.img/Frame.png",
    button: "Copy to clipboard",
  },
  {
    img: "/test.img/image 16.png",
    para: "Page 3 ( FAQ )",
    icon: "/test.img/Frame.png",
    button: "Copy to clipboard",
  },
];
const Cards1 = [
  {
    img: "/test.img/image 16.png",
    para: "Page 1 ( Homepage )",
    icon: "/test.img/Frame.png",
    button: "Copy to clipboard",
  },
  {
    img: "/test.img/image 16.png",
    para: "Page 2 ( About us )",
    icon: "/test.img/Frame.png",
    button: "Copy to clipboard",
  },
  {
    img: "/test.img/image 16.png",
    para: "Page 3 ( FAQ )",
    icon: "/test.img/Frame.png",
    button: "Copy to clipboard",
  },
];
const Cards2 = [
  {
    img: "/test.img/image 16.png",
    para: "Page 1 ( Homepage )",
    icon: "/test.img/Frame.png",
    button: "Copy to clipboard",
  },
  {
    img: "/test.img/image 16.png",
    para: "Page 2 ( About us )",
    icon: "/test.img/Frame.png",
    button: "Copy to clipboard",
  },
  {
    img: "/test.img/image 16.png",
    para: "Page 3 ( FAQ )",
    icon: "/test.img/Frame.png",
    button: "Copy to clipboard",
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
      <div className="flex flex-col py-16 px-8  gap-8">
        <div className="md:flex flex-wrap justify-between ">
          <div className="py-10 px-10  w-full max-w-[757px] flex flex-col justify-center gap-4">
            <h1 className="font-bold text-2xl">
            Get a headstart with modern template designs
            </h1>
            <p>
            The template section has got you covered to launch your next big thing. You can experiment with pages in each template
            </p>
          </div>
          <div>
            <img src="/test.img/Group 1000003717.png" alt="img" />
          </div>
        </div>
        <div className="flex justify-between items-center shadow-lg px-4 py-4 relative">
          <input  onChange={handleSearch}
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm"
            placeholder="Search..."
            type="text"
            name="search"
          />
          <img src="/test.img/Vector.png" className="absolute right-7" alt="img"/>
         
        </div>
       
        <div className="flex justify-between items-center shadow-lg px-4 py-4">

        <Tabs
             tab={tab}
             setTab={(tab) => {
               setfiltered(tab === 1 ? Cards : tab === 2 ? Cards1 : Cards2);
               setTab(tab);
             }}
            tabs={[
              { title: " Website Templates" },
              { title: "Webapp Templates" },
              { title: "Social Media Templates" },
            ]}
          />
        <ChevronIcon />
        
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
