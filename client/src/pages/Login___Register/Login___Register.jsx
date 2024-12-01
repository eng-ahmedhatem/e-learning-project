import "./Login___Register.css";
import { FcGoogle } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Aleart } from "../../component";
import Register from "./Register";
import { LuLogIn } from "react-icons/lu";
import { TiUserAdd } from "react-icons/ti";
import axios from "axios";
import {user_isLoaning ,user_notLoaning ,user_isLogin, user_data , user_error} from "../../slice/userSlice"
import { useDispatch, useSelector } from "react-redux";

export default function Login___Register() {
  const isLogin = useSelector(state => state.user.isLogin)
  useEffect(()=>{
    if (isLogin) {
      navigate("/")
      return;
      
    }
  },[])
  const error = useSelector(state => state.user.error)
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.user.isLoading);
  const [mode, setMode] = useState(false);
  const [rememberMe, setRemember] = useState(false);
  const [img_inputPassword, setImg] = useState(true);
  const navigate = useNavigate(null)
  const [checkLocal_storage, set_checkLocal_storage] = useState(
    JSON.parse(localStorage.getItem("FormData_login"))
  );
  useEffect(
    () => {
      if (checkLocal_storage) {
        setRemember(!rememberMe);
      }
    },
    [checkLocal_storage]
  );
  const validationSchema = Yup.object({
    userName_login: Yup.string().required("هذا الحقل مطلوب"),
    userPassword_login: Yup.string().required("هذا الحقل مطلوب")
  });
  const hanel_Login_submit = data => {
    dispatch(user_isLoaning())
    const jsonData = JSON.stringify({
      userName: data.userName_login.trim(),
      password: data.userPassword_login.trim()
    }); 
    axios
      .post("/api/auth/login", jsonData)
      .then(response => {
        dispatch(user_isLogin())
        dispatch(user_notLoaning())
        dispatch(user_data(response.data))
        navigate("/dashboard/home")
      })
      .catch(error => {
        dispatch(user_error(error.response.data.message))
        setTimeout(() => {
          dispatch(user_error(null))
        }, 5000);
      });
  };
  const formik = useFormik({
    initialValues: {
      userName_login: checkLocal_storage ? checkLocal_storage.userName : "",
      userPassword_login: JSON.parse(localStorage.getItem("FormData_login"))
        ? JSON.parse(localStorage.getItem("FormData_login")).password
        : ""
    },
    validationSchema,
    onSubmit: data => hanel_Login_submit(data)
  });


  function handelRemembre(e) {
    if (formik.values.userName_login && formik.values.userPassword_login) {
      if (e.target.checked) {
        localStorage.setItem(
          "FormData_login",
          JSON.stringify({
            userName: formik.values.userName_login,
            password: formik.values.userPassword_login
          })
        );
        setRemember(!rememberMe);
      } else {
        localStorage.removeItem("FormData_login");
        setRemember(!rememberMe);
      }
    } else {
      e.preventDefault();
      set_checkLocal_storage(prev => (prev = null));
    }
  }

  return (
    <div>
      {error && (
        <Aleart
          title={"خطأ"}
          type={"danger"}
          body={error}
        />
      )}

      <div className=" parent w-full h-screen flex justify-center items-center bg-[#bdd4da]">
        <div
          className={`relative parent-log_reg rounded-3xl  bg-[#c8d5d8] min-h-[75vh]  shadow-xl w-11/12 ${mode &&
            "changeMode"}`}
        >
          <div className="face overflow-y-auto face-1  w-full min-h-[75vh]">
            <div className="parent-tow-cont  flex h-[75vh] content-sign-up">
              <div className="content  w-full lg:w-2/4 p-4 py-11 md:p-11 ">
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
                  <h2 className="text-2xl text-[--c-text-blue] sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-5">
                    مرحبا بك من جديد قم بتسجيل الدخول الأن
                  </h2>
                  <p className="text-xl text-[--c-text-red] lg:text-3xl mb-2 sm:mb-9 ">
                    من الرائع عودتك !
                  </p>
                </div>
                <form action="" className="">
                  <div className="row-fill w-full lg:w-10/12 mx-auto  flex flex-col justify-center items-center">
                    <div className="input-an userName_login w-full mb-4 relative">
                      <label
                        htmlFor="userName_login"
                        className="mb-4 text-[--c-text-yellow] block"
                      >
                        إسم المستخدم :
                      </label>
                      <div className="mb-4 w-full h-max overflow-hidden">
                        <input
                          type="text"
                          name="userName_login"
                          id="userName_login"
                          autoFocus
                          className="bg-[--input-bg] h-8  w-full px-2"
                          value={formik.values.userName_login}
                          onChange={formik.handleChange}
                        />
                        <span className="inp_anim" />
                      </div>
                      {formik.touched.userName_login &&
                        formik.errors.userName_login &&
                        <span className="text-red-500 text-sm absolute -bottom-[6px] w-full right-0">
                          {formik.errors.userName_login}
                        </span>}
                    </div>
                    <div className="input-an userPassword_login mb-8 w-full relative">
                      <label
                        htmlFor="userPassword_login"
                        className="mb-4 block text-[--c-text-yellow]"
                      >
                        كلمة المرور :
                      </label>
                      {img_inputPassword
                        ? <img
                            onClick={() => setImg(!img_inputPassword)}
                            className=" z-10 h-6 top-2/4 -translate-y-[1%] opacity-30 hover:opacity-100 left-3 cursor-pointer transition absolute"
                            src="./imgs/Login___Register/view.png"
                            alt=""
                          />
                        : <img
                            onClick={() => setImg(!img_inputPassword)}
                            className=" z-10 h-6 top-2/4 -translate-y-[1%] opacity-30 hover:opacity-100 left-3 cursor-pointer transition absolute"
                            src="./imgs/Login___Register/hide.png"
                            alt=""
                          />}
                      <div className="mb-4 w-full overflow-hidden h-max ">
                        <input
                          placeholder=""
                          className="bg-[--input-bg]  w-full h-8 px-2"
                          type={img_inputPassword ? "password" : "text"}
                          name="userPassword_login"
                          id="userPassword_login"
                          value={formik.values.userPassword_login}
                          onChange={formik.handleChange}
                        />

                        <span className="inp_anim" />
                      </div>
                      {formik.touched.userPassword_login &&
                        formik.errors.userPassword_login &&
                        <span className="text-red-500 text-sm absolute -bottom-[6px] w-full right-0">
                          {formik.errors.userPassword_login}
                        </span>}
                    </div>
                  </div>
                  <div className="row-remember_forget flex justify-evenly items-center ">
                    <div className="checkbox-wrapper-33">
                      <label className="checkbox">
                        <input
                          name="rememberMe"
                          id="rememberMe"
                          checked={rememberMe ? true : false}
                          onChange={handelRemembre}
                          className="checkbox__trigger visuallyhidden"
                          type="checkbox"
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
                            <path d="M4 14l8 7L24 7" />
                          </svg>
                        </span>
                        <p className="checkbox__textwrapper text-[--c-text-yellow]">
                          تذكرني ؟
                        </p>
                      </label>
                    </div>
                    <span className="text-[--btn-bg] cursor-pointer transition hover:opacity-50">
                      نسيت كلمة المرور ؟
                    </span>
                  </div>
                  <div className="row_buttons mt-5 lg:mt-4 2xl:mt-8 w-full lg:w-10/12 mx-auto flex  justify-center gap-4 ">
                    <div
                      onClick={formik.handleSubmit}
                      className={`${isLoading && "pointer-events-none opacity-[.90]"} bg-[--btn-bg]  flex justify-center items-center border border-[--btn-bg] scale-95 hover:scale-105  hover:bg-[transparent] transition cursor-pointer hover:text-[--btn-bg] h-[40px] basis-2/4 rounded-[5px] text-[#FFF7D1]`}
                    >
                      {isLoading
                        ? <div className="animate-spin rounded-full h-[30px] w-[30px] border-t-2 border-b-2 border-[#ffffff]" />
                        : <div className="flex justify-center items-center">
                            <span className="text-2xl ml-4 block">
                              <LuLogIn />
                            </span>
                            <input
                              className="cursor-pointer"
                              type="submit"
                              name="send"
                              value="تسجيل الدخول"
                            />
                          </div>}
                    </div>
                    <div
                      onClick={() => setMode(!mode)}
                      className="vibrate-1 cursor-pointer hover:animate-none newUser_btn border flex justify-center items-center h-[40px] border-[--btn-bg] hover:bg-[--btn-bg] scale-95 hover:scale-105 hover:text-[#FFF7D1] text-[--btn-bg] transition  basis-2/4 rounded-[5px] "
                    >
                      <span className="text-2xl ml-4 block ">
                        <TiUserAdd />
                      </span>
                      <button
                        onClick={e => {
                          e.preventDefault();
                        }}
                      >
                        إنشاء حساب
                      </button>
                    </div>
                  </div>
                </form>
                {/* <div className="orLogin pb-11 md:pb-0 flex justify-center items-center flex-col mt-6  2xl:mt-11">
                  <h3 className="mb-4 text-[--btn-bg] ">
                    أو تسجيل الدخول من خلال
                  </h3>
                  <a href="" className="flex items-center justify-center">
                    <span className="text-3xl">
                      <FcGoogle />
                    </span>
                    <span className="text-2xl font-sans">Google</span>
                  </a>
                </div> */}
              </div>
              <div className="img relative  rotate  overflow-hidden w-2/4 hidden lg:block  ">
                <img
                  src="./imgs/Login___Register/e-learning_login.webp"
                  className="h-full aria-busy:  w-full absolute lg:-bottom-[97px] 2xl:-bottom-[53px] right-0 object-cover "
                  alt="img-login"
                />
              </div>
            </div>
          </div>

          <Register
            eventClick={e => {
              e.preventDefault();
              setMode(!mode);
            }}
          />
        </div>
      </div>
    </div>
  );
}
