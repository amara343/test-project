"use client";
import Link from "next/link";
import React, { useState } from "react";
import Tabs from "./Tabs";
import WebPage from "./WebPage";
import Marketing from "./Marketing";
import Ecommerce from "./Ecommerce";
import ChevronIcon from "./ChevronIcon";
const Cards = [
  { image: "/test.img/CTA 02.png", title: "copy to clipboard"},
  { image: "/test.img/03_mk_up_72.png" , title: "copy to clipboard" },
  { image: "/test.img/02_wp_up_14.png" , title: "copy to clipboard" },
  { image: "/test.img/02_wp_up_13.png" , title: "copy to clipboard"},
  { image: "/test.img/CTA 02.png" , title: "copy to clipboard"},
  { image: "/test.img/03_mk_up_72.png" , title: "copy to clipboard" },
  { image: "/test.img/02_wp_up_13.png" , title: "copy to clipboard"},
  { image: "/test.img/02_wp_up_14.png" , title: "copy to clipboard" },
  { image: "/test.img/02_wp_up_14.png" , title: "copy to clipboard" },
  { image: "/test.img/02_wp_up_13.png" , title: "copy to clipboard"},
  { image: "/test.img/CTA 02.png" , title: "copy to clipboard"},
  { image: "/test.img/03_mk_up_72.png" , title: "copy to clipboard" },
  { image: "/test.img/03_mk_up_72.png" , title: "copy to clipboard" },
  { image: "/test.img/02_wp_up_14.png" , title: "copy to clipboard" },
  { image: "/test.img/02_wp_up_13.png" , title: "copy to clipboard"},
  { image: "/test.img/CTA 02.png" , title: "copy to clipboard"},
  { image: "/test.img/03_mk_up_72.png" , title: "copy to clipboard" },
  { image: "/test.img/CTA 02.png" , title: "copy to clipboard"},
  { image: "/test.img/02_wp_up_13.png" , title: "copy to clipboard"},
  { image: "/test.img/02_wp_up_14.png" , title: "copy to clipboard" },
];
const Cards1 = [
  { image: "/test.img/download (1).jpg" , hover: "copy to clipboard"},
  { image: "/test.img/download.jpg" , hover: "copy to clipboard"},
  { image: "/test.img/ecommerce-d7e19a12ebed400eb1b2344b2cbb0e7d.png" , hover: "copy to clipboard"},
];
const Cards2 = [
  { image: "/test.img/images (1).jpg" , hover: "copy to clipboard" },
  { image: "/test.img/images.jpg" , hover: "copy to clipboard"},
  { image: "/test.img/marketing-1024x594.webp", hover: "copy to clipboard" },
  { image: "/test.img/what-is-marketing.png" , hover: "copy to clipboard"},
];
const Page = () => {
  const [tab, setTab] = useState(1);
  const [filtered, setfiltered] = useState(
    tab === 1 ? Cards : tab === 2 ? Cards1 : Cards2
  );
  const handleSearch = (e) => {
    let query = e.target.value;
    let filtered = (tab === 1 ? Cards : tab === 2 ? Cards1 : Cards2).filter(
      (user) => user.image.includes(query)
    );
    setfiltered(filtered);
  };
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col py-16 px-8  gap-8">
        <div className="md:flex flex-wrap relative justify-between items-stretch py-20 ">
          <div className="py-10 px-10 flex flex-col gap-4 w-full max-w-[757px] justify-center">
            <h1 className="font-bold text-2xl">
              Ever growing library of copy/paste figma components
            </h1>
            <p>
              Welcome to Figit Library! you can literally copy anything and it
              will work. Everything on your fingertips for your next project and
              it’s free
            </p>
          </div>
          <div className="absolute right-0">
            <img src="/test.img/Group 6609 1.png" alt="img" />
          </div>
        </div>
        <div className="flex justify-between items-center shadow-lg px-4 py-10 relative">
          <input
            onChange={handleSearch}
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
        <div className="flex justify-between items-center shadow-lg px-4 py-4">
          <Tabs
            tab={tab}
            setTab={(tab) => {
              setfiltered(tab === 1 ? Cards : tab === 2 ? Cards1 : Cards2);
              setTab(tab);
            }}
            tabs={[
              { title: "Web page" },
              { title: "Marketing" },
              { title: "Ecommerce" },
            ]}
          />
          <>
            <ChevronIcon />
          </>
        </div>
        {tab === 1 ? (
          <WebPage Cards={filtered} />
        ) : tab === 2 ? (
          <Marketing Cards={filtered} />
        ) : (
          <Ecommerce Cards={filtered} />
        )}
      </div>
    </div>
  );
};

export default Page;
