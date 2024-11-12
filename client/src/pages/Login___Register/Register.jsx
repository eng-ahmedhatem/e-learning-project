import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaHome } from "react-icons/fa";
import { ar } from "date-fns/locale";
import { FaCalendarAlt } from "react-icons/fa";
import "./Register.css";

registerLocale("ar", ar);

export default function Register() {
  const [startDate, setStartDate] = useState("");

  return (
    <div className="face face-2 overflow-y-auto  w-full min-h-[75vh] face-1 ">
      <div className="parent-tow-cont  flex h-[75vh] content-sign-up">
        <div className="content w-full lg:w-2/4 p-4 py-11 md:p-11 ">
          <Link
            to={"/"}
            className="flex text-[--btn-bg] text-l items-center transition hover:opacity-50 mb-2 lg:mb-5"
          >
            <span className="ml-2 text-3xl">
              <FaHome />
            </span>
            <span>العودة للصفحة الرئيسية</span>
          </Link>
          <div className=" text-start  w-full ">
            <h2 className="text-2xl  sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-5">
              أهلاً بكم في بيئتنا الداعمة للنمو والتطور !
            </h2>
            <p className="text-xl lg:text-3xl mb-2 sm:mb-9 ">
              يسعدنا أن نكون جزءًا من رحلتكم التعليمية
            </p>
          </div>
          <form action="" className="pb-11 md:pb-0">
            <div className="row-fill w-full  mx-auto  grid   grid-cols-2  gap-5 justify-center items-center">
              <div className="userName_reg w-full relative">
                <label
                  htmlFor="userName_reg"
                  className=" text-sm mb-4 block sm:text-base "
                >
                  إسم المستخدم :
                </label>
                <input
                  type="text"
                  name="userName_reg"
                  id="userName_reg"
                  autoFocus
                  className="bg-[#eee] h-8 mb-4 w-full px-2"
                  value={""}
                  onChange={""}
                />
                <span className="text-red-500 text-sm absolute -bottom-[6px] w-full right-0">
                  كلمه المرور خاطئة
                </span>
              </div>
              <div className="userPassword_reg  w-full relative">
                <label
                  htmlFor="userPassword_reg"
                  className=" text-sm mb-4 block sm:text-base "
                >
                  كلمة المرور :
                </label>

                <input
                  className="bg-[#eee] mb-4 w-full h-8 px-2"
                  type={"text"}
                  name="userPassword_reg"
                  id="userPassword_reg"
                  value={""}
                  onChange={""}
                />
                <span className="text-red-500 text-sm absolute -bottom-[6px] w-full right-0">
                  كلمه المرور خاطئة
                </span>
              </div>
              <div className="userName_reg w-full relative">
                <label
                  htmlFor="checkPass"
                  className=" text-sm mb-4 block sm:text-base "
                >
                  اعد كتابة كلمة المرور :
                </label>
                <input
                  type="text"
                  name="checkPass"
                  id="checkPass"
                  autoFocus
                  className="bg-[#eee] h-8 mb-4 w-full px-2"
                  value={""}
                  onChange={""}
                />
                <span className="text-red-500 text-sm absolute -bottom-[6px] w-full right-0">
                  كلمه المرور خاطئة
                </span>
              </div>
              <div className="email  w-full relative">
                <label
                  htmlFor="email"
                  className=" text-sm mb-4 block sm:text-base "
                >
                  البريد اللإلكتروني :
                </label>

                <input
                  className="bg-[#eee] mb-4 w-full h-8 px-2"
                  type={"text"}
                  name="email"
                  id="email"
                  value={""}
                  onChange={""}
                />
                <span className="text-red-500 text-sm absolute -bottom-[6px] w-full right-0">
                  كلمه المرور خاطئة
                </span>
              </div>
              <div className="date">
                <div>
                  <label
                    htmlFor="date"
                    className="mb-4 block text-sm sm:text-base "
                  >
                    ادخل تاريخ ميلادك :
                  </label>
                  <div className="relative max-w-sm">
                    <div className="absolute top-0 left-0 z-10 inset-y-0 start-0 flex items-center ps-1 md:ps-3.5 pointer-events-none">
                      <FaCalendarAlt
                        className="w-6 h-6 text-[#a577ff]"
                        aria-hidden="true"
                      />
                    </div>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      locale="ar"
                      dateFormat="dd MMMM yyyy"
                      className=" bg-white border border-gray-300 text-gray-700 font-[--mainFont] text-sm md:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-8 md:ps-12 p-3"
                      placeholderText="اختر التاريخ"
                      calendarClassName="font-[--mainFont] ahmed "
                      id="date"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row_buttons mt-5 lg:mt-4 2xl:mt-8 w-10/12 mx-auto flex  justify-center gap-4 ">
              <input
                className="bg-[--btn-bg]  border border-[--btn-bg]  hover:bg-[transparent] transition cursor-pointer hover:text-[--btn-bg] h-8 basis-2/4 rounded-[5px] text-[#FFF7D1]"
                type="submit"
                name="send"
                value=" إنشاء حساب"
              />
              <button className="newUser_btn border border-[--btn-bg] hover:bg-[--btn-bg] hover:text-[#FFF7D1] text-[--btn-bg] transition h-8 basis-2/4 rounded-[5px] ">
                تسجيل الدخول
              </button>
            </div>
          </form>
        </div>
        <div className="img w-2/4 hidden lg:block ">
          <img
            src="./imgs/Login___Register/e-learning_signIn.webp"
            className="h-full w-full object-cover "
            alt="img-login"
          />
        </div>
      </div>
    </div>
  );
}
