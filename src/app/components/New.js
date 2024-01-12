// "use client"
// import Head from "next/head";
// import Link from "next/link";
// import React from "react";
// const Components = [
//   {  title: "Web page" },
//   {  title: "Marketing" },
//   {  title: "Ecommerce" },
// ];

// const New= () => {
//   return (
//     <div className="flex justify-center">
     
//       <div className="flex flex-col py-16 px-8  w-full max-w-[1227px] gap-8">
//         <div className="flex flex-row justify-between ">
//           <div className="py-10 px-10  w-full max-w-[757px] flex flex-col justify-center">
//             <h1 className="font-bold text-2xl">
//               Ever growing library of copy/paste figma components
//             </h1>
//             <p>
//               Welcome to Figit Library! you can literally copy anything and it
//               will work. Everything on your fingertips for your next project and
//               it’s free
//             </p>
//           </div>
//           <div>
//             <img src="/test.img/Group 6609 1.png" alt="img" />
//           </div>
//         </div>
//         <div className="flex justify-between items-center shadow-lg px-4 py-4">
//           <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm" placeholder="Drop Down..." type="text" name="search"/>
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
//   <path fill-rule="evenodd" clip-rule="evenodd" d="M1 6.76551C1.00003 4.01511 2.94296 1.64777 5.64053 1.1113C8.3381 0.57483 11.039 2.01866 12.0913 4.55977C13.1437 7.10088 12.2544 10.0315 9.96738 11.5593C7.68036 13.0871 4.63257 12.7866 2.688 10.8415C1.60716 9.76039 0.999984 8.29425 1 6.76551Z" stroke="#4B5563" stroke-linecap="round" stroke-linejoin="round"/>
//   <path d="M12.529 12.5295L15 15.0005" stroke="#4B5563" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
//         </div>
//         <div className="flex justify-between items-center shadow-lg px-4 py-4">
//           <div className="flex">
//             {Components.map((it) => (
              
//               <div className="hover:bg-gray-900 hover:text-white rounded-lg py-4 px-2 justify-center items-center text-center gap-8">
              
//                 <p>
                
//                   {it.title}
//                 </p>
//               </div>
                 
//             ))}
//           </div>
//           <div>
//             <p>All Components</p>
//           </div>
//         </div>
       
//       </div>
//     </div>
//   );
// };

// export default New;