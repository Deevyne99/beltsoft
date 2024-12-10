import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

// eslint-disable-next-line react/prop-types
const DropDown = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className='rounded-lg '>
      <div
        onClick={onToggle}
        className='w-full flex flex-col gap-6 items-center p-4 border border-r-0 border-l-0 border-t-0  text-left  transition justify-between'
      >
        <div className=' flex gap-4 items-center justify-between w-full'>
          <div className='flex items-center gap-6'>
            <div className='bg-[#8300ff] w-[10px] h-[10px] rounded-[100%]'></div>
            <h3 className='text-xl capitalize'>{question}</h3>
          </div>
          <div className='flex items-center gap-4'>
            <span className='md:flex text-[#75687e] text-[13px] w-full max-w-[700px]  hidden'>
              {answer} Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cumque aperiam officia similique debitis provident
            </span>
            {isOpen ? (
              <AiOutlineMinus className='text-2xl text-[#75687e]' />
            ) : (
              <AiOutlinePlus className='text-2xl text-[#75687e]' />
            )}
          </div>
        </div>
        {isOpen && (
          <div className='p-4  w-full flex items-end '>
            <p className='text-[#75687e] text-sm ml-0  flex items-end w-full'>
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
