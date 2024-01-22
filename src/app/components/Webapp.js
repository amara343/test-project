"use client"

import React from 'react'
import Page from '../templates/page';

 
const Webapp = ({Cards}) => {
  return (
    <div className="">
     <div className="flex flex-wrap gap-10">
      {Cards.map((user) => (
        <div className="button container2 relative flex 2xl:max-w-[31%] w-full flex-col justify-between border py-6 px-4">
          {user.heading && (
            <div className="absolute flex items-center rounded right-[24px] top-[12px] p-2 justify-end bg-[#ecfccb]">
              <div>
                <img src={user.logo} />
              </div>

              <p className="text-[#65a30d] text-xs">{user.heading}</p>
            </div>
          )}
          <div className="items-center flex justify-center w-full ">
            <img src={user.img} className=" w-full"/>
            <button class="btn">Explore</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Webapp