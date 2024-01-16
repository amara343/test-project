"use client"
import Link from 'next/link';
import { useState } from 'react';
const VerticalMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=''>
      <div className='px-2' onClick={toggleMenu}>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
          />
        </svg>
      </div>
      {isOpen && (
        <div className='flex flex-col absolute bg-transparents border rounded text-black px-2'>
         
         <Link href="/components">Components</Link>
         <Link href="/templates">Templates</Link>
         <Link href="/icons">Icons</Link>
         <Link href="/mockups">Mockups</Link>
         <Link href="/content">Contents</Link>
        </div>
      )}
    </div>
  );
};

export default VerticalMenu