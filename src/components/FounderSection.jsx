// import React from 'react'
import image from '../assets/Image-3.png'
import { BsArrowRight } from 'react-icons/bs'
const FounderSection = () => {
  return (
    <div className='flex flex-col mx-4 md:mx-12'>
      <div className='flex flex-col md:flex-row justify-center gap-12 items-center'>
        <div className='w-full md:w-1/2 '>
          <img src={image} alt='' />
        </div>
        <article className='flex gap-6 flex-col'>
          <h3>At Founder’s Friday, Every Friday Is a Learning Experience!</h3>
          <p className='max-w-[550px] w-full'>
            Join us in our mission to transform ideas into impact and shape the
            future of Nigeria’s startup landscape.
          </p>
          <button className='flex gap-1 w-[170px] capitalize  border bg-[#9424ff] mt-8 px-4 py-2 justify-center items-center rounded-3xl text-[#fff]'>
            Register <BsArrowRight className='font-bold text-lg text-[#fff]' />
          </button>
        </article>
      </div>
    </div>
  )
}

export default FounderSection
