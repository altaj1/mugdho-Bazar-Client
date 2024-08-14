/* eslint-disable react/react-in-jsx-scope */
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

import { IoCartOutline, IoSearchSharp, IoPersonOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import SearchPage from "../searchPage/SearchPage";
import Name from "./Name";
import useAuth from "../../../hooks/useAuth";
const Navbar = () => {

  const {user, logOut} = useAuth()
 
  return (
    <div className="bg-[#232F3E] text-yellow-50">
      {/* first navbar */}
      <div className="navbar container mx-auto">
        <div className="   flex navbar-start ">
          {/* hambarger manue */}
          <div className="dropdown bg-[#232F3E]">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost md:hidden lg:hidden text-yellow-50 text-3xl "
            >
              <GiHamburgerMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2    "
            >
              <NavLink to={"/"} className="">
                Gift Cards
              </NavLink>
              <NavLink to={"/sopping"} className=" ">
              Sopping
              </NavLink>
           
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className=" m-1">
                  Help & Support
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row  w-full hidden lg:block md:block gap-8">
            <NavLink
              to={"/admin/dashboard"}
              className=" mr-5"
            >
              Gift Cards
            </NavLink>
            <NavLink to={"/sopping"} className=" mr-5">
              Sopping
            </NavLink>
            
            <div className="dropdown dropdown-hover mr-5 ">
              <div tabIndex={0} role="button" className=" m-1 flex items-end ">
                <p>Help & Support</p>
                <FaAngleDown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu text-gray-800 bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-full md:w-[55%] mt-2 md:mt-0 lg:hidden md:hidden ">
            <SearchPage></SearchPage>
          </div>
        </div>

        <div className="navbar-end text-end  space-x-4">
         {
          user?.email &&  <NavLink to={"/dashboard"} className="text-4xl font-bold">
          <IoPersonOutline />
        </NavLink>
         }
         

          
          {user?.email && (
            <div className="text-center lg:block md:block hidden">
              <p>Welcome</p>
              <p>{user?.email}</p>
            </div>
          )}
          {!user?.email && (
            <NavLink to={"/signin"} className="">
              Singin
            </NavLink>
          )}
          {user?.email && (
            <button className="" onClick={()=>logOut()}>
              Logout
            </button>
          )}
        </div>
      </div>

      {/* {/* secoend nabbar */}
      <div className="bg-[#131921] py-2 border-b border-gray-700 lg:block md:block hidden">
        <div className="container mx-auto px-4 flex  md:flex-row items-center lg:gap-10 md:gap-10 justify-between">
          <div>
            <Name></Name>
          </div>
          <div className="lg:w-full md:w-[55%] mt-2 md:mt-0 lg:block md:block hidden">
            <SearchPage />
          </div>
          {/* card */}
          <div className="flex items-center space-x-4">
            <p className="bg-[#8dbe3f] p-2 rounded-full text-gray-800 hover:bg-[#5C8121] hover:text-yellow-50">
              <IoCartOutline className="lg:text-xl md:text-xl" />
            </p>
            <p>
              <span>0</span> <br />
              Cart
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
