import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { FullLogo } from '../../../../assets'
import { BOTTOM_SIDEBAR_LINKS, MAIN_SIDEBAR_LINKS } from '../../../../lib/constants/navigation'
import { GoSidebarExpand, GoSidebarCollapse } from 'react-icons/go'
import { FiLogOut } from 'react-icons/fi'


export default function SideBar() {
  const [isExpanded, setIsExpanded] = useState(true)
  const [tip, setTip] = useState({ visible: false, x: 0, y: 0, label: "" })

  function SidebarLink({item}){
    const [isNavlinkHovered, setIsNavlinkHovered] = useState(false)

    return (
      <NavLink
        key={item.key}
        to={item.path}
        end
        className={({isActive}) => `relative group flex items-center gap-3.5 font-light text-[0.8rem] px-5.5 py-2  hover:text-white hover:no-underline ${!isExpanded && "justify-center"} ${isActive ? "bg-primary" : "text-gray-500 hover:bg-amber-400 "} transition-all duration-350 ease-in-out`}
        onMouseEnter={(e) => !isExpanded && showTooltip(e, item.label)}
        onMouseLeave={hideTooltip}
      >
        <span 
          className='text-xl justify-center'
        >
          {item.icon}
        </span>
        {isExpanded && <span>{item.label}</span>}

        {/* {!isExpanded && (
          <span className='absolute left-full top-1/2 -translate-y-1/2 ml-3 whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-sm text-white shadow-lg opacity-0 group-hover:opacity-100 transition z-50 pointer-events-none'>
            {item.label}
          </span>
        )} */}
      </NavLink>
    )
  }

  function showTooltip(e, label){
    const rect = e.currentTarget.getBoundingClientRect()

    setTip({
      visible: true,
      x: rect.right + 10,
      y: rect.top + rect.height / 2,
      label,
    })
  }

  function hideTooltip(){
    setTip(t => ({ ...t, visible: false }))
  }

  return (
    <div className={`flex flex-col gap-7 h-screen bg-foreground text-white py-3 transition-all duration-300 ease-in-out ${isExpanded ? "w-56" : "w-18"}`}>
      {/* Top Menu */}
      <div className='flex flex-col gap-7.5'>
        <div className={`flex ${isExpanded ? "justify-between" : "justify-center"} px-4 py-3 items-center text-xl`}>
          {/* Product Logo */}
          {isExpanded
              &&
            <Link to='/'>
              <FullLogo className='h-6.5'/>
            </Link>
          }

          {/* Sidebar Toggle Button */}
          {isExpanded 
            ? 
          <GoSidebarExpand className='cursor-pointer' onClick={() => setIsExpanded(!isExpanded)}/>
            :
          <GoSidebarCollapse className='cursor-pointer' onClick={() => setIsExpanded(true)} />
          }
        </div>

        {/* Main Menu Links */}
        <div className='flex flex-col gap-4.5'>
          {isExpanded && <h3 className='text-xs ml-6 font-bold'>MAIN MENU</h3>}

          <nav className='flex flex-col gap-1.5'>
            {MAIN_SIDEBAR_LINKS.map((item) => (
              <SidebarLink key={item.key} item={item} />
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Menu */}
      <div className='flex flex-col gap-4'>

        {/* Help & Support Links */}
        <div className='flex flex-col gap-4.5'>
          <div className="h-px bg-gray-700 mx-2 mt-2"></div>
          {isExpanded && <p className='text-xs ml-6 font-bold'>HELP & SUPPORT</p>}
          <nav className='flex flex-col gap-1.5'>
            {BOTTOM_SIDEBAR_LINKS.map((item) => (
              <SidebarLink key={item.key} item={item} />
            ))}
          </nav>
        </div>

        {/* Logout  */}
        <div className='flex items-center gap-2 text-red-500 ml-7 py-10 cursor-pointer'>
          <span><FiLogOut /></span>
          {isExpanded && 
            <span className='text-xs'>
              Logout
            </span>
          }
        </div>
      </div>

      { tip.visible && createPortal(
          <div
            style={{position:"fixed", top:tip.y, left:tip.x, transform:"translateY(-50%)"}}
            className='px-2 py-1 bg-white text-sm rounded shadow-lg z-50 pointer-events-none whitespace-nowrap'
          >
            {tip.label}
          </div>,
          document.body
      )}
    </div>
  )
}