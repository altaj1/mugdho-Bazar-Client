/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from 'react-router-dom'

// import Footer from '../components/Shared/Footer/Footer'

const Main = () => {
    // const [darkMode, setDarkMode] = useState(false);
    // const {darkMode, setDarkMode} = useAuth()
  return (
    // <div className={`${darkMode ? "bg-[#061f31]  h-full text-white" : ""} dark:bg-[#0F172A] font-serif text-opacity-85`} >
    //   {/* <NavBar /> */}

      
    //   {/* <Footer></Footer> */}
    // </div>
    <div className='pt-24 min-h-[calc(100vh-68px)] font-serif'>
        <Outlet />
      </div>
  )
}

export default Main
