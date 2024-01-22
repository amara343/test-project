"use client";

import React from "react";

const Social = ({ Cards }) => {
  return (
    <div className="">
      <div className="flex flex-wrap gap-6">
        {Cards.map((user) => (
          <div className="button container2 relative shadow-lg flex max-w-[392px] 2xl:max-w-[17%] w-full flex-col border py-8 px-6">
            {user.heading && (
              <div className="absolute flex items-center rounded right-[24px] top-[12px] p-2 justify-end bg-[#ecfccb]">
                <div>
                  <img src={user.logo} />
                </div>

                <p className="text-[#65a30d] text-xs">{user.heading}</p>
              </div>
            )}
            <div className="items-center flex">
              <img src={user.img} className=" "/>
              <button class="btn">Explore</button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Social;
