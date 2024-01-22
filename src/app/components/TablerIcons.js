"use client"
import Link from "next/link";
import React from "react";



const TablerIcons = ({Cards}) => {
  return (
    <div className=" w-full justify-start items-center">

    <div className="grid lg:grid-cols-5  gap-3 justify-center w-full">
      {Cards.map((user) => (
        <div className="button container1 max-w-[1900px] shadow-lg px-8 py-6">
          <img src={user.image} className="lg:max-w-[40px]" />
          <button class="btn">Copy to clipboard</button>
        </div>
      ))}
    </div>
      </div>
  );
};

export default TablerIcons;
