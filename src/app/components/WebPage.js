"use client"
import Link from "next/link";
import React from "react";



const WebPage = ({Cards}) => {
  
  return (
    <div className="grid lg:grid-cols-5 gap-y-[20px] gap-x-[12px] shadow-lg justify-start items-stretch">
            {Cards.map((user) => (
              <div className="flex button p-[24px]  shadow container1">
             <div className="w-full ">   <img src={user.image} className="w-full top-0 shadow"  alt={user.alt} /></div>
             <button class="btn">Copy to clipboard</button>
              </div>
            ))}
          </div>
  );
};

export default WebPage;
