import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../SideBar/SideBar'
import Navbar from '../Navbar/Navbar'

export default function MasterLayout({userName}) {
  return (
    <>
      <div className='d-flex'>
        <div className="">
          <Sidebar/>
        </div>
        <div className="w-100">
          <Navbar userName={userName}/>
          <Outlet/>
        </div>
      </div>
    </>
  )
}
