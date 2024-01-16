"use client"

import React from 'react'
import Page from '../templates/page';


  
const Portfolio = ({Cards}) => {
  return ( 
   
    <div className="flex flex-col py-16 px-8  w-full  justify-center gap-12">

    <div className=" grid lg:grid-cols-3 md:grid-cols-1 gap-4 w-full">
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