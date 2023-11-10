import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  return (
    <>
      <div className="flex">
        <div className="bg-white w-1/5 h-screen">
            <Sidebar />
        </div>
        <div className="h-screen w-full bg-indigo-50">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
