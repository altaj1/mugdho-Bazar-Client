import React from "react";
import Banner from "../Banner/Banner";
import AddOffer from "./AddOffer/AddOffer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <AddOffer></AddOffer>
     <div className="text-center mt-20 mb-10">
     <Link className="bg-[#8DBE3F] py-3 px-6 hover:bg-[#5B8021] hover:text-white font-medium" to={"/sopping"}>
        Go To The Happy Shopping
      </Link>
     </div>
    </div>
  );
};

export default Home;
