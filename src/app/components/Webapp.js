"use client"

import React from 'react'
import Page from '../templates/page';

 
const Webapp = ({Cards}) => {
  return (
    <div className="md:flex flex-col py-16 px-8  justify-center gap-12">

    <div className="grid lg:grid-cols-2 md:grid-cols-1 w-full">
      {Cards.map((user) => (
        <div className="button flex flex-wrap justify-center items-center   shadow hover:bg-blue-200 py-4 px-4">
          <img src={user.img} />
          
        </div>
      ))}
    </div>
      </div>
  )
}

export default Webapp