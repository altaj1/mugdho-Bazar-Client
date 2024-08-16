import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { FaMinus, FaPlus} from "react-icons/fa6";

const ProductDetail = () => {
  const { id } = useParams();
  const axiosCommon = useAxiosCommon();
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
    <div className="flex mx-auto container">
      {/* cover image */}
      <div>
        <img src={coverImage} alt="" />
      </div>
      {/* outher information */}
      <div className="space-y-8">
   
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
        <p className="text-lg"><span>Brand:</span> <span className=" font-medium text-[#5a7a25]">{BrandName}</span></p>
     
     <hr />
        <p className="text-[#5a7a25] text-2xl font-semibold">BDT <span>{currentPrice}</span></p>
        <p className="font-semibold"><span className="opacity-70">BDT{price}</span> <span>-{discount}%</span></p>
        {/* <p>{color[0]}</p> */}
        <hr />
        <p>{description}</p>
        <hr />
        <p className="flex space-x-5 text-lg"><span className="p-2">Quantity</span>  <span className="flex items-center gap-2"><span className="bg-[#FAFAFA] p-2 hover:bg-slate-400 hover:text-white"><FaMinus /></span><span className="p-2">0</span> <span className="bg-[#DADADA] hover:bg-slate-400 hover:text-white p-2 text-opacity-70"><FaPlus /></span></span></p>
      </div>
    </div>
  );
};

export default ProductDetail;
