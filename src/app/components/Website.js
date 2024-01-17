"use client"

import React from 'react'
import Page from '../templates/page';


 
const Website = ({Cards}) => {
 
  return ( 
    <div className="flex flex-col  justify-center">

    <div className="flex w-full gap-6">
      {Cards.map((user) => (
        <div className="button flex justify-center items-center border border-gray-300 py-6 px-6">
          <img src={user.img} />
          
        </div>
      ))}
    </div>
      </div>
  )
}

export default Website