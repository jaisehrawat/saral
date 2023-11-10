import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineViewGrid,
  HiOutlineTrendingUp,
  HiOutlineChat,
  HiOutlineUserCircle,
  HiOutlineCog,
  HiOutlinePlus,
  HiOutlineChevronUp,
} from "react-icons/hi";

import { HiOutlineSquare3Stack3D } from "react-icons/hi2";

const Sidebar = () => {
  const menuItem = [
    {
      path: "/home/dashboard",
      name: "Dashboard",
      icon: <HiOutlineViewGrid />,
    },
    {
      path: "/home/activity",
      name: "Activity",
      icon: <HiOutlineTrendingUp />,
    },
    {
      path: "/home/messages",
      name: "Messages",
      icon: <HiOutlineChat />,
    },
    {
      path: "/home/profile",
      name: "Profile",
      icon: <HiOutlineUserCircle />,
    },
    {
      path: "/home/settings",
      name: "Settings",
      icon: <HiOutlineCog />,
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col justify-center items-center w-full h-1/5 gap-2">
        <div className="flex -space-x-1 overflow-hidden">
          <Link to="/home/profile">
            <img
              className="inline-block h-20 w-20 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </Link>
        </div>
        <div className="text-l font-medium">Saral Singh</div>
      </div>

      <div>
        {menuItem.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="flex items-center text-gray-400 gap-x-4 p-2 m-2 hover:bg-indigo-50 hover:text-black rounded-md"
          >
            <div className="text-2xl">{item.icon}</div>
            <div className="text-l font-normal">{item.name}</div>
          </Link>
        ))}
      </div>

      {/*Last div*/}
      <div className="flex mt-auto w-full items-center ">
        <Link to="/home/projects">
          <div className="flex text-gray-400 gap-x-4 p-2 m-2 hover:bg-indigo-50 hover:text-black rounded-md ">
            <div className="text-2xl">
              <HiOutlineSquare3Stack3D />
            </div>
            <div className="text-l font-normal">Projects</div>
          </div>
        </Link>
        <Link to="">
          <div className="text-gray-400 gap-x-4 p-2 m-2 hover:bg-indigo-50 hover:text-black rounded-md justify-end">
            <HiOutlineChevronUp />
          </div>
        </Link>
        <Link to="/home/newproject">
          <div className="text-gray-400 gap-x-4 p-2 m-2 hover:bg-indigo-50 hover:text-black rounded-md justify-end">
            <HiOutlinePlus />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
