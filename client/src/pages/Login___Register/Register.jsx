import axios from "axios";
import {
  user_isLoaning,
  user_notLoaning,
  user_isLogin,
  user_data,
  user_error
} from "../../slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { memo, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaHome } from "react-icons/fa";
import { ar } from "date-fns/locale";
import { FaCalendarAlt } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { TiUserAdd } from "react-icons/ti";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Register.css";

registerLocale("ar", ar);

function Register({ eventClick }) {
  const isLoading = useSelector(state => state.user.isLoading);

  const navigate = useNavigate(null);
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    userName_reg: Yup.string()
      .required("هذا الحقل مطلوب")
      .min(5, "أقل قيمه   هي 5 حروف"),
    email_reg: Yup.string()
      .email("هذا البريد الإلكتروني غير صالح")
      .required("حقل البريد الإلكتروني مطلوب"),
    password_reg: Yup.string().required("هذا الحقل مطلوب"),
    // password_reg_2: Yup.string().required("هذا الحقل مطلوب"),
    date_reg: Yup.date().required("هذا الحقل مطلوب")
  });
  function handelNew_user(values) {
    const theGroup = ["control", "ex"];
    const random = Math.ceil(Math.random() * 2) - 1;
    dispatch(user_isLoaning());

    const jsonData = JSON.stringify({
      userName: values.userName_reg.trim(),
      email: values.email_reg.trim(),
      password: values.password_reg.trim(),
      role: "student",
      group: theGroup[random],
      date: values.date_reg.toISOString().split("T")[0]
    }); // تعيين الرؤوس لتحديد نوع المحتوى
    axios
      .post("/api/auth/register", jsonData)
      .then(response => {
        dispatch(user_isLogin());
        dispatch(user_notLoaning());
        dispatch(user_data(response.data));
        navigate("/dashboard/home");
      })
      .catch(error => {
        console.log(error);
        dispatch(user_error(error.response.data.message));
        setTimeout(() => {
          dispatch(user_error(null));
        }, 5000);
      });
  }
  const formik = useFormik({
    initialValues: {
      userName_reg: "",
      email_reg: "",
      password_reg: "",
      // password_reg_2: "",
      date_reg: null
    },
    validationSchema,
    onSubmit: values => handelNew_user(values)
  });

  return (
    <div className="face face-2 overflow-y-auto  w-full min-h-[90vh] ">
      <div className=" parent-tow-cont  flex h-[75vh] content-sign-up">
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
            <h2 className="text-2xl text-[#0ca9be] sm:text-3xl lg:text-2xl xl:text-4xl font-bold mb-2 sm:mb-5">
              أهلاً بكم في بيئتنا الداعمة للنمو والتطور !
            </h2>
            <p className="text-xl text-[#dc41539e] lg:text-1xl mb-2 sm:mb-9 ">
              يسعدنا أن نكون جزءًا من رحلتكم التعليمية
            </p>
          </div>
          <form action="" className=" md:pb-0">
            <div className="row-fill w-full  mx-auto  grid   grid-cols-2  gap-2 justify-center items-center">
              <div className="input-an userName_reg w-full relative">
                <label
                  htmlFor="userName_reg"
                  className=" text-sm text-[--c-text-yellow] mb-4 block sm:text-base "
                >
                  إسم المستخدم :
                </label>
                <div className="mb-4 w-full h-max overflow-hidden">
                  <input
                    type="text"
                    name="userName_reg"
                    id="userName_reg"
                    autoFocus
                    className="bg-[--input-bg] h-8 w-full px-2"
                    value={formik.values.userName_reg}
                    onChange={formik.handleChange}
                  />
                  <span className="inp_anim" />
                </div>
                {(formik.touched.userName_reg || formik.isSubmitting) &&
                  formik.errors.userName_reg &&
                  <span className="text-red-500 text-sm absolute -bottom-[6px] w-full right-0">
                    {formik.errors.userName_reg}
                  </span>}
              </div>
              <div className="input-an  password_reg  w-full relative">
                <label
                  htmlFor="password_reg"
                  className=" text-sm mb-4 block text-[--c-text-yellow] sm:text-base "
                >
                  كلمة المرور :
                </label>
                <div className="mb-4 w-full h-max overflow-hidden">
                  <input
                    className="bg-[--input-bg]   w-full h-8 px-2"
                    type={"text"}
                    name="password_reg"
                    id="password_reg"
                    value={formik.values.password_reg}
                    onChange={formik.handleChange}
                  />
                  <span className="inp_anim" />
                </div>
                {(formik.touched.password_reg || formik.isSubmitting) &&
                  formik.errors.password_reg &&
                  <span className="text-red-500 text-sm absolute -bottom-[6px] w-full right-0">
                    {formik.errors.password_reg}
                  </span>}
              </div>
              {/* <div className="input-an  password_reg_2 w-full relative">
                <label
                  htmlFor="password_reg_2"
                  className=" text-sm mb-4 block text-[--c-text-yellow] sm:text-base "
                >
                  اعد كتابة كلمة المرور :
                </label>
                <div className="mb-4 w-full h-max overflow-hidden">
                <input
                  type="text"
                  name="password_reg_2"
                  id="password_reg_2"
                  autoFocus
                  className="bg-[--input-bg] h-8  w-full px-2"
                  value={formik.values.password_reg_2}
                  onChange={formik.handleChange}
                />
                                        <span className="inp_anim"></span>

                  </div>
                {(formik.touched.password_reg_2 || formik.isSubmitting) &&
                  formik.errors.password_reg_2 && (
                    <span className="text-red-500 text-sm absolute -bottom-[6px] w-full right-0">
                      {formik.errors.password_reg_2}
                    </span>
                  )}
              </div> */}

              <div className="input-an  email_reg  w-full relative">
                <label
                  htmlFor="email_reg"
                  className=" text-sm mb-4 text-[--c-text-yellow] block sm:text-base "
                >
                  البريد اللإلكتروني :
                </label>
                <div className="mb-4 w-full h-max overflow-hidden">
                  <input
                    className="bg-[--input-bg] w-full h-8 px-2"
                    type={"text"}
                    name="email_reg"
                    id="email_reg"
                    value={formik.values.email_reg}
                    onChange={formik.handleChange}
                  />
                  <span className="inp_anim" />
                </div>
                {(formik.touched.email_reg || formik.isSubmitting) &&
                  formik.errors.email_reg &&
                  <span className="transition-all text-red-500 text-sm absolute -bottom-[25px] sm:-bottom-[6px] w-full right-0">
                    {formik.errors.email_reg}
                  </span>}
              </div>
              <br />
              <div className="date">
                <div>
                  <label
                    htmlFor="date_reg"
                    className="mb-4 text-[--c-text-yellow] block text-sm sm:text-base "
                  >
                    ادخل تاريخ ميلادك :
                  </label>
                  <div className="relative max-w-sm">
                    <div className="absolute top-0 left-0 z-10 inset-y-0 start-0 flex items-center ps-1 md:ps-3.5 pointer-events-none">
                      <FaCalendarAlt
                        className="w-6 h-6 text-[--btn-bg]"
                        aria-hidden="true"
                      />
                    </div>
                    <DatePicker
                      value={formik.values.date_reg}
                      selected={formik.values.date_reg}
                      onChange={date => formik.setFieldValue("date_reg", date)}
                      locale="ar"
                      dateFormat="dd-MM-yyyy"
                      className=" bg-white border border-gray-300 text-[--btn-bg] font-[--mainFont] text-sm md:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-8 md:ps-12 p-3"
                      placeholderText="00-00-0000"
                      calendarClassName="font-[--mainFont] ahmed "
                      id="date_reg"
                      name="date_reg"
                    />
                    {(formik.touched.date_reg || formik.isSubmitting) &&
                      formik.errors.date_reg &&
                      <span className="transition-all text-red-500 text-sm absolute -bottom-[25px] md:-bottom-[25px] w-full right-0">
                        {formik.errors.date_reg}
                      </span>}
                  </div>
                </div>
              </div>
            </div>

            <div className="row_buttons  mt-8 lg:mt-4 2xl:mt-10 w-full lg:w-10/12 mx-auto flex  justify-center gap-4 ">
              <div
                onClick={formik.handleSubmit}
                className={` ${isLoading && "pointer-events-none opacity-[.90]"} bg-[--btn-bg] flex scale-95 hover:scale-105 justify-center items-center h-[40px]  border border-[--btn-bg]  hover:bg-[transparent] transition cursor-pointer hover:text-[--btn-bg]  basis-2/4 rounded-[5px] text-[#FFF7D1]`}
              >
                {isLoading
                  ? <div className="animate-spin rounded-full h-[30px] w-[30px] border-t-2 border-b-2 border-[#ffffff]" />
                  : <div className="flex justify-center items-center">
                      <span className="text-2xl ml-4 block ">
                        <TiUserAdd />
                      </span>
                      <input
                        type="submit"
                        name="send"
                        value=" إنشاء حساب"
                        className="cursor-pointer"
                      />
                    </div>}
              </div>
              <div
                onClick={eventClick}
                className=" scale-95 hover:scale-105 newUser_btn flex justify-center cursor-pointer animate-none vibrate-1 items-center h-[40px]  border border-[--btn-bg] hover:bg-[--btn-bg] hover:text-[#FFF7D1] text-[--btn-bg] transition  basis-2/4 rounded-[5px] "
              >
                <span className="text-2xl ml-4 block">
                  <LuLogIn />
                </span>
                <button>تسجيل الدخول</button>
              </div>
            </div>
          </form>
        </div>
        <div className="img w-2/4 hidden rotate-h lg:block ">
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
export default memo(Register);
