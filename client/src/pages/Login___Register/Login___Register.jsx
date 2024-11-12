import "./Login___Register.css";
import { FcGoogle } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Aleart } from "../../component";
import Register from "./Register";

export default function Login___Register() {
  const [formData_login, setFormData_Login] = useState({
    userName_login: "",
    userPassword_login: "",
    remember_me: false,
    password_hiddenUi: true,
    error: {
      member: "",
    },
  });

  function handel_loginForm(e) {
    setFormData_Login({ ...formData_login, [e.target.name]: e.target.value });
  }
  function remember(e) {
    if (!formData_login.userName_login && !formData_login.userPassword_login) {
      return e.preventDefault();
    }
    if (e.target.checked) {
      localStorage.setItem("FormData_login", JSON.stringify(formData_login));
      return;
    }
    localStorage.removeItem("FormData_login");
  }
  function handelCheck_remember(e) {
    setFormData_Login({
      ...formData_login,
      remember_me: !formData_login.remember_me,
    });

    if (!formData_login.userName_login || !formData_login.userPassword_login) {
      e.preventDefault();
      setFormData_Login({
        ...formData_login,
        error: {
          ...formData_login.error,
          member: {
            title: "حقول فارغة",
            type: "danger",
            body: "من فضلك اكمل الحقول الفارغة لكي استطيع تذكر البيانات المدخله 🙂 ",
          },
        },
      });
    }

    const to = setTimeout(() => {
      setFormData_Login({
        ...formData_login,
        error: { ...formData_login.error, member: "" },
      });
    }, 5000);
    return () => clearTimeout(to);
  }
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("FormData_login"));

    if (localData) {
      setFormData_Login({
        ...localData,
        remember_me: !formData_login.remember_me,
      });
      console.log(formData_login);
      // setFormData_Login(localData);
    }
  }, []);
  return (
    <div>
      {formData_login.error.member && (
        <Aleart
          title={formData_login.error.member.title}
          type={formData_login.error.member.type}
          body={formData_login.error.member.body}
        />
      )}

      <div className="parent w-full h-screen flex justify-center items-center bg-[#f6f5f7]">
        <div className="relative parent-log_reg rounded-3xl overflow-hidden min-h-[75vh]  shadow-xl w-11/12">
          <div className="face face-1  w-full min-h-[75vh]">
            <div className="parent-tow-cont  flex h-[75vh] content-sign-up">
              <div className="content w-full lg:w-2/4 p-11 ">
                <Link
                  to={"/"}
                  className="flex text-[#8B5DFF] text-l items-center transition hover:opacity-50 mb-2 lg:mb-5"
                >
                  <span className="ml-2 text-3xl">
                    <FaHome />
                  </span>
                  <span>العودة للصفحة الرئيسية</span>
                </Link>
                <div className=" text-start  w-full ">
                  <h2 className="text-2xl  sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-5">
                    مرحبا بك من جديد قم بتسجيل الدخول الأن
                  </h2>
                  <p className="text-xl lg:text-3xl mb-2 sm:mb-9 ">
                    من الرائع عودتك !
                  </p>
                </div>
                <form action="" className="">
                  <div className="row-fill w-full lg:w-10/12 mx-auto  flex flex-col justify-center items-center">
                    <div className="userName_login w-full mb-4 relative">
                      <label htmlFor="userName_login" className="mb-4 block">
                        إسم المستخدم :
                      </label>

                      <input
                        type="text"
                        name="userName_login"
                        id="userName_login"
                        autoFocus
                        className="bg-[#eee] h-8 mb-4 w-full px-2"
                        value={formData_login.userName_login}
                        onChange={handel_loginForm}
                      />
                      <span className="text-red-500 text-sm absolute -bottom-[6px] w-full right-0">
                        كلمه المرور خاطئة
                      </span>
                    </div>
                    <div className="userPassword_login mb-8 w-full relative">
                      <label
                        htmlFor="userPassword_login"
                        className="mb-4 block"
                      >
                        كلمة المرور :
                      </label>
                      {formData_login.password_hiddenUi ? (
                        <img
                          onClick={() =>
                            setFormData_Login({
                              ...formData_login,
                              password_hiddenUi:
                                !formData_login.password_hiddenUi,
                            })
                          }
                          className=" h-6 top-2/4 -translate-y-[1%] opacity-30 hover:opacity-100 left-3 cursor-pointer transition absolute"
                          src="./imgs/Login___Register/view.png"
                          alt=""
                        />
                      ) : (
                        <img
                          onClick={() =>
                            setFormData_Login({
                              ...formData_login,
                              password_hiddenUi:
                                !formData_login.password_hiddenUi,
                            })
                          }
                          className=" h-6 top-2/4 -translate-y-[1%] opacity-30 hover:opacity-100 left-3 cursor-pointer transition absolute"
                          src="./imgs/Login___Register/hide.png"
                          alt=""
                        />
                      )}

                      <input
                        className="bg-[#eee] mb-4 w-full h-8 px-2"
                        type={
                          formData_login.password_hiddenUi ? "password" : "text"
                        }
                        name="userPassword_login"
                        id="userPassword_login"
                        value={formData_login.userPassword_login}
                        onChange={handel_loginForm}
                      />
                      <span className="text-red-500 text-sm absolute -bottom-[6px] w-full right-0">
                        كلمه المرور خاطئة
                      </span>
                    </div>
                  </div>
                  <div className="row-remember_forget flex justify-evenly items-center ">
                    <div className="checkbox-wrapper-33">
                      <label className="checkbox">
                        <input
                          onChange={remember}
                          onClick={handelCheck_remember}
                          className="checkbox__trigger visuallyhidden"
                          type="checkbox"
                          checked={formData_login.remember_me}
                        />
                        <span className="checkbox__symbol ">
                          <svg
                            aria-hidden="true"
                            className="icon-checkbox"
                            width="28px"
                            height="28px"
                            viewBox="0 0 28 28"
                            version="1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M4 14l8 7L24 7"></path>
                          </svg>
                        </span>
                        <p className="checkbox__textwrapper">تذكرني ؟</p>
                      </label>
                    </div>
                    <span className="text-[#8B5DFF] cursor-pointer transition hover:opacity-50">
                      نسيت كلمة المرور ؟
                    </span>
                  </div>
                  <div className="row_buttons mt-5 lg:mt-4 2xl:mt-8 w-10/12 mx-auto flex  justify-center gap-4 ">
                    <input
                      className="bg-[#8B5DFF]  border border-[#8B5DFF]  hover:bg-[transparent] transition cursor-pointer hover:text-[#8B5DFF] h-8 basis-2/4 rounded-[5px] text-[#FFF7D1]"
                      type="submit"
                      name="send"
                      value="تسجيل الدخول"
                    />
                    <button className="newUser_btn border border-[#8B5DFF] hover:bg-[#8B5DFF] hover:text-[#FFF7D1] text-[#8B5DFF] transition h-8 basis-2/4 rounded-[5px] ">
                      إنشاء حساب
                    </button>
                  </div>
                </form>
                <div className="orLogin flex justify-center items-center flex-col mt-6  2xl:mt-11">
                  <h3 className="mb-4">أو تسجيل الدخول من خلال</h3>
                  <a href="" className="flex items-center justify-center">
                    <span className="text-3xl">
                      <FcGoogle />
                    </span>
                    <span className="text-2xl font-sans">Google</span>
                  </a>
                </div>
              </div>
              <div className="img  w-2/4 hidden lg:block relative ">
                <img
                  src="./imgs/Login___Register/e-learning_login.webp"
                  className="h-full  w-full absolute lg:-bottom-[97px] 2xl:-bottom-[53px] right-0 object-cover "
                  alt="img-login"
                />
              </div>
            </div>
          </div>

          <Register/>
        </div>
      </div>
    </div>
  );
}
