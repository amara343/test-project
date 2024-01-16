"use client";
import Link from "next/link";
import React, { useState } from "react";
import Feather from "../components/Feather";
import Ionicons from "../components/Ionicons";
import LucideIcons from "../components/LucideIcons";
import TablerIcons from "../components/TablerIcons";
import ChevronIcon from "../components/ChevronIcon";
import Tabs from "../components/Tabs";
const Cards = [
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/play-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/play-skip-forward-circle.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/pricetag.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/pricetag-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/medkit.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/play-skip-forward-circle.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/pricetag-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/pricetag.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/musical-notes-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/pricetag-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/medkit.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/play-skip-forward-circle.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/play-skip-forward-circle.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/musical-notes-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/pricetag-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/medkit.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/play-skip-forward-circle.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/medkit.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/pricetag-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/musical-notes-outline.svg" },
];

const Cards1 = [
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/medkit.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/play-skip-forward-circle.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/musical-notes-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/pricetag-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/medkit.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/play-skip-forward-circle.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/pricetag-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/musical-notes-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/musical-notes-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/pricetag-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/medkit.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/play-skip-forward-circle.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/play-skip-forward-circle.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/musical-notes-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/pricetag-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/medkit.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/play-skip-forward-circle.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/medkit.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/pricetag-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/musical-notes-outline.svg" },
];
const Cards2 = [
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/medkit.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/play-skip-forward-circle.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/musical-notes-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/pricetag-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/medkit.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/play-skip-forward-circle.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/pricetag-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/musical-notes-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/musical-notes-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/pricetag-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/medkit.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/play-skip-forward-circle.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/play-skip-forward-circle.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/musical-notes-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/pricetag-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/medkit.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/play-skip-forward-circle.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/medkit.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/pricetag-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/musical-notes-outline.svg" },
];
const Cards3 = [
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/medkit.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/play-skip-forward-circle.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/musical-notes-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/pricetag-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/medkit.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/play-skip-forward-circle.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/pricetag-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/musical-notes-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/musical-notes-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/pricetag-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/medkit.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/play-skip-forward-circle.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/play-skip-forward-circle.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/musical-notes-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/pricetag-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/medkit.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/play-skip-forward-circle.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/medkit.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/pricetag-outline.svg" },
  { image: "https://figma-library.s3.us-west-1.amazonaws.com/ionicons/pricetag.svg" },
];

const Page = () => {
  const [tab, setTab] = useState(1);
  const [filtered, setfiltered] = useState(
    tab === 1 ? Cards : tab === 2 ? Cards1 : tab === 3 ? Cards2 : Cards3
  );
  const handleSearch = (e) => {
    let query = e.target.value;
    let filtered = (tab === 1 ? Cards : tab === 2 ? Cards1 : tab ===3 ? Cards2: Cards3).filter(
      (user) => user.image.includes(query)
    );
    setfiltered(filtered);
  };
  return (
    <div className="flex justify-center ">
    <div className="md:flex flex-col px-8  gap-8 w-full">
      <div className="md:flex justify-between items-center w-full">
        <div className="py-20 px-10 flex flex-col gap-4 w-full justify-start">
          <h1 className="font-bold text-2xl">
              Open source icon libraries simplified
            </h1>
            <p>
              We’ve collected open source icon libraries and made it easy to get
              your favourite icons copy pasted directly in figma. Search for the
              icon & copy/paste in figma.
            </p>
          </div>
          <div className="flex justify-end w-full right-0">
            <img src="https://figmalibrary.com/wp-content/themes/figmalib/images/icons-page.svg" alt="img" />
          </div>
        </div>
        <div className="flex justify-between items-center shadow-lg px-4 py-4 relative">
          <input   onChange={handleSearch}
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm"
            placeholder="Search..."
            type="text"
            name="search"
          />
          <img src="/test.img/Vector.png" className="absolute right-7" alt="img"/>
         
        </div>
        <div className="md:flex justify-between items-center shadow-lg px-4 py-4 gap-20 ">
         <>
          <Tabs
            tab={tab}
            setTab={(tab) => {
              setfiltered(tab === 1 ? Cards : tab === 2 ? Cards1 : Cards2);
              setTab(tab);
            }}
            tabs={[
              { title: "Feather" },
              { title: "Ionicons" },
              { title: "LucideIcons" },
              { title: "TablerIcons" },
            ]}
            />
            </> 
          <div className="flex  justify-end ">
            <ChevronIcon />
          </div>
        </div>
        {tab === 1 ? (<Feather Cards={filtered}/>) : tab === 2 ? (<Ionicons  Cards={filtered} /> ): tab=== 3? (<LucideIcons  Cards={filtered} />) :( <TablerIcons   Cards={filtered} />)}
      </div>
    </div>
  );
};

export default Page;
