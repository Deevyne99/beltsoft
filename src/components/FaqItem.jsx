// eslint-disable-next-line react/prop-types
const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className='rounded-lg flex flex-col'>
      <button
        onClick={onToggle}
        className='w-full flex  gap-2 items-center p-1  text-left  transition'
      >
        <span className='font-medium'>{question}</span>
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
      </button>
      {isOpen && (
        <div className='p-4 bg-white border-t'>
          <p className='text-gray-700'>{answer}</p>
        </div>
      )}
    </div>
  )
}

export default FAQItem
