// import React from 'react'
import user from '../assets/user-image.png'
import { BsArrowRightShort } from 'react-icons/bs'
const Register = () => {
  return (
    <div className='flex  flex-col  justify-center items-center '>
      <h2 className='text-3xl capitalize font-bold'>
        Register and be part of our community
      </h2>
      <p className='flex '>
        Join our community of over 1000+ founders, developers, and tech junkies
        in general.Be inspired by people who live to inspire!
      </p>
      <div className='flex flex-col mt-12 bg-cover-image w-full h-[250px] bg-center bg-contain bg-no-repeat'>
        <div className='flex px-44 justify-between'>
          <div className=' border-[2px] p-3  border-[#8300FF] h-[100px] w-[100px] rounded-full'>
            <img src={user} alt='' />
          </div>
          <div className=' border-[2px] p-3  border-[#8300FF] h-[100px] w-[100px] rounded-full'>
            <img src={user} alt='' />
          </div>
        </div>
        <div className='flex px-16 justify-between '>
          <div className=' border-[2px] p-3  border-[#8300FF] h-[100px] w-[100px] rounded-full'>
            <img src={user} alt='' />
          </div>
          <div className='flex gap-16'>
            <div className=' border-[2px] p-3  border-[#FF3B30] h-[100px] w-[100px] rounded-full'>
              <img src={user} alt='' />
            </div>
            <div className=' border-[2px] p-3  border-[#007AFF] h-[100px] w-[100px] rounded-full'>
              <img src={user} alt='' />
            </div>
            <div className=' border-[2px] p-3  border-[#FF3B30] h-[100px] w-[100px] rounded-full'>
              <img src={user} alt='' />
            </div>
          </div>
          <div className=' border-[2px] p-3  border-[#8300FF] h-[100px] w-[100px] rounded-full'>
            <img src={user} alt='' />
          </div>
        </div>
      </div>
      <button className='flex gap-1 w-[120px]  border border-[#9424ff] p-2 justify-center items-center rounded-xl text-[#9424ff]'>
        Register <BsArrowRightShort className='text-[#9424ff] text-xl' />
      </button>
    </div>
  )
}

export default Register