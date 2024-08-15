/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from "react-router-dom";
import Navbar from "../components/Pages/navbar/Navbar";
import Footer from "../components/Pages/footer/Footer";

const Main = () => {
  return (
    <div className={``}>
      <Navbar />

      <div className="min-h-[calc(100vh-68px)] ">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
