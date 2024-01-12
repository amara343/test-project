import Link from "next/link";
import React from "react";
const navigationItems = [
  {href:"/" , label: "All components" },
  {href:"/" ,  label: "Templates" },
  {href:"/" ,  label: "Icons" },
  {href:"/" ,  label: "Mockups" },
  {href:"/" ,  label: "Content" },
  {href:"/" ,  label: "Website" },
  {href:"/" ,  label: "Webapp" },
  {href:"/" ,  label: "Social" },
  {href:"/" ,  label: "Webpage" },
  {href:"/" ,  label: "Feather" },
  {href:"/" ,  label: "Ionicons" },
  {href:"/" ,  label: "Lucide Icons" },
  {href:"/" ,  label: "Tabler Icons" },
  {href:"/" ,  label: "Ecommerce" },
  {href:"/marketing" ,  label: "Marketing" },
  // {href:"/" ,  label: "About" },
  // {href:"/" ,  label: "Sign In" },
];
const ChevronIcon = () => {
  return (
    <div>
      <nav>
        <select>
          {navigationItems.map((item) => (
            <option>{item.label}</option>
          ))}
        </select>
      </nav>
    </div>
  );
};

export default ChevronIcon;
