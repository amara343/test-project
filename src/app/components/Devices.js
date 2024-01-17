"use client";

import React from "react";


const Devices = ({Cards}) => {
  return (
    <div className="md:flex flex-col py-16 px-8  justify-center gap-12">

    <div className="grid lg:grid-cols-4 md:grid-cols-3 w-full">
      {Cards.map((user) => (
        <div className="button flex flex-wrap justify-center items-center   shadow  py-4 px-4">
          <img src={user.image} />
          
        </div>
      ))}
    </div>
      </div>
  );
};

export default Devices;
