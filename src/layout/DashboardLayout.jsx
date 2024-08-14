/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Pages/sidebar/Sidebar'



const DashboardLayout = () => {
  
  return (
    <div className={` dark:bg-[#0F172A] font-serif text-opacity-85`}>
        <div className='relative min-h-screen md:flex'>
      {/* Sidebar */}
      <Sidebar />

      {/* Outlet --> Dynamic content */}
      <div className='flex-1 md:ml-64'>
        <div className='p-5'>
           
          <Outlet />
        </div>
      </div>
    </div>
    </div>
  
  )
}

export default DashboardLayout
