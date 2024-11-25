import React from 'react'
import Dashboard_header from './Dashboard_header'
import Dashboard_nav from './Dashboard_nav'
import "./dashboard.css"
import { Outlet } from 'react-router-dom'
export default function Dashboard_layout() {
  return (
    <section className='dashboard bg-[#ecf0f4]  pb-0 grid h-svh'>
        <Dashboard_header/>
        <Dashboard_nav/>
        <div className="dash-content p-5 rounded-md ">
            <Outlet/>
        </div>
        {/* <Dashboard> */}
        {/* </Dashboard> */}

    </section>
  )
}
