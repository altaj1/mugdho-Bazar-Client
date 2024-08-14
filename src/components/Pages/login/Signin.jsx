import React from 'react';
import SocialSignin from '../shared/SocialSignin';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const Signin = () => {
    const {signIn} = useAuth()
    const navigate = useNavigate()
    const handelSingin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
        .then(res=>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "SignIn Successfull",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')
        })
    }
    return (
        <div className="relative h-[90vh]">
        <div className="absolute inset-0 bg-[url('/images/login.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative z-10 lg:ml-64 p-5 text-yellow-50 flex items-center pt-36 flex-col  h-full">
          <div className="flex justify-around gap-24 items-center">
            <p className="text-2xl font-bold">
              Welcome to MughdoMart! Please Signin.
            </p>
            <Link to={'/signup'} className="text-sm hover:text-[#8dbe3f]" >
              New menber? Register here
            </Link>
          </div>
          <div className="bg-slate-50 bg-opacity-30 p-10 rounded-sm mt-16 shadow-lg">
            <form className="space-y-4" onSubmit={handelSingin} action="">
              <div className="flex flex-col">
                <label className="font-semibold" htmlFor="">
                  Account*
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-96 py-2 pl-4 text-gray-800 rounded-sm focus:outline-[#8dbe3f]"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold" htmlFor="">
                  Password*
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  className="w-96 py-2 pl-4 rounded-sm text-gray-800 focus:outline-[#8dbe3f]"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <input
                  type="submit"
                  className="w-96 mt-2 hover:cursor-pointer bg-[#8dbe3f] py-2 rounded-sm text-center font-bold"
                  value={"Signin"}
                />
              </div>
            </form>
            <div className="flex items-center justify-between mt-4">
              <hr className="flex-grow border-t-2 border-gray-300" />
              <span className="px-2 text-sm ">
                Or, continue with
              </span>
              <hr className="flex-grow border-t-2 border-gray-300" />
            </div>
  
          <SocialSignin></SocialSignin>
          </div>
        </div>
      </div>
    );
};

export default Signin;