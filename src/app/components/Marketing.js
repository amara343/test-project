import React from "react";

const Marketing = ({ Cards }) => {
  return (
    <div className="grid lg:grid-cols-5 gap-y-[10px] gap-x-[20px] ">
            {Cards.map((user) => (
              <div className="flex button p-[24px] shadow-lg container1">
             <div className="w-full ">   <img src={user.image} className="w-full p-6 " /></div>
             <button class="btn">Copy to clipboard</button>
              </div>
            ))}
          </div>
  );
};

export default Marketing;
