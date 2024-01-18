"use client"

import React from 'react'
import Page from '../templates/page';


  
const Hero = ({Cards}) => {
  return ( 
   
    <div className="flex flex-col py-16 px-8  w-full  justify-center gap-12">

    <div className=" grid lg:grid-cols-5 md:grid-cols-1 gap-4 w-full">
      {Cards.map((user) => (
        <div className="button flex  shadow hover:bg-blue-200 py-4 px-4">
          <img src={user.img} />
        </div>
      ))}
    </div>
      </div>
   
  )
}

export default Hero