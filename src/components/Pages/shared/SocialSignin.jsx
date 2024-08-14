/* eslint-disable react/react-in-jsx-scope */
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hooks/useAuth';

const SocialSignin = () => {
    
    
    const{signInWithGoogle }  = useAuth()
    
      const handleSocialLogin = (provider) => {
        console.log("bro ouch")
          provider === 'google' && signInWithGoogle() 
      }
    return (
        <div className="flex gap-8 items-center justify-center mt-10">
        <button className=""onClick={() => handleSocialLogin('google')}>
          <p className="bg-white rounded-full overflow-hidden">
            <span className="text-4xl  text-[#0866FF] overflow-hidden hover:shadow-lg ">
            <FcGoogle />
            </span>
          </p>
        </button>
        <button className="" onClick={() => handleSocialLogin('facebook')}>
          <p className="bg-white rounded-full overflow-hidden">
            <span className="text-4xl  text-[#0866FF] overflow-hidden hover:shadow-lg ">
              <FaFacebook />
            </span>
          </p>
        </button>
        {/* <button className="">
          <p className="bg-[#DDDDDD] rounded-full overflow-hidden">
            <span className="text-4xl  text-[#333333] overflow-hidden hover:shadow-lg ">
              <FaApple />
            </span>
          </p>
        </button> */}
      </div>
    );
};

export default SocialSignin;