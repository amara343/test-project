import React from "react";


const Ecommerce = ({Cards}) => {
  return (
    <>
      <>
       
        
      <div className="grid lg:grid-cols-5 gap-y-[20px] gap-x-[10px] ">
            {Cards.map((user) => (
              <div className="flex button p-[24px] shadow container1">
             <div className="top-10 w-full">   <img src={user.image} className="w-full shadow" /></div>
             <button class="btn">Copy to clipboard</button>
              </div>
            ))}
          </div>
      
      </>
    </>
  );
};

export default Ecommerce;
 