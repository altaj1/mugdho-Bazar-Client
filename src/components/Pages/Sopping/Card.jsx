/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {

  const {
    coverImage,
    currentPrice,
    name,
    price,
    _id,
    discount,
    BrandName,
    ratings,
  } = product;
  return (
    <div className="relative hover:z-50 card hover:shadow-xl p-5  duration-100 transform hover:scale-y-105 ">
      <figure className="h-60">
        <img
          className="h-60 w-full rounded-b-xl"
          src={coverImage}
          alt="product"
        />
      </figure>
      <div className="flex  gap-1 mt-1 font-medium">
        <p className="bg-[#FFD9D8] text-xs text-center py-1 px-1 rounded-sm">
          BigSave
        </p>
        <p className="bg-[#FFE5C1] text-xs py-1 rounded-sm px-1">Brand</p>
        <p className="text-sm ">{BrandName}</p>
      </div>
      <div className="">
       <div className="h-26 pt-2">
       <h2 className="font-semibold">{name}</h2>
        <div className="flex justify-between items-center">
          {" "}
         
          <p className="">
            <span className="text-xl font-medium">BDT{parseFloat(currentPrice).toFixed()}</span>{" "}
            <span className="opacity-50 text-sm">BDT{price}</span>
          </p>
          <p className="text-sm">Ratings {ratings ? ratings : "No Ratings"}</p>
        </div>
       </div>
        <div className=" flex items-center justify-between mt-1">
          <p className=" rounded-r-xl px-2 badge-outline bg-red-600 text-white font-medium">
            {discount}% off
          </p>
          <Link to={`/product-detail/${_id}`} className=" px-2  rounded-lg badge-outline bg-[#8dbe3f] hover:bg-[#5B8021] hover:text-white font-medium">
            See preview
          </Link >
        </div>
      </div>
    </div>
  );
};

export default Card;
