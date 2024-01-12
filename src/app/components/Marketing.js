import Link from "next/link";
import React from "react";
import New from "../components/New";


const Marketing = ({Cards}) => {
  return (
    <>
      <div className="flex flex-col py-16 px-8  w-full max-w-[1227px]  justify-center gap-12">
       
       
          <div className="grid grid-cols-4 gap-4 ">
            {Cards.map((user) => (
              <div className="flex justify-center items-center  shadow hover:bg-blue-200 py-4 px-4 rounded-lg">
                <img src={user.image} />
              </div>
            ))}
          </div>
       
      </div>
    </>
  );
};

export default Marketing;
