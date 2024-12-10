// import React from 'react'
import { useState } from 'react'
import logo from '../assets/logo.png'
import { BsArrowRightShort } from 'react-icons/bs'
import Sidebar from './Sidebar'
import { FaAlignRight } from 'react-icons/fa'

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)
  const handleSidebar = () => setSidebar(!sidebar)
  return (
    <section className='flex  flex-col z-30 bg-white fixed w-full justify-between  border border-b-[#75687e] px-4 md:px-16 py-2'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2 '>
          <img src={logo} alt='' className='w-[50px] h-[50px]' />
          <h2 className='md:text-2xl text-lg'>Founders Friday</h2>
        </div>
        <nav className='hidden md:flex gap-24 items-center font-medium'>
          <ul className='flex items-center gap-4 capitalize'>
            <li>
              <a href='#0' className='text-[#8300ff]'>
                home
              </a>
            </li>
            <li>
              <a href='#0'>about us</a>
            </li>
            <li>
              <a href='#0'>gallery</a>
            </li>
            <li>
              <a href='#0'>contact us</a>
            </li>
          </ul>
          <button className='flex gap-1 w-[120px]  border border-[#9E8CAF] p-2 justify-center items-center rounded-xl text-[#9424ff]'>
            Register <BsArrowRightShort className='text-[#9424ff] text-xl' />
          </button>
        </nav>
        <div className='flex md:hidden' onClick={() => handleSidebar()}>
          <FaAlignRight className='text-gray-400 hover:text-[#8300ff]' />
        </div>
      </div>
      <div className='w-full'>
        <Sidebar showSidebar={sidebar} handleSidebar={handleSidebar} />
      </div>
    </section>
  )
}

export default Navbar
