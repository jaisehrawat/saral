// import React from "react";
// import { NavLink } from "react-router-dom";
// import {
//   HiOutlineViewGrid,
//   HiOutlineCog,
//   HiOutlineUserCircle,
//   HiOutlineChat,
//   HiOutlineTrendingUp,
// } from "react-icons/hi";

// const Demo = ({ children }) => {
//   const menuItem = [
//     {
//       path: "/demo/dashboard",
//       name: "Dashboard",
//       icon: <HiOutlineViewGrid />,
//     },
//     {
//       path: "/",
//       name: "Activity",
//       icon: <HiOutlineTrendingUp />,
//     },
//     {
//       path: "/",
//       name: "Messages",
//       icon: <HiOutlineChat />,
//     },
//     {
//       path: "/",
//       name: "Profile",
//       icon: <HiOutlineUserCircle />,
//     },
//     {
//       path: "/",
//       name: "Settings",
//       icon: <HiOutlineCog />,
//     },
//   ];

//   return (
//     <>
//       <div className="bg-red-300">
//         <div className="bg-gray-900 w-80 h-screen p-1">
//           {menuItem.map((item, index) => (
//             <NavLink
//               to={item.path}
//               key={index}
//               className="flex items-center text-gray-400 gap-x-3 p-2 m-2 hover:bg-gray-800 rounded-md"
//             >
//               <div className="text-3xl">{item.icon}</div>
//               <div className="text-l font-normal">{item.name}</div>
//             </NavLink>
//           ))}
//         </div>
//         <main>{children}</main>
//       </div>
//     </>
//   );
// };

// export default Demo;


