import Link from "next/link";
import React from "react";
import New from "../components/New";


const Marketing = ({Cards}) => {
  return (
    <>
      <div className="flex flex-col py-16 px-8  justify-center gap-12">
       
       
          <div className="grid lg:grid-cols-3 ">
            {Cards.map((user) => (
              <div className="flex button justify-center items-center  shadow py-4 px-4 rounded-lg">
                <img src={user.image} />
              </div>
            ))}
          </div>
       
      </div>
    </>
  );
};

export default Marketing;
