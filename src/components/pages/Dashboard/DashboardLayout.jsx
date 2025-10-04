import React from 'react'
import SideBar from './layout/Sidebar'
import Header from './layout/Header'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div className='flex flex-row max-h-screen h-screen max-w-screen w-screen'>
        <aside>
          <SideBar/>
        </aside>
        <main className='bg-background w-full flex flex-col max-h-screen h-screen'>
          <Header />
          <Outlet className="h-full w-full" />
        </main>
    </div>
  )
}

export default DashboardLayout