import Link from "next/link";
import React from "react";
import New from "../components/New";


const Ecommerce = ({Cards}) => {
  return (
    <div className="flex justify-center gap-12">
      <div className="flex flex-col py-16 px-8  w-full  gap-8">
       
        
          <div className="grid lg:grid-cols-4">
            {Cards.map((user) => (
              <div className="flex button justify-center items-center   shadow  py-4 px-4">
                <img src={user.image} />
              </div>
            ))}
          </div>
      
      </div>
    </div>
  );
};

export default Ecommerce;
