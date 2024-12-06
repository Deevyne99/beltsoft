// import React from 'react'
import backgroundImage from '../assets/background-image.png'
import imageTeam from '../assets/image-5.png'
import imageUser from '../assets/image-4.png'
import { BsArrowRight } from 'react-icons/bs'

const FridaySection = () => {
  return (
    <div className='flex flex-col mx-4 md:mx-16'>
      <div className='flex justify-between  h-[700px] w-full  '>
        <div className='absolute w-full right-0 left-0  -mt-[300px] justify-center flex '>
          <img src={backgroundImage} alt='' className='' />
        </div>
        <article className='w-[50%] mt-12 '>
          <h4 className='text-[#5c00b3] font-bold'>Founders Friday</h4>
          <h2 className='text-3xl max-w-[300px] tracking-wide'>
            What Happens At Founders Friday
          </h2>
          <p className='max-w-[500px] tracking-wide mt-8'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod eum
            dolor itaque voluptatum eos atque velit. Illo natus tenetur ratione
            iusto enim sapiente, adipisci ipsum facere. Blanditiis hic
            repudiandae totam.
          </p>
          <button className='flex gap-1 w-[170px] capitalize  border bg-[#9424ff] mt-8 px-4 py-2 justify-center items-center rounded-md text-[#fff]'>
            Learn more{' '}
            <BsArrowRight className='font-bold text-lg text-[#fff]' />
          </button>
        </article>
        <div className='flex relative flex-col'>
          <div className='h-[100px] w-[250px]'>
            <img src={imageTeam} alt='' />
          </div>
          <div className='mt-36 h-[100px] w-[250px] absolute -ml-24'>
            <img src={imageUser} alt='' className='mr-12' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FridaySection
