"use client"
import Link from "next/link";
import React from "react";



const LucideIcons = ({Cards}) => {
  return (
    <div className="md:flex flex-col py-16 px-8  justify-center gap-12">

    <div className="grid lg:grid-cols-4 md:grid-cols-3  justify-center gap-8 w-full">
      {Cards.map((user) => (
        <div className="button flex flex-wrap justify-center items-center max-w-[100px] w-full  shadow hover:bg-blue-200 py-4 px-4">
          <img src={user.image} />
          
        </div>
      ))}
    </div>
      </div>
  );
};

export default LucideIcons;
