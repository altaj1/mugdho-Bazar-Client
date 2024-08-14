/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from "react-router-dom";
import Navbar from "../components/Pages/navbar/Navbar";

// import Footer from '../components/Shared/Footer/Footer'

const Main = () => {
  // const [darkMode, setDarkMode] = useState(false);
  // const {darkMode, setDarkMode} = useAuth()

  return (
    <div className={``}>
      <Navbar />

      <div className="pt-24 min-h-[calc(100vh-68px)] font-serif">
        <Outlet />
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Main;
