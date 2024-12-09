// import { ReactNode } from 'react'

// eslint-disable-next-line react/prop-types
const Modal = ({ openModal, children }) => {
  return (
    <div
      className={`${
        openModal
          ? 'flex  fixed h-full left-0 z-50 top-0 w-full bg-[#000] bg-opacity-25 backdrop-blur-sm'
          : null
      }`}
    >
      {children}
    </div>
  )
}

export default Modal
