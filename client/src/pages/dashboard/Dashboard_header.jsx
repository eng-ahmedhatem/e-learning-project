import React, { memo } from 'react'
import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from '../../slice/userSlice';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';

function Dashboard_header() {
    const dispatch = useDispatch()
    function handelLogout() {
        dispatch(signOut())
        
    }
    return (
        <div className='dsh-header flex justify-between items-center p-2   rounded-[0px]'>
            <div className="h-right  flex items-center">
            <div className="w-16 h-16 rounded-full">
            <img src="/imgs/header/وزارة التربية والتعليم.svg" alt="" />
            </div>
            <div className="">
                <Link className='p-5 block text-sm md:text-lg lg:px-2 xl:px-5 focus:text-black text-[#000] hover:text-[--c-text-yellow] transition' to={"/"}>الصفحة الرئيسية</Link>
            </div>
            </div>
            <div className="  scale-95 hover:scale-100 transition">
                <button onClick={()=> handelLogout()} className='bg-red-500 p-2 flex justify-center items-center rounded-full  md:rounded-sm hover:bg-transparent text-gray-100 border hover:border-red-500 hover:text-red-500  transition '>
                 <span className='hidden  md:block'>
                 تسجيل الخروج

                 </span>
                 <span className='mr-2 text-2xl md:text-lg'><FaSignOutAlt/></span>

                 </button>
            </div>
            
        </div>
    )
}
export default  memo  (Dashboard_header)