// import React from 'react'
import user from '../assets/user-image.png'

const Testimonial = () => {
  return (
    <div className='flex flex-col mx-4 md:mx-16'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='capitalize text-3xl font-bold'>
          what do our attendees have to say?
        </h2>
        <div className='flex gap-4 items-center justify-between mt-8'>
          <div className='flex flex-col justify-center items-center '>
            <div className='border p-3 border-[#8300FF] h-[150px] w-[150px] rounded-full'>
              <img src={user} alt='' />
            </div>
            <h2 className='text-center '>Mr Belba Ngoy</h2>
            <p className='text-center max-w-[250px]'>
              Always a remarkable experience for my team and myself
            </p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='border p-3 border-[#8300FF] h-[150px] w-[150px] rounded-full'>
              <img src={user} alt='' />
            </div>
            <h2 className='text-center'>Mr Belba Ngoy</h2>
            <p className='text-center max-w-[250px]'>
              Always a remarkable experience for my team and myself
            </p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='border p-3 border-[#8300FF] h-[150px] w-[150px] rounded-full'>
              <img src={user} alt='' />
            </div>
            <h2 className='text-center'>Mr Belba Ngoy</h2>
            <p className='text-center max-w-[250px]'>
              Always a remarkable experience for my team and myself
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
