"use client";
import React, { useState } from "react";
const Para = [
  {
    heading:
      "Connecting engineers, calculations, and teams together Connecting eng",
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
      <div className="flex flex-col px-8  gap-8 w-full">
        <div className="md:flex flex-wrap w-full max-w-[1276px] items-center justify-between">
          <div className="py-20 px-10 gap-4 w-full justify-start flex flex-col">
            <h1 className="font-extrabold text-2xl leading-5 not-italic">
              Never get out of copy ideas
            </h1>
            <p>
              Need an idea for headline text or a call to action? We’ve written
              copy to suit all sorts of industry design needs.
            </p>
          </div>
          <div className="flex w-full justify-end lg:absolute top-[70px] right-16">
            <img
              src="https://figmalibrary.com/wp-content/themes/figmalib/images/content-page.svg"
              alt="img"
            />
          </div>
        </div>
        <div className="flex justify-between items-center  rounded-lg relative border border-[#e5e7eb]">
          <input
            onChange={handleSearch}
            class="placeholder: placeholder:text-[#6b7280] block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm"
            placeholder="Search..."
            type="text"
            name="search"
          />
          <img
            src="/test.img/Vector.png"
            className="absolute right-7"
            alt="img"
          />
        </div>
        <div className="grid lg:grid-cols-5   gap-6 ">
          {filtered.map((it) => (
            <p
              style={{ color: "black" }}
              className="button  max-w-[331px] w-full shadow  py-4 px-4 font-bold text-black rounded-lg"
            >
              {it.heading}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Page;
