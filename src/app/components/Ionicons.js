"use client"
import Link from "next/link";
import React from "react";



const Ionicons = ({Cards}) => {
  return (
    <div className="md:flex flex-col w-full justify-start items-center">

    <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-4 justify-center w-full">
      {Cards.map((user) => (
        <div className="button max-w-[1900px] border px-8 py-6">
          <img src={user.image} className="lg:max-w-[40px]" />
          
        </div>
      ))}
    </div>
      </div>
  );
};

export default Ionicons;
