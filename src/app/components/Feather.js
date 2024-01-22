"use client"
import Link from "next/link";
import React from "react";



const Feather = ({Cards}) => {
  return (
    <div className="md:flex flex-col w-full justify-start items-center">

    <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-4 justify-center w-full">
      {Cards.map((user) => (
        <div className="button container1 max-w-[1900px] shadow px-8 py-6">
          <img src={user.image} className="lg:max-w-[40px]" />
          <button class="btn">Copy to clipboard</button>
        </div>
      ))}
    </div>
      </div>
  );
};

export default Feather;
