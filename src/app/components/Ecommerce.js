import Link from "next/link";
import React from "react";
import New from "../components/New";


const Ecommerce = ({Cards}) => {
  return (
    <>
      <div className=" ">
       
        
      <div className="grid lg:grid-cols-5 gap-y-[20px] gap-x-[10px] ">
            {Cards.map((user) => (
              <div className="flex button p-[24px] shadow-lg ">
             <div className="top-10 w-full shadow-lg">   <img src={user.image} className="w-full" /></div>
              </div>
            ))}
          </div>
      
      </div>
    </>
  );
};

export default Ecommerce;
