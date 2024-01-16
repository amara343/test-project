"use client";
import React, { useState } from "react";
const Para = [
  { heading: "Collect your best work easily" },
  { heading: "Unleash the world of Metaverse" },
  { heading: "Brilliant minds brilliant decisions" },
  { heading: "Digital data analytics for ambitious companies" },
  { heading: "Innovation built for living space" },
  { heading: "Make fashion look more charming" },
  { heading: "Connecting engineers, calculations, and teams together" },
  { heading: "Innovation built for living space" },
  { heading: "Make fashion look more charming" },
  { heading: "Connecting engineers, calculations, and teams together" },
  { heading: "Collect your best work easily" },
  { heading: "Unleash the world of Metaverse" },
  { heading: "Brilliant minds brilliant decisions" },
  { heading: "Digital data analytics for ambitious companies" },
  { heading: "Innovation built for living space" },
  { heading: "Make fashion look more charming" },
  { heading: "Innovation built for living space" },
  { heading: "Make fashion look more charming" },
  { heading: "Connecting engineers, calculations, and teams together" },
  { heading: "Innovation built for living space" },
  { heading: "Make fashion look more charming" },
  { heading: "Connecting engineers, calculations, and teams together" },
  { heading: "Innovation built for living space" },
  { heading: "Make fashion look more charming" },
];
const Page = () => {
  const [filtered, setfiltered] = useState(Para);
  const handleSearch = (e) => {
    let query = e.target.value;
    let filtered = (Para).filter(
      (it) => it.heading.includes(query)
    );
    setfiltered(filtered);
  };
  return (
    <div className="flex justify-center ">
      <div className="md:flex flex-col py-16 px-8 w-full  gap-8">
        <div className="md:flex flex-row justify-between ">
          <div className="py-10 px-10  w-full flex flex-col justify-center gap-4">
            <h1 className="font-bold text-2xl">
            Never get out of copy ideas
            </h1>
            <p>
            Need an idea for headline text or a call to action? We’ve written copy to suit all sorts of industry design needs.
            </p>
          </div>
          <div className="flex justify-end w-full right-0">
            <img src="https://figmalibrary.com/wp-content/themes/figmalib/images/content-page.svg" alt="img" />
          </div>
        </div>
        <div className="flex justify-between items-center shadow-lg px-4 py-4 relative">
          <input onChange={handleSearch}
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm"
            placeholder="Search..."
            type="text"
            name="search"
          />
          <img src="/test.img/Vector.png" className="absolute right-7" alt="img"/>
         
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-1  gap-10 ">
        {filtered.map((it) => (
            <p className="button  max-w-[331px] w-full shadow hover:bg-blue-200 py-4 px-4 rounded-lg">{it.heading}</p>
            ))}
            </div>
      </div>
    </div>
  );
};
export default Page;
