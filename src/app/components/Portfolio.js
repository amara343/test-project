"use client"

import React from 'react'
import Page from '../templates/page';


  
const Portfolio = ({Cards}) => {
  return ( 
   
    <div className="flex flex-col py-16 px-8  w-full max-w-[1227px]  justify-center gap-12">

    <div className="grid grid-cols-4 gap-4 ">
      {Cards.map((user) => (
        <div className="button flex justify-center items-center   shadow hover:bg-blue-200 py-4 px-4">
          <img src={user.img} />
        </div>
      ))}
    </div>
      </div>
    
    
  )
}

export default Portfolio