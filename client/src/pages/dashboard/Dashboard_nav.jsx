import React, { memo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";

import { MdOutlinePlayLesson } from "react-icons/md";
import { useSelector } from "react-redux";

function Dashboard_nav({ userName , theIf=null}) {
  const data = useSelector(state => state.lessons.data)
  const lessons = data && data || [] 
  
  const [nav_ac_IsClick, stet_nav_ac_IsClick] = useState(false);
  return (
    <div className="dsh-nav bg-white rounded-[0px]  overflow-hidden text-center ">
      <div className="hidden md:block nav-top">
        <h2 className="p-5 text-xl mt-2 ">
          مرحباً يا{" "}
          <span className="text-[--c-text-yellow]">
            {userName && userName.split(" ")[0]}
          </span>
        </h2>
        <span className="block w-2/4 h-[2px] bg-[#777] mx-auto" />
      </div>
      <div className="nv-links flex justify-center items-center flex-col mt-20 gap-5">
        <NavLink
          to={"/dashboard/home"}
          className="w-[100%] hover:text-[--c-text-yellow] p-1 pl-0 lg:pl-6 flex justify-center md:justify-start items-center gap-0"
        >
          <span className="icon text-xl md:mx-5 p-2 rounded-lg">
            <MdOutlineSpaceDashboard />
          </span>
          <span className="hidden md:block">لوحة التحكم</span>
        </NavLink>
        {theIf && lessons.length > 0 &&
          <div className="w-full transition overflow-hidden">
            <div
              onClick={() => stet_nav_ac_IsClick(!nav_ac_IsClick)}
              className="nav-acordion relative transition cursor-pointer w-[100%] hover:opacity-[.8] p-1 pl-0 lg:pl-6 flex justify-center md:justify-start items-center gap-0"
            >
              <span className="icon text-xl  md:mx-5 p-2 rounded-lg">
                <MdOutlinePlayLesson />
              </span>
              <h2 className="hidden md:inline-block">قائمة الدروس </h2>
              <span
                style={{
                  transform: `${nav_ac_IsClick
                    ? "rotate(0deg)"
                    : "rotate(180deg)"}`
                }}
                className="hidden arrow-ac absolute left-1/4 p-1 md:inline-block  mr-4 text-lg rounded-full text-white bg-[--c-text-yellow]"
              >
                <MdKeyboardArrowDown />
              </span>
            </div>
            <div
              className={`content-navAC ${nav_ac_IsClick
                ? "h-max "
                : "h-0"} p-2  overflow-hidden transition`}
            >
              <div
                className={`${nav_ac_IsClick
                  ? "h-max  "
                  : "h-0 overflow-hidden"}  absolute z-40 md:relative  bg-white rounded-xl`}
              >
                <div className="navAc-content relative">
                  <span
                    onClick={() => stet_nav_ac_IsClick(!nav_ac_IsClick)}
                    className={` md:hidden text-2xl absolute top-2 left-2 hover:text-[--c-text-yellow] transition cursor-pointer`}
                  >
                    <IoCloseCircleOutline />
                  </span>

                  {lessons.length > 0 &&
                    lessons.map((ele, inx) =>
                      <NavLink
                        to={{
                          pathname: `/dashboard/lesson/${ele.order}`,
                        }}
                        key={inx}
                        className="flex text-[--c-text-blue] text-base flex-row-reverse justify-end items-center w-full p-2"
                      >
                        <span className="text-right">
                          <span>
                            {ele.title}
                          </span>
                        </span>
                        <span className="text-xl mx-2 font-semibold">
                          <HiArrowNarrowLeft />
                        </span>
                      </NavLink>
                    )}
                </div>
              </div>
            </div>
          </div>}

        <NavLink
          to={"/dashboard/info"}
          className="w-[100%]  hover:text-[--c-text-yellow] p-1 pl-0 lg:pl-6 flex justify-center md:justify-start items-center gap-0"
        >
          <span className="icon text-xl md:mx-5 p-2  rounded-lg">
            <MdInfoOutline />
          </span>
          <span className="hidden md:block">معلوماتي</span>
        </NavLink>
      </div>
    </div>
  );
}
export default memo(Dashboard_nav);
