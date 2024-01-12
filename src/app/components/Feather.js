"use client"
import Link from "next/link";
import React from "react";



const Feather = ({Cards}) => {
  return (
    <div className="flex flex-col py-16 px-8  w-full max-w-[1227px]  justify-center gap-12">

    <div className="grid grid-cols-4 gap-4 ">
      {Cards.map((user) => (
        <div className="button flex justify-center items-center py-10 px-8 shadow-lg">
          <img src={user.image} />
        </div>
      ))}
    </div>
      </div>
  );
};

export default Feather;
