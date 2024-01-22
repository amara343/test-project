"use client";
import React, { useState } from "react";
const Para = [
  {
    heading: "Connecting engineers, calculations, and teams together",
  },
  { heading: "Digital data analytics for ambitious companies" },
  { heading: "Unleash the world of Metaverse" },
  { heading: "Brands that touch heart and make you stand out" },
  { heading: "Collect your best work easily" },
  { heading: "Explore new adventures in the metaverse" },
  { heading: "Carry the story along by inheritance" },
  { heading: "We make your business look amazing!" },
  { heading: "Brilliant minds brilliant decisions" },
  { heading: "Digital data analytics for ambitious companies" },
  { heading: "Let’s build a better tomorrow, together." },
  { heading: "We make your business look amazing!" },
  { heading: "We make your business look amazing!" },
  { heading: "Let’s build a better tomorrow, together.Book Free Assessment" },
  { heading: "I’m in" },
  { heading: "Decide which communications you’d like to receive and how." },
  { heading: "A lifetime of world class adventures" },
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
  { heading: "Download Now" },
  { heading: "Get the bundle" },
  { heading: "Start Saving Now" },
  { heading: "FIND OUT MORE →" },
  { heading: "BOOK A MEETING" },
  { heading: "Send me specials now" },
  { heading: "Join free for 14 days" },
  { heading: "Read our Story" },
  { heading: "Book a Personalised Demo" },
  { heading: "Claim your free trial" },
  {
    heading:
      "This information will be displayed publicly so be careful what you share.",
  },
  { heading: "Decide which communications you’d like to receive and how." },
  { heading: "Sign Up For a Demo" },
  { heading: "Make emails your no.1 growth engine" },
  { heading: "" },
];
const Page = () => {
  const [filtered, setfiltered] = useState(Para);
  const handleSearch = (e) => {
    let query = e.target.value;
    let filtered = Para.filter((it) => it.heading.includes(query));
    setfiltered(filtered);
  };
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col px-6  gap-8 w-full">
        <div className="md:flex flex-wrap max-w-[1427px] items-center gap-x-6  justify-between ">
          <div className="pt-20 pb-16 px-16 gap-5 justify-start flex flex-col">
            <h1 className="font-bold text-2xl leading-5 not-italic">
              Never get out of copy ideas
            </h1>
            <p>
              Need an idea for headline text or a call to action? We’ve written
              copy to suit all sorts of industry design needs.
            </p>
          </div>
          <div className="flex w-full justify-end lg:absolute top-[100px] right-16">
            <img
              src="https://figmalibrary.com/wp-content/themes/figmalib/images/content-page.svg"
              alt="img"
            />
          </div>
        </div>
        <div className="flex justify-between items-center  rounded-lg relative border border-[#e5e7eb]">
          <input
            onChange={handleSearch}
            class="placeholder: placeholder:text-[#6b7280] block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-xs font-medium"
            placeholder="Search..."
            type="text"
            name="search"
            className="py-3 px-5 w-full rounded-lg text-[#6b7280] text-sm font-medium"
          />
          <img
            src="/test.img/Vector.png"
            className="absolute right-7"
            alt="img"
          />
        </div>
        <div className="grid lg:grid-cols-5  w-full gap-x-[10px] gap-y-[20px] ">
          {filtered.map((it) => (
            <div className="button text-black container1 shadow max-w-[300px] w-full px-6 py-8 flex justify-center items-center font-bold text-base h-full">
             
              <p style={{ color: "black" }}>{it.heading}</p>
              <button class="btn">Copy to clipboard</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Page;
