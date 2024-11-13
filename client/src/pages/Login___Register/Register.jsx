import { Link } from "react-router-dom";
import { memo } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaHome } from "react-icons/fa";
import { ar } from "date-fns/locale";
import { FaCalendarAlt } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Register.css";

registerLocale("ar", ar);

function Register({ eventClick }) {
  const validationSchema = Yup.object({
    userName_reg: Yup.string()
      .required("هذا الحقل مطلوب")
      .min(5, "أقل قيمه   هي 5 حروف"),
    email_reg: Yup.string()
      .email("هذا البريد الإلكتروني غير صالح")
      .required("حقل البريد الإلكتروني مطلوب"),
    password_reg: Yup.string().required("هذا الحقل مطلوب"),
    password_reg_2: Yup.string().required("هذا الحقل مطلوب"),
    date_reg: Yup.date().required("هذا الحقل مطلوب"),
  });
  const formik = useFormik({
    initialValues: {
      userName_reg: "",
      email_reg: "",
      password_reg: "",
      password_reg_2: "",
      date_reg: null,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="face face-2 overflow-y-auto  w-full min-h-[75vh] ">
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
                  value={formik.values.userName_reg}
                  onChange={formik.handleChange}
                />
                {(formik.touched.userName_reg || formik.isSubmitting) &&
                  formik.errors.userName_reg && (
                    <span className="text-red-500 text-sm absolute -bottom-[6px] w-full right-0">
                      {formik.errors.userName_reg}
                    </span>
                  )}
              </div>
              <div className="password_reg  w-full relative">
                <label
                  htmlFor="password_reg"
                  className=" text-sm mb-4 block sm:text-base "
                >
                  كلمة المرور :
                </label>

                <input
                  className="bg-[#eee] mb-4 w-full h-8 px-2"
                  type={"text"}
                  name="password_reg"
                  id="password_reg"
                  value={formik.values.password_reg}
                  onChange={formik.handleChange}
                />
                {(formik.touched.password_reg || formik.isSubmitting) &&
                  formik.errors.password_reg && (
                    <span className="text-red-500 text-sm absolute -bottom-[6px] w-full right-0">
                      {formik.errors.password_reg}
                    </span>
                  )}
              </div>
              <div className="password_reg_2 w-full relative">
                <label
                  htmlFor="password_reg_2"
                  className=" text-sm mb-4 block sm:text-base "
                >
                  اعد كتابة كلمة المرور :
                </label>
                <input
                  type="text"
                  name="password_reg_2"
                  id="password_reg_2"
                  autoFocus
                  className="bg-[#eee] h-8 mb-4 w-full px-2"
                  value={formik.values.password_reg_2}
                  onChange={formik.handleChange}
                />
                {(formik.touched.password_reg_2 || formik.isSubmitting) &&
                  formik.errors.password_reg_2 && (
                    <span className="text-red-500 text-sm absolute -bottom-[6px] w-full right-0">
                      {formik.errors.password_reg_2}
                    </span>
                  )}
              </div>
              <div className="email_reg  w-full relative">
                <label
                  htmlFor="email_reg"
                  className=" text-sm mb-4 block sm:text-base "
                >
                  البريد اللإلكتروني :
                </label>

                <input
                  className="bg-[#eee] mb-4 w-full h-8 px-2"
                  type={"text"}
                  name="email_reg"
                  id="email_reg"
                  value={formik.values.email_reg}
                  onChange={formik.handleChange}
                />
                {(formik.touched.email_reg || formik.isSubmitting) &&
                  formik.errors.email_reg && (
                    <span className="transition-all text-red-500 text-sm absolute -bottom-[25px] sm:-bottom-[6px] w-full right-0">
                      {formik.errors.email_reg}
                    </span>
                  )}
              </div>
              <div className="date">
                <div>
                  <label
                    htmlFor="date_reg"
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
                      value={formik.values.date_reg}
                      selected={formik.values.date_reg}
                      onChange={(date) =>
                        formik.setFieldValue("date_reg", date)
                      }
                      locale="ar"
                      dateFormat="dd-MM-yyyy"
                      className=" bg-white border border-gray-300 text-gray-700 font-[--mainFont] text-sm md:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-8 md:ps-12 p-3"
                      placeholderText="00-00-0000"
                      calendarClassName="font-[--mainFont] ahmed "
                      id="date_reg"
                      name="date_reg"
                    />
                    {(formik.touched.date_reg || formik.isSubmitting) &&
                      formik.errors.date_reg && (
                        <span className="transition-all text-red-500 text-sm absolute -bottom-[25px] md:-bottom-[25px] w-full right-0">
                          {formik.errors.date_reg}
                        </span>
                      )}
                  </div>
                </div>
              </div>
            </div>

            <div className="row_buttons mt-8 lg:mt-4 2xl:mt-10 w-10/12 mx-auto flex  justify-center gap-4 ">
              <input
                className="bg-[--btn-bg]  border border-[--btn-bg]  hover:bg-[transparent] transition cursor-pointer hover:text-[--btn-bg] h-8 basis-2/4 rounded-[5px] text-[#FFF7D1]"
                type="submit"
                name="send"
                value=" إنشاء حساب"
                onClick={(e) => {
                  e.preventDefault();
                  formik.handleSubmit(e);
                }}
              />
              <button
                onClick={eventClick}
                className="newUser_btn border border-[--btn-bg] hover:bg-[--btn-bg] hover:text-[#FFF7D1] text-[--btn-bg] transition h-8 basis-2/4 rounded-[5px] "
              >
                تسجيل الدخول
              </button>
            </div>
          </form>
        </div>
        <div className="img w-2/4 hidden  lg:block ">
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
