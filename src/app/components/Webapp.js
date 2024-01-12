"use client"

import React from 'react'
import Page from '../templates/page';

 
const Webapp = ({Cards}) => {
  return (
    <div className="flex justify-center items-center gap-12">
    <div className="flex flex-col py-16 px-8  gap-8">
        <div className="flex gap-20 py-8 px-4 justify-between items-center ">
          {Cards.map((user) => (
            <div className="flex flex-col items-center shadow hover:bg-blue-200 py-4 px-4 rounded-lg">
              <div>
                <img src={user.img} />
              </div> 
              <div className="flex gap-8  justify-center items-center py-4">
                <p className="text-xs font-normal">{user.para}</p>
                <div className="flex justify-center items-center gap-2">
                  <div>
                    <img src={user.icon} />
                  </div>
                  <button className="bg-gray-900 py-2 px-4 rounded-lg text-xs font-normal  text-white">
                    {user.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
     </div>
   </div>
  )
}

export default Webapp