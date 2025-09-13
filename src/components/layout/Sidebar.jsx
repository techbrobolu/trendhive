import React from 'react'
import {Arrowup, Arrowdown, FullLogo} from '../ui/Icons'

export default function Sidebar() {
  const pages = [
    {title: "Dashboard", }
  ]

  return (
    <div className="min-h-screen w-fit bg-foreground flex-col p-3.5">
      <div className='flex gap-18'>
        <FullLogo />
        {/* <SidebarReturn className="db-icon" /> */}
      </div>
      
      <Arrowup className="w-15 h-24" />
      <Arrowdown />
    </div>
  )
}
