import Modal from './Modal'
import { FiX } from 'react-icons/fi'
import { BsArrowRightShort } from 'react-icons/bs'
// eslint-disable-next-line react/prop-types
const Sidebar = ({ showSidebar, handleSidebar }) => {
  return (
    <Modal openModal={showSidebar}>
      <aside
        className={` transition-transform ease-out duration-300 fixed top-0 right-0 z-50 p-4 gap-6 flex  flex-col bg-white h-full max-w-[450px] w-[85%] overflow-y-scroll ${
          showSidebar ? '    translate-x-0 ' : 'translate-x-full '
        }`}
      >
        <button onClick={() => handleSidebar()}>
          <FiX />
        </button>

        <nav className='flex md:hidden flex-col gap-24 items-center '>
          <ul className='flex items-center flex-col gap-4 capitalize'>
            <li>
              <a href='#0' className='text-[#8300ff]'>
                home
              </a>
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
          <button className='flex gap-1 w-[120px]  border border-[#9424ff] p-2 justify-center items-center rounded-xl text-[#9424ff]'>
            Register <BsArrowRightShort className='text-[#9424ff] text-xl' />
          </button>
        </nav>
      </aside>
    </Modal>
  )
}
export default Sidebar
