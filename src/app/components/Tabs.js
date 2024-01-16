import React from "react";

const Tabs = ({ tab, setTab, tabs = [] }) => {
  return (
    <div className="flex flex-wrap">
      {tabs.map((it, i) => (
        <div
          key={i}
          onClick={() => setTab(i + 1)}
          className={`${
            tab === i + 1 ? "active:border-b-black" : ""
          } hover:bg-gray-100 p-2 border-b-transparent border-b-4 hover:border-b-black hover:text-black px-4`} >
          <p>{it.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
