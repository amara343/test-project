import Link from "next/link";
import React from "react";
import New from "../components/New";


const Ecommerce = ({Cards}) => {
  return (
    <>
      <div className=" ">
       
        
          <div className="grid lg:grid-cols-5 shadow-lg ">
            {Cards.map((user) => (
              <div className="flex button py-2 px-2 h-full justify-center w-full shadow-lg ">
             <div className=" lg:max-w-[1206px] w-full">   <img src={user.image} /></div>
              </div>
            ))}
          </div>
      
      </div>
    </>
  );
};

export default Ecommerce;
