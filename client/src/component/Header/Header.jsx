import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";

export default function Header() {
  const isLogin = useSelector(state => state.user.isLogin);
  const [isActive, setIs_active] = useState(false);
  useEffect(() => {
    document.addEventListener("click", e => {
      if (e.target.closest(".toggle")) return;
      setIs_active(false);
    });
    return () => {
      document.removeEventListener("click", () => {});
    };
  }, []);
  return (
    <header className="p-1">
      <div className="container mx-auto p-2">
        <h6
          id="main-title"
          className="transition text-[12px] lg:text-base text-neutral-400 text-center text-[--]"
        >
          الكمبيوتر وتكنولوجيا المعلومات والإتصالات للصف الأول اللإعدادي
        </h6>
      </div>
      <div className="container  mx-auto flex justify-between items-center">
        <div className="links w-full lg:w-max relative flex  justify-between items-center ">
          <div className="logo ml-4 w-20 h-20">
            <a href="https://moe.gov.eg/">
              <img src="/imgs/header/وزارة التربية والتعليم.svg" alt="Logo" />
            </a>
          </div>
          <div className="toggle__container relative w-max h-max">
            <div
              className={`toggle ${isActive && "active"} lg:!hidden`}
              onClick={() => setIs_active(!isActive)}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <nav
            className={`absolute  w-full transition lg:static ${isActive &&
              "active"}`}
          >
            <ul className="flex-col lg:flex-row  flex gap-1 justify-between items-center ">
              <li>
                <NavLink
                  to="/"
                  className={` p-5 block lg:px-2 xl:px-5 ${({ isActive }) =>
                    isActive &&
                    "active"} text-[#000] hover:text-[--c-text-yellow] transition`}
                >
                  الرئيسية
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/objectives"
                  className={` p-5 block lg:px-2 xl:px-5 ${({ isActive }) =>
                    isActive &&
                    "active"} text-[#000] hover:text-[--c-text-yellow] transition`}
                >
                  الأهداف
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/guide"
                  className={` p-5 block lg:px-2 xl:px-5 ${({ isActive }) =>
                    isActive &&
                    "active"} text-[#000] hover:text-[--c-text-yellow] transition`}
                >
                  دليل المٌعـــلم
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact-us"
                  className={` p-5 block lg:px-2 xl:px-5 ${({ isActive }) =>
                    isActive &&
                    "active"} text-[#000] hover:text-[--c-text-yellow] transition`}
                >
                  تواصل معنا
                </NavLink>
              </li>
              <li className="m-5 lg:hidden block login_And_Register scale-95 hover:scale-100 transition">
                <Link
                  to={"/login-register"}
                  className="bg-[--c-text-yellow] p-2 rounded-sm hover:bg-transparent border border-[--c-text-yellow] hover:text-[--c-text-yellow] transition "
                >
                  تسجيل الدخول أو إنشاء حساب جديد
                </Link>{" "}
              </li>
            </ul>
          </nav>
        </div>
        {isLogin
          ? <div className="hidden lg:block  scale-95 hover:scale-100 transition">
              <Link
                to={"/dashboard/home"}
                className="bg-blue-500 p-2 rounded-sm hover:bg-transparent border hover:border-blue-500 hover:text-blue-500 transition "
              >
                الذهاب الى لوحة التحم
              </Link>
            </div>
          : <div className="hidden lg:block hover:animate-none login_And_Register scale-95 hover:scale-100 transition">
              <Link
                to={"/login-register"}
                className="bg-[--c-text-yellow] p-2 rounded-sm hover:bg-transparent border border-[--c-text-yellow] hover:text-[--c-text-yellow] transition "
              >
                تسجيل الدخول أو إنشاء حساب جديد
              </Link>
            </div>}
      </div>
    </header>
  );
}
