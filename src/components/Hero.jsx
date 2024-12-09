// import React from 'react'
import background from '../assets/background-image-2.png'
import image from '../assets/Frame-14.png'
import frame from '../assets/Frame-15.png'
import hall from '../assets/Frame-16.png'
import users from '../assets/Frame.png'
import cafe from '../assets/Ellipse.png'
import cafeLogo from '../assets/Ellipse-1.png'
import cafeImg from '../assets/Ellipse-2.png'
import cafeLog from '../assets/Ellipse-3.png'
import cafeImage from '../assets/Ellipse-4.png'
import arrow from '../assets/arrow.png'
import people from '../assets/people.png'
import money from '../assets/Money-bag.png'
import { BsArrowRight } from 'react-icons/bs'

const Hero = () => {
  return (
    <section className='flex flex-col mx-4  mb-8  overflow-hidden'>
      <div className='flex flex-col md:flex-row justify-between relative '>
        <article className='md:w-1/2 w-full mt-12 md:mt-[200px] md:ml-12 ml-0 order-2 md:order-1'>
          <div className='flex flex-col'>
            <h4>
              Join our premier monthly meetup for startup founders and tech
              visionaries
            </h4>
          </div>
          <div>
            <h2 className='capitalize text-4xl text-[#8300ff] font-bold'>
              connect, collaborate, innovate
            </h2>
          </div>
          <div className='mt-8'>
            <p className='text-sm leading-normal'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae deleniti, consectetur magnam, beatae architecto odit
              officiis similique vitae impedit molestias eaque tenetur delectus
              assumenda vero commodi iure asperiores numquam sint illo facere
              quibusdam voluptatem ea. Unde modi harum saepe perferendis?
            </p>
          </div>
          <div className='mt-8'>
            <button className='flex gap-1 capitalize  border border-[#9424ff] mt-8 px-4 py-2 justify-center items-center rounded-3xl text-[#9424ff]'>
              Register for our next Event{' '}
              <img className='w-[20px]' src={arrow} alt='' />
            </button>
          </div>
          <div className='flex gap-4 items-center mt-8'>
            <div>
              <img src={cafe} alt='' />
            </div>
            <div>
              <img src={cafeLogo} alt='' />
            </div>
            <div>
              <img src={cafeImg} alt='' />
            </div>
            <div>
              <img src={cafeLog} alt='' />
            </div>
            <div>
              <img src={cafeImage} alt='' />
            </div>
          </div>
        </article>
        <div className='md:flex hidden md:order-2'>
          <div className='hidden md:flex absolute w-full -z-0 mt-[0px] left-0 lg:ml-[300px]  md:ml-[100px]  right-[0px]'>
            <img src={background} alt='' />
          </div>
          <div className='flex relative'>
            <div className='w-[250px] relative mt-[150px]  mr-[240px]'>
              <img src={image} alt='' />
            </div>
            <div className='w-[250px] mt-[250px] absolute  ml-[150px]'>
              <img src={users} alt='' />
            </div>

            <div className='w-[150px] mt-[500px]  absolute'>
              <img src={frame} alt='' />
            </div>

            <div className=' mt-[600px] ml-[200px]  absolute'>
              <img src={hall} alt='' />
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center relative md:hidden order-1  mt-[100px] w-full'>
          <div className=' w-[200px]'>
            <img src={frame} alt='' />
          </div>
          <div className='grid grid-cols-2 w-full justify-center items-center'>
            <div className='order-1 w-[200px]'>
              <img src={image} alt='' />
            </div>
            <div className='order-2 w-[200px]'>
              <img src={users} alt='' />
            </div>

            {/* <div className='order-1 '>
              <img src={hall} alt='' />
            </div> */}
          </div>
        </div>
      </div>
      <div className='flex md:flex-row flex-col justify-center relative mb-12  md:mt-72 mt-12 gap-8 z-10 mx-4 md:mx-16'>
        <div className='flex z-0 md:w-1/2 w-full'>
          <img src={people} alt='' className='' />
        </div>
        <div className=' w-full md:w-1/2   border-l-[#8300ff] border-r-0 border-t-[#8300ff] border-b-[#8300ff] border-2 rounded-lg px-2 pb-12 md:pb-0'>
          <div className='p-2 rounded-lg  border-r-0 border-b-0 border-t-0 '>
            <h2 className='text-3xl font-bold absolute mt-[-30px] bg-white w-full'>
              Who We Are
            </h2>
            <p className='mt-8 max-w-[400px] text-sm text-gray-500 leading-'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              quasi veniam, quo fugit dolor veritatis. Ea ad hic architecto
              repudiandae numquam qui, quasi est eaque, quam dolores dignissimos
              alias culpa.
            </p>
          </div>
          <div className='flex gap-8 mt-2'>
            <button className='flex gap-1 w-[170px] capitalize  border bg-[#9424ff] mt-8 px-4 py-2 justify-center items-center rounded-3xl text-[#fff] '>
              Register{' '}
              <BsArrowRight className='font-bold text-lg text-[#fff]' />
            </button>
            <button className='flex gap-1 w-[170px] capitalize  border border-[#9424ff] mt-8 px-4 py-2 justify-center items-center rounded-3xl text-[#9424ff] bg-[#fff]'>
              Donate <img src={money} alt='' className='w-[20px]' />
            </button>
          </div>
          <div className='flex py-2 bg-[#fff] w-full ml-2 absolute mt-[30px] md:mt-[232px]'>
            <p className=' font-bold truncate'>
              Founders Friday is more than just a meetup -- its a movement
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
