// eslint-disable-next-line react/prop-types
const DropDown = ({ answer, isOpen, onToggle }) => {
  return (
    <div className='rounded-lg '>
      <div
        onClick={onToggle}
        className='w-full flex flex-col gap-6 items-center p-4 border border-r-0 border-l-0 border-t-0  text-left  transition justify-between'
      >
        <div className='flex gap-4 items-center justify-between w-full'>
          <div className='flex items-center gap-6'>
            <div className='bg-[#8300ff] w-[10px] h-[10px] rounded-[100%]'></div>
            <h3 className='text-xl'>Monthly Plans</h3>
          </div>
          <div className='flex items-center gap-4'>
            <span className='text-[13px] w-full max-w-[700px] '>
              {answer} Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cumque aperiam officia similique debitis provident explicabo
              soluta, fuga natus facere aspernatur molestiae non neque,
              voluptates modi quia ea atque mollitia voluptate.
            </span>
            <svg
              className={`w-5 h-5 transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </div>
        </div>
        {isOpen && (
          <div className='p-4 bg-gray-400 w-full flex items-end '>
            <p className='text-gray-700 ml-0  flex items-end w-full'>
              {answer} Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Sapiente accusamus deserunt maiores asperiores cupiditate vitae.
              Quae sapiente tempora expedita ratione, et ipsam laudantium
              molestias tenetur, esse, quod possimus qui soluta?
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default DropDown
