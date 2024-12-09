import { useState, useEffect } from 'react'
import image from '../assets/founder-logo.png'

const FounderEvent = () => {
  const nigeriaStates = [
    'Lagos',
    'Kano',
    'Kaduna',
    'Rivers',
    'Oyo',
    'Enugu',
    'Abuja',
    'Borno',
    'Imo',
    'Delta',
  ]

  // State to track the current state index
  const [currentIndex, setCurrentIndex] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % nigeriaStates.length)
        setTransitioning(false)
      }, 500) // Match animation duration
    }, 5000)

    return () => clearInterval(interval)
  }, [])
  return (
    <div className='flex bg-background-cover w-full bg-cover md:h-[500px] bg-center bg-no-repeat items-center justify-between px-4 md:px-12 transition-transform duration-500 flex-col md:flex-row h-[600px] py-8'>
      <div className='order-2 md:order-1'>
        <h3 className='font-bold text-2xl text-white'>
          Founders Friday is Coming to{' '}
        </h3>
        <h2
          className={`${
            transitioning ? ' translatete-y-0' : ' '
          } text-6xl text-[#A649FF] font-bold mt-4 transition-transform duration-500 `}
        >
          {nigeriaStates[(currentIndex + 1) % nigeriaStates.length]}
        </h2>
        <p className='max-w-[500px] text-[#fff] font-thin mt-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
          ab dolorem iste excepturi laboriosam illo quasi similique, voluptates
          recusandae impedit animi nostrum odit nobis voluptate, voluptatem sed!
          Quasi, earum.
        </p>
      </div>
      <div className='w-[300px] order-1 md:order-1'>
        <img src={image} alt='' />
      </div>
    </div>
  )
}
export default FounderEvent
