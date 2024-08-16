import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { FaMinus, FaPlus } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";

const ProductDetail = () => {
  const [quantity, setQuantiy] = useState(1);
  const {user, setCounter, counter} = useAuth()
  const navigate = useNavigate()
  const { id } = useParams();
  const axiosCommon = useAxiosCommon();
  const handleQuantity = (value) => {
    if (value === "plus") {
        setQuantiy(quantity +1)
    } else if(value == "minus"){
        if (quantity == 1) {
            return
        }
        else{
            setQuantiy(quantity - 1)
        }
    }
  };
  const handleCounter = ()=>{
    if (!user) {
        navigate('/signin')
        return
    }
    setCounter(counter + 1)
  }
  const { data: product = {} } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/product-detail/${id}`);
      console.log(data);
      return data;
    },
  });
  const {
    BrandName,
    bracode,
    color,
    coverImage,
    currentPrice,
    description,
    discount,
    item,
    name,
    price,
  } = product;
  console.log(product);
  return (
    <div className="lg:flex md:flex mx-auto container p-5 gap-5">
      {/* cover image */}
      <div className="lg:w-[50%] md:w-[50%]">
        <img src={coverImage} alt="" />
      </div>
      {/* outher information */}
      <div className="space-y-8 lg:w-[50%] md:w-[50%]">
        <h1 className="text-2xl font-medium">{name}</h1>
        <div className="rating">
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-[#8dbe3f]"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-[#8dbe3f]"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-[#8dbe3f]"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-[#8dbe3f]"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-[#8dbe3f]"
          />
        </div>
        <p className="text-lg">
          <span>Brand:</span>{" "}
          <span className=" font-medium text-[#5a7a25]">{BrandName}</span>
        </p>

        <hr />
        <p className="text-[#5a7a25] text-2xl font-semibold">
          BDT <span>{currentPrice}</span>
        </p>
        <p className="font-semibold">
          <span className="opacity-70">BDT{price}</span>{" "}
          <span>-{discount}%</span>
        </p>
        {/* <p>{color[0]}</p> */}
        <hr />
        <p>{description}</p>
        <hr />
        <p className="flex space-x-5 text-lg">
          <span className="p-2">Quantity</span>{" "}
          <span className="flex items-center gap-2">
            <span onClick={()=>handleQuantity("minus")} className="bg-[#FAFAFA] p-2 hover:bg-slate-400 hover:text-white">
              <FaMinus />
            </span>
            <span className="p-2">{quantity}</span>{" "}
            <span onClick={()=>handleQuantity("plus")}  className="bg-[#DADADA] hover:bg-slate-400 hover:text-white p-2 text-opacity-70">
              <FaPlus />
            </span>
          </span>
        </p>
        <div className="space-x-10">
            <button className="px-8 py-3 bg-[#8DBE3F] font-semibold hover:bg-[#5B8021] hover:text-white">Buy Now</button>
            <button onClick={handleCounter} className="px-6 py-3 bg-[#5B8021] font-semibold hover:bg-[#8DBE3F] hover:text-gray-800 text-white">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
