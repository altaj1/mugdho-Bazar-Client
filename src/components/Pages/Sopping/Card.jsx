/* eslint-disable react/prop-types */
import React from "react";

const Card = ({product}) => {
    console.log(product)
    const {coverImage, currentPrice, name, price, 
        _id, 
        discount,BrandName

    } = product
  return (
    <div className="relative hover:z-50 card hover:shadow-xl p-5  duration-100 transform hover:scale-y-105 ">
  <figure className="h-60">
    <img
      className="h-60 w-full rounded-b-xl"
      src={coverImage}
      alt="product"
    />
  </figure>
  <div className="flex  gap-1 mt-1">
    <p className="bg-[#FFD9D8] text-xs text-center py-1 px-1 rounded-sm">BigSave</p>
    <p className="bg-[#FFE5C1] text-xs py-1 rounded-sm px-1">Brand</p>
    <p className="text-sm ">{BrandName}</p>
  </div>
  <div className="">
    <h2 className="font-semibold">
      {name}
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>

  );
};

export default Card;
