// import React from 'react'
import background from '../assets/background-image-2.png'
import image from '../assets/Frame-14.png'

const Hero = () => {
  return (
    <section className='flex flex-col mx-4 md:mx-16 h-[800px] overflow-hidden'>
      <div className='flex justify-between relative '>
        <div className='w-1/2'></div>
        <div className='flex'>
          <div className='absolute w-full -z-0 mt-[0px] left-0 ml-[200px] right-[0px] '>
            <img src={background} alt='' />
          </div>
          <div className='w-[300px] mt-[200px] z-30 relative'>
            <img src={image} alt='' />
          </div>
          <div className='w-[300px] mt-[200px] z-30 relative'>
            <img src={image} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
