import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

export default function Header() {
    const [isActive , setIs_active  ] = useState(false)
    
    useEffect(()=>{
        document.addEventListener('click', (e) => {
            if (e.target.closest('.toggle')) return;
            setIs_active(false);
        });
        return () => {
            document.removeEventListener('click', () => {});
        }
    },[])
  return (
    <header className='p-1'>
        <div className="container mx-auto p-2">

        <h6 className='text-[12px] lg:text-base text-neutral-300 text-center text-[--]'>الكمبيوتر وتكنولوجيا المعلومات والإتصالات للصف الأول اللإعدادي</h6>
        </div>
        <div className="container  mx-auto flex justify-between items-center">
            <div className="links w-full lg:w-max relative flex  justify-between items-center ">
                <div className="logo ml-4 w-20 h-20">
                    <a href="https://moe.gov.eg/">

                    <img src="./imgs/header/وزارة التربية والتعليم.svg" alt="Logo" />
                    </a>
                </div>
                <div className='toggle__container relative w-max h-max'>

                <div className={`toggle ${isActive && "active" } lg:!hidden`} onClick={()=>setIs_active(!isActive)}>
    <span></span>
    <span></span>
    <span></span>
</div>
                </div>
                <nav className={`absolute  w-full transition lg:static ${isActive && "active"}`}>
                    <ul className='flex-col lg:flex-row  flex gap-1 justify-between items-center '>
                        <li><Link to="/" className='p-5 block lg:px-2 xl:px-5 text-[#fff] hover:text-[--c-text-yellow] transition'>الرئيسية</Link></li>
                        <li><a href="" className='p-5 block lg:px-2 xl:px-5 text-[#fff] hover:text-[--c-text-yellow] transition'>الأهداف العامه</a></li>
                        <li><a href="" className='p-5 block lg:px-2 xl:px-5 text-[#fff] hover:text-[--c-text-yellow] transition'>تعليمات</a></li>
                        <li><a href="" className='p-5 block lg:px-2 xl:px-5 text-[#fff] hover:text-[--c-text-yellow] transition'>تعليمات</a></li>
                        <li><Link to="contact-us" className='p-5 block lg:px-2 xl:px-5 text-[#fff] hover:text-[--c-text-yellow] transition'>تواصل معنا</Link></li>
                        <li className="m-5 lg:hidden block login_And_Register scale-95 hover:scale-100 transition"><Link to={"/login-register"} className='bg-[--c-text-yellow] p-2 rounded-sm hover:bg-transparent border border-[--c-text-yellow] hover:text-[--c-text-yellow] transition '>تسجيل الدخول أو إنشاء حساب جديد</Link>                        </li>
                    </ul>
                </nav>
            </div>
            <div className="hidden lg:block hover:animate-none login_And_Register scale-95 hover:scale-100 transition">
                <Link to={"/login-register"} className='bg-[--c-text-yellow] p-2 rounded-sm hover:bg-transparent border border-[--c-text-yellow] hover:text-[--c-text-yellow] transition '>تسجيل الدخول أو إنشاء حساب جديد</Link>
            </div>
            
        </div>
    </header>
  )
}
