import React, { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";


function Dashboard_nav({userName}) {
  return (
    <div className="dsh-nav bg-white rounded-[0px]  overflow-hidden text-center ">
      <div className="hidden md:block nav-top">
        <h2 className="p-5 text-xl mt-2 ">
          مرحباً بك يا <span className="text-[--c-text-yellow]">{userName && userName.split(" ")[0]}</span>
        </h2>
        <span className="block w-2/4 h-[2px] bg-[#777] mx-auto" />
      </div>
      <div className="nv-links flex justify-center items-center flex-col mt-20 gap-8">
        <NavLink
          to={"/dashboard/home"}
          className="w-[100%] hover:text-[--c-text-yellow] p-1 pl-0 lg:pl-6 flex justify-center items-center gap-5"
        >
          <span className="icon text-xl  p-2 rounded-lg">
            <MdOutlineSpaceDashboard />
          </span>
          <span className="hidden md:block">لوحة التحكم</span>
        </NavLink>
        <NavLink
          to={"/dashboard/info"}
          className="w-[100%] hover:text-[--c-text-yellow] p-1 pl-0 lg:pl-6 flex justify-center items-center gap-5"
        >
          <span className="icon text-xl  p-2  rounded-lg">
            <MdInfoOutline />
          </span>
          <span className="hidden md:block">معلوماتي</span>
        </NavLink>
       
      </div>
    </div>
  );
}
export default memo(Dashboard_nav);
