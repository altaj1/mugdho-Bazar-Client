/* eslint-disable react/react-in-jsx-scope */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineBars } from 'react-icons/ai'
import MenuItem from './Menu/Menuitem'
import { FcHome, } from 'react-icons/fc'
import { GrLogout } from 'react-icons/gr'

import AdminMenu from './Menu/AdminMenu'

import { MdOutlineLeaderboard } from "react-icons/md";
import useAuth from '../../../hooks/useAuth'
import Name from '../navbar/Name'
const Sidebar = () => {
  const { logOut } = useAuth()
  const [isActive, setActive] = useState(false)
 
//   const [role, isLoading] = useRole()
     
  const role = "Admin"
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }


  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
            <Name></Name>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-gray-100  z-10 md:fixed flex flex-col justify-between overflow-x-hidden  w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
            <div className="flex items-center justify-center">
          <Link to='/'>
        <Name></Name>
          </Link>
        </div>
              
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            

            {/*  Menu Items */}
            <nav>
            <MenuItem
                label='Leader Board'
                address='/dashboard'
                icon={ MdOutlineLeaderboard}
              />
              {/* {role === 'User' && <UserMenu/>} */}

              
              {role === 'Admin' && <AdminMenu />}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
        
          <MenuItem
            label='Home'
            address='/'
            icon={FcHome}
          />

          <button
            onClick={logOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
