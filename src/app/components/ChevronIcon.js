"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
const navigationItems = [
  { href: "/components", label: "All components" },
  { href: "/templates", label: "Templates" },
  { href: "/icons", label: "Icons" },
  { href: "/mockups", label: "Mockups" },
  { href: "/content", label: "Content" },
 
];
const ChevronIcon = () => {
  const navigate = useRouter();
  const handleChange = (e) => {
   
    navigate.push(e.target.value);
  };
  return (
    <div>
      <nav>
        <select
          onChange={(e) => {
            handleChange(e);
          }}
        >
          {navigationItems.map((item) => (
            <option value={item.href}>{item.label}</option>
          ))}
        </select>
      </nav>
    </div>
  );
};

export default ChevronIcon;
