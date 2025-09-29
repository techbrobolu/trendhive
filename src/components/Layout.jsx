import React from 'react'
import SideBar from './layout/Sidebar'
import Header from './layout/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <aside>
            <SideBar />
        </aside>
        <main>
            <Header />
            <Outlet />
        </main>
    </div>
  )
}

export default Layout