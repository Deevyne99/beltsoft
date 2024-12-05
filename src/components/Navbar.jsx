// import React from 'react'
import logo from '../assets/logo.png'
import { BsArrowRightShort } from 'react-icons/bs'

const Navbar = () => {
  return (
    <section className='flex  justify-between  border border-b-[#75687e] px-12 md:px-16 py-2'>
      <div className='flex items-center gap-2'>
        <img src={logo} alt='' className='w-[50px] h-[50px]' />
        <h2 className='text-2xl'>Founders Friday</h2>
      </div>
      <nav className='hidden md:flex gap-24 items-center '>
        <ul className='flex items-center gap-4 capitalize'>
          <li>
            <a href='#0'>home</a>
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
        <button className='flex gap-1 w-[120px]  border border-[#9424ff] p-2 justify-center items-center rounded-xl text-[#9424ff]'>
          Register <BsArrowRightShort className='text-[#9424ff] text-xl' />
        </button>
      </nav>
    </section>
  )
}

export default Navbar
