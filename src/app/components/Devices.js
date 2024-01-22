"use client";

import React from "react";


const Devices = ({Cards}) => {
  return (
    <div className="flex flex-col   w-full  justify-center gap-12">

    <div className=" grid lg:grid-cols-5 md:grid-cols-1 gap-4 w-full">
      {Cards.map((user) => (
        <div className="button container1 flex  shadow hover:bg-blue-200 p-4">
          <img src={user.img} className="w-full" />
          <button class="btn">Copy to clipboard</button>
        </div>
      ))}
    </div>
      </div>
  );
};

export default Devices;
