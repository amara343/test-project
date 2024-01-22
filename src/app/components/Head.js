"use client"
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Head = () => {
  const Pathname = usePathname();
  console.log({ Pathname });
  return (
    <div>
      <div className=" font-bold text-[#1f2937] text-sm flex px-10 pt-12">
        <Link href="/components" className=''>Home</Link> 
        <span className="font-normal text-gray-600">»</span>
        <span className=" text-[#47556980] text-sm font-semibold">{Pathname} Catagory</span>
        
      </div>
    </div>
  );
}

export default Head;