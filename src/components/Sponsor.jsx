// import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Sponsor = () => {
  return (
    <section className='flex flex-col md:mx-16 mx-4'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <article className='w-full md:w-1/2 '>
          <h4 className='text-[#5c00b3] font-bold'>Founders Friday</h4>
          <h2 className='md:text-3xl w-full text-2xl md:max-w-[300px] tracking-wide'>
            What Sponsor Founders Friday?
          </h2>
        </article>
        <div>
          <p className='max-w-[500px]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
            deleniti? Optio vel ut commodi voluptatem suscipit inventore ipsam
            unde. Blanditiis porro sint laboriosam officia voluptatibus
            quibusdam aperiam aspernatur quo suscipit.
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between md:mx-16 mx-4 mt-12 '>
        <div className='p-4 border  rounded-md grid grid-cols-2 gap-4'>
          <div className='w-[150px]  h-[150px] flex justify-center items-center rounded-[50%] bg-slate-400 flex-col p-2'>
            <h2 className='text-sm text-center'>Networking Oppurtunities</h2>
            <p className='text-center text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className='w-[150px]  h-[150px] flex justify-center items-center rounded-[50%] bg-slate-400 flex-col p-2'>
            <h2 className='text-sm text-center'>Networking Oppurtunities</h2>
            <p className='text-center text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className='w-[150px]  h-[150px] flex justify-center items-center rounded-[50%] bg-slate-400 flex-col p-2'>
            <h2 className='text-sm text-center'>Networking Oppurtunities</h2>
            <p className='text-center text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className='w-[150px]  h-[150px] flex justify-center items-center rounded-[50%] bg-slate-400 flex-col p-2'>
            <h2 className='text-sm text-center'>Networking Oppurtunities</h2>
            <p className='text-center text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <article className='w-full mt-8 md:mt-0 md:w-[50%]'>
          <h2 className='text-2xl font-bold'>how to sponsor</h2>
          <p>Ready to Make an Impact?</p>
          <p className='text-sm'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            labore beatae cumque aperiam quos deleniti, quia, dolorem
            consectetur.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-2'>
            <div className='flex flex-col'>
              <label htmlFor='' className='capitalize'>
                name
              </label>
              <input
                type='text'
                className='p-2 border mt-1 rounded-md'
                placeholder='Full Name'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='' className='capitalize'>
                name
              </label>
              <input
                type='text'
                className='p-2 border mt-1 rounded-md'
                placeholder='Full Name'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='' className='capitalize'>
                name
              </label>
              <input
                type='text'
                className='p-2 border mt-1 rounded-md'
                placeholder='Full Name'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='' className='capitalize'>
                name
              </label>
              <input
                type='text'
                className='p-2 border mt-1 rounded-md'
                placeholder='Full Name'
              />
            </div>
          </div>
          <button className='flex gap-1 w-[170px] capitalize  border bg-[#9424ff] mt-8 px-4 py-2 justify-center items-center rounded-md text-[#fff]'>
            Learn more{' '}
            <BsArrowRight className='font-bold text-lg text-[#fff]' />
          </button>
        </article>
      </div>
    </section>
  )
}

export default Sponsor
