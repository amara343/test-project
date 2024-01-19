"use client"
import Link from "next/link";
import React from "react";



const WebPage = ({Cards}) => {
  
  return (
    <div className="grid lg:grid-cols-5 gap-y-[20px] gap-x-[10px] shadow-lg ">
            {Cards.map((user) => (
              <div className="flex button p-[24px]  shadow-lg ">
             <div className="w-full ">   <img src={user.image} className="w-full top-0 shadow-lg" /></div>
              </div>
            ))}
          </div>
  );
};

export default WebPage;
