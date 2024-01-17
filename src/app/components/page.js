"use client";
import Link from "next/link";
import React, { useState } from "react";
import Tabs from "./Tabs";
import WebPage from "./WebPage";
import Marketing from "./Marketing";
import Ecommerce from "./Ecommerce";
import ChevronIcon from "./ChevronIcon";

// const Cards = [
//   { image: "/test.img/CTA 02.png", title: "copy to clipboard"},
//   { image: "/test.img/03_mk_up_72.png" , title: "copy to clipboard" },
//   { image: "/test.img/02_wp_up_14.png" , title: "copy to clipboard" },
//   { image: "/test.img/02_wp_up_13.png" , title: "copy to clipboard"},
//   { image: "/test.img/CTA 02.png" , title: "copy to clipboard"},
//   { image: "/test.img/03_mk_up_72.png" , title: "copy to clipboard" },
//   { image: "/test.img/02_wp_up_13.png" , title: "copy to clipboard"},
//   { image: "/test.img/02_wp_up_14.png" , title: "copy to clipboard" },
//   { image: "/test.img/02_wp_up_14.png" , title: "copy to clipboard" },
//   { image: "/test.img/02_wp_up_13.png" , title: "copy to clipboard"},
//   { image: "/test.img/CTA 02.png" , title: "copy to clipboard"},
//   { image: "/test.img/03_mk_up_72.png" , title: "copy to clipboard" },
//   { image: "/test.img/03_mk_up_72.png" , title: "copy to clipboard" },
//   { image: "/test.img/02_wp_up_14.png" , title: "copy to clipboard" },
//   { image: "/test.img/02_wp_up_13.png" , title: "copy to clipboard"},
//   { image: "/test.img/CTA 02.png" , title: "copy to clipboard"},
//   { image: "/test.img/03_mk_up_72.png" , title: "copy to clipboard" },
//   { image: "/test.img/CTA 02.png" , title: "copy to clipboard"},
//   { image: "/test.img/02_wp_up_13.png" , title: "copy to clipboard"},
//   { image: "/test.img/02_wp_up_14.png" , title: "copy to clipboard" },
// ];
const Cards = [
  { image: "https://figmalibrary.com/wp-content/uploads/2022/10/Tooltips-08-500x156.jpg" , alt: "img" },
  { image: "https://figmalibrary.com/wp-content/uploads/2022/10/Button-05-500x50.jpg" , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/10/Avatar-01-500x75.jpg", alt: "img" },
  { image: "https://figmalibrary.com/wp-content/uploads/2022/10/Button-08-500x50.jpg " , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/10/Vertical-Navbar-15-500x356.jpg " , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/10/Button-02-500x51.jpg " , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/10/Vertical-Navbar-15-500x356.jpg " , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/10/Button-02-500x51.jpg " , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/10/Gauge-01-500x500.jpg " , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/10/Review-08-500x449.jpg " , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/10/Button-08-500x50.jpg " , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/10/Button-02-500x51.jpg " , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/10/Avatar-01-500x75.jpg", alt: "img" },
  { image: "https://figmalibrary.com/wp-content/uploads/2022/10/Vertical-Navbar-15-500x356.jpg " , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/10/Button-08-500x50.jpg " , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/10/Tooltips-08-500x156.jpg" , alt: "img" },
];
const Cards1 = [
  { image: "https://figmalibrary.com/wp-content/uploads/2022/11/Features-18-500x250.jpg" , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/11/Features-01-500x192.jpg" , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/11/Stats-12-500x196.jpg" , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/11/Hero-16-500x355.jpg" , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/11/Hero-15-500x281.jpg" , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/11/Blog-13-1-500x333.jpg" , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/11/Hero-16-500x355.jpg" , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/11/Feature-22-500x233.jpg" , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/11/Hero-16-500x355.jpg" , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/11/Content-03-500x391.jpg" , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/11/Stats-08-500x94.jpg" , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/11/Team-01-500x408.jpg" , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/11/Team-02-500x206.jpg" , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/11/Contact-18-1536x1180.jpg" , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/11/Error-01-1536x1092.jpg" , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/11/Hero-14-1536x953.jpg" , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/11/Hero-16-500x355.jpg" , alt: "img"},
  { image: "https://figmalibrary.com/wp-content/uploads/2022/11/Features-18-500x250.jpg" , alt: "img"},
];
const Cards2 =[
  {image:"//figmalibrary.com/wp-content/uploads/2022/10/Horizontal-Navbar-04-scaled.jpg", alt:"img"},
  {image:"https://figmalibrary.com/wp-content/uploads/2022/10/Hero-09-scaled.jpg", alt:"img"},
  {image:"https://figmalibrary.com/wp-content/uploads/2022/10/Navigation-06-scaled.jpg", alt:"img"},
  {image:"https://figmalibrary.com/wp-content/uploads/2022/10/Avatar-01-scaled.jpg", alt:"img"},
  {image:"https://figmalibrary.com/wp-content/uploads/2022/10/Badge-07.jpg", alt:"img"},
  { image: "/test.img/02_wp_up_13.png" , alt: "img"},
  {image:"https://figmalibrary.com/wp-content/uploads/2022/10/Horizontal-Navbar-07-scaled.jpg", alt:"img"},
  {image:"https://figmalibrary.com/wp-content/uploads/2022/10/Highlight-02-scaled.jpg", alt:"img"},
  { image: "/test.img/02_wp_up_13.png" , alt: "img"},
  {image:"https://figmalibrary.com/wp-content/uploads/2022/10/Horizontal-Navbar-05-scaled.jpg", alt:"img"},
  {image:"https://figmalibrary.com/wp-content/uploads/2022/10/Hero-12-scaled.jpg", alt:"img"},
  { image: "/test.img/03_mk_up_72.png" , alt: "alt" },
  {image:"https://figmalibrary.com/wp-content/uploads/2022/10/Featured-20-scaled.jpg", alt:"img"},
  { image: "/test.img/02_wp_up_14.png" , alt: "img" },
  {image:"https://figmalibrary.com/wp-content/uploads/2022/10/Hero-12-500x258.jpg", alt:"img"},
  {image:"https://figmalibrary.com/wp-content/uploads/2022/10/Featured-14-768x294.jpg", alt:"img"},
  { image: "/test.img/02_wp_up_14.png" , alt: "img" },
  {image:"https://figmalibrary.com/wp-content/uploads/2022/10/Navigation-06-scaled.jpg", alt:"img"},
  { image: "/test.img/02_wp_up_14.png" , alt: "img" },
  {image:"https://figmalibrary.com/wp-content/uploads/2022/10/Horizontal-Navbar-05-scaled.jpg", alt:"img"},
]

const Page = () => {
  const [tab, setTab] = useState(0);
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
       <div className="flex flex-col px-8  gap-8 w-full">
        <div className="md:flex flex-wrap w-full max-w-[1276px] items-center justify-between">
          <div className="py-20 px-10 gap-4 w-full justify-start flex flex-col">
            <h1 className="font-extrabold text-2xl leading-5 not-italic">
            Ever growing library of copy/paste figma components
            </h1>
            <p>
              Welcome to Figit Library! you can literally copy anything and it
              will work. Everything on your fingertips for your next project and
              it’s free
            </p>
          </div>
          <div className="flex w-full justify-end lg:absolute top-[43px] right-16">
            <img src="/test.img/Group 6609 1.png" alt="img" />
          </div>
        </div>
        <div className="flex justify-between items-center  rounded-lg relative border border-[#e5e7eb]">
          <input
            onChange={handleSearch}
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm"
            placeholder="Search..."
            type="text"
            name="search"
            className="py-4 px-4 w-full rounded-lg"
          />
          <img
            src="/test.img/Vector.png"
            className="absolute right-7"
            alt="img"
          />
        </div>
        <div className="md:flex text-sm text-[#6b7280] justify-between gap-20">
          <Tabs
            tab={tab}
            setTab={(tab) => {
              setfiltered(tab === 1 ? Cards : tab === 2 ? Cards1 : Cards2);
              setTab(tab);
            }}
            tabs={[
              { title: "Ecommerce" },
              { title: "Marketing" },
              { title: "Webapp" },
            ]}
          />
          <div className="flex justify-end ">
            <ChevronIcon />
          </div>
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
