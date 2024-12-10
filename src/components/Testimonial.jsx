// import React from 'react'
import user from '../assets/user-image.png'
import arrowRight from '../assets/arrow-right.png'
import arrowLeft from '../assets/arrow-left.png'
// import { useEffect, useState } from 'react'

const testimonials = [
  {
    name: 'John Doe',
    testimonial:
      'This service is absolutely fantastic! It exceeded all my expectations.',
    image: 'https://example.com/images/john-doe.jpg',
  },
  {
    name: 'Jane Smith',
    testimonial: 'I had an amazing experience. Highly recommended!',
    image: 'https://example.com/images/jane-smith.jpg',
  },
  {
    name: 'Michael Brown',
    testimonial:
      "Excellent customer service and attention to detail. I'm very satisfied.",
    image: 'https://example.com/images/michael-brown.jpg',
  },
]

const Testimonial = () => {
  return (
    <div className='flex flex-col mx-4 md:mx-16 relative w-full overflow-hidden '>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='capitalize text-2xl text-center md:text-left md:text-3xl font-bold'>
          what do our attendees have to say?
        </h2>
        <p className='mt-2'>well see for yourself</p>
        <div className=' flex gap-4 w-[150px] top-24 md:top-4  overflow-hidden absolute md:right-24 right-[-24px]'>
          <button className=' md:h-[50px] md:w-[50px] w-[40px] h-[40px] border-[#e2a7f7] border rounded-full p-2'>
            <img className='w-[30px]' src={arrowRight} alt='' />
          </button>
          <button className='md:h-[50px] md:w-[50px] w-[40px] h-[40px] border border-[#e2a7f7] rounded-full p-2'>
            <img className='w-[30px]' src={arrowLeft} alt='' />
          </button>
        </div>

        <div className='flex gap-4 items-center justify-center mt-8  overflow-hidden '>
          {testimonials.map((item) => {
            return (
              <div
                key={item.name}
                className={`hidden md:flex flex-col justify-center items-center `}
              >
                <div className='border-[2px] p-3  border-[#8300FF] h-[150px] w-[150px] rounded-full'>
                  <img src={user} alt='' />
                </div>
                <h2 className='text-center font-bold'>Mr Belba Ngoy</h2>
                <p className='text-center max-w-[250px]'>
                  Always a remarkable experience for my team and myself
                </p>
              </div>
            )
          })}
          <div
            className={`md:hidden flex flex-col justify-center items-center `}
          >
            <div className='border-[2px] p-3  border-[#8300FF] h-[150px] w-[150px] rounded-full'>
              <img src={user} alt='' />
            </div>
            <h2 className='text-center font-bold'>Mr Belba Ngoy</h2>
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
