import React from "react";

const Tabs = ({ tab, setTab, tabs = [] }) => {
  return (
    <div className="flex flex-wrap ">
      {tabs.map((it, i) => (
        <div
          key={i}
          onClick={() => setTab(i + 1)}
          className={`${
            tab === i + 1 ? "border border-b-black border-transparent text-black font-bold" :  ""
          }   delay-400  items-center py-4 px-4 duration-300`} >
          <p>{it.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
