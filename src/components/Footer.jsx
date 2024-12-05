// import React from 'react'
import footerLogo from '../assets/footer-logo.png'
import arrow from '../assets/arrow.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

const Footer = () => {
  return (
    <div className='flex flex-col px-12 md:px-16 py-2 border border-b-0 mt-4 border-t-[#75687e]'>
      <div className='w-[120px]'>
        <img src={footerLogo} alt='' />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-2xl capitalize w-[450px] text-center'>
          {`  Want to be a part of Abuja's Biggest Tech community`}
        </h2>

        <button className='flex gap-1 capitalize  border border-[#9424ff] mt-8 px-4 py-2 justify-center items-center rounded-3xl text-[#9424ff]'>
          Register for our next Event{' '}
          <img className='w-[20px]' src={arrow} alt='' />
        </button>
      </div>
      <div className='flex flex-col  border border-l-0 border-r-0 border-b-0 border-t-[#75687e] mt-20 py-4'>
        <div className='flex justify-between'>
          <div className='grid grid-cols-3 gap-4 w-[120px]'>
            <img className='w-fu' src={facebook} alt='' />
            <img src={instagram} alt='' />
            <img src={twitter} alt='' />
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
