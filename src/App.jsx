import React, { useState } from 'react'
import Sidebar from './components/layout/Sidebar'
import { Arrowup, Arrowdown } from './components/ui/Icons'
import { TbTargetArrow } from 'react-icons/tb'
import { GiArcheryTarget } from 'react-icons/gi'

function App() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className='max-h-screen w-full bg-background flex overflow-clip'>
      <Sidebar />
      <div>
        <Arrowup 
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
        <Arrowdown />
        {hovered ? <TbTargetArrow />: <GiArcheryTarget />}
      </div>
    </div>
  )
}

export default App;