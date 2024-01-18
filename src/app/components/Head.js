"use client"
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Head = () => {
  const Pathname = usePathname();
  console.log({ Pathname });
  return (
    <div>
      <div className="gap-2 font-bold text-sm flex px-8 pt-8">
        <Link href="/components">Home</Link> 
        <span className="font-normal text-gray-600">»</span>
        <span className="font-normal text-gray-600">{Pathname}</span>
        
      </div>
    </div>
  );
}

export default Head;