import React, { useEffect, useState } from "react";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { priceRange, priductCategories } from "../Admin/utilits/utlits";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const Sopping = () => {
    const {searchText, setSearchText} = useAuth()
  const axiosCommon = useAxiosCommon();
  const [checkedCategory, setCheckedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null); 
  const [productBrand, SetProductBrandName] = useState("");
  const [categoresItem, setCategoresItem] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [price, setPrice] = useState("");
  const [currentPage, setCurrentPage] = useState(0); 
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [count, setCount] = useState(0)
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];


  const handleCheckboxChange = (event, idx) => {
    const value = event.target.value;
    SetProductBrandName(value);
    const { subcategories } = priductCategories.find(
      (brand) => brand.id == idx + 1
    );
    setCategoresItem(subcategories);
    setCheckedCategory(checkedCategory === idx ? null : idx); // Toggle the selected category
  };


  const handleCheckboxItem = (event, idx) => {
    const item = event.target.value;
    console.log(idx);
    setCategoryName(item);
  };

  const handleCheckboxPrice = (event, idx) => {
    const price = event.target.value;
    setPrice(price)
    setSelectedPrice(selectedPrice === idx ? null: idx)
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
    }
}

const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
        setCurrentPage(currentPage + 1);
    }
}
  const {data: Products = [], isLoading, refetch} = useQuery({
    queryKey:["productData", productBrand, categoryName, price ],
    queryFn: async ()=>{
            const {data} = await axiosCommon.get(`/get-all-product?productBrand=${productBrand}&categoryName=${categoryName}&price=${price}&page=${currentPage}&size=${itemsPerPage}&searchText=${searchText}`)
            console.log(data)
            return data
    }
  })
  useEffect( () =>{
    axiosCommon.get(`/productCount`)
    
    .then( res=> setCount(res.data.count))
        
}, [currentPage, itemsPerPage])
console.log(count)
if (isLoading) {
    return "Lodiding..."
}
 
  return (
    <div className="container mx-auto">
 <div>
         {/* checked box */}
         <div>
    <>
        <h1 className="text-xl font-semibold">Price Range</h1>
        {priceRange.map((price, idx) => (
          <div key={idx}>
            <input
              key={idx}
              type="checkbox"
              id={`checkbox-${idx}`}
              name="price"
              value={price}
              onChange={(event) => handleCheckboxPrice(event, idx)}
              checked={selectedPrice === idx}
            />
            <label htmlFor={`checkbox-${idx}`}>{price}</label>
          </div>
        ))}
      </>
      <h1 className="text-xl font-semibold">Brand Name</h1>
      {priductCategories.map((category, idx) => (
        <div key={idx}>
          <input
            key={idx}
            type="checkbox"
            id={`checkbox-${idx}`}
            name="category"
            value={category.brandName}
            onChange={(event) => handleCheckboxChange(event, idx)}
            checked={checkedCategory === idx}
          />
          <label htmlFor={`checkbox-${idx}`}>{category.brandName}</label>
          {/* Items */}
          <div className={`${checkedCategory !== idx && "hidden"} pl-5`}>
            {categoresItem.map((item, itemIdx) => (
              <div key={itemIdx} action="">
                <input
                  type="checkbox"
                  id={`item-checkbox-${itemIdx}`}
                  name="item"
                  value={item.name}
                  onChange={(event) => handleCheckboxItem(event, itemIdx)}
                />
                <label htmlFor={`item-checkbox-${itemIdx}`}>{item.name}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
{/* product */}
<div></div>
 </div>
     
 <div className='pagination join flex items-center justify-center p-16'>
                
                <button className="flex items-center justify-center gap-1 mr-4" onClick={handlePrevPage}><GrLinkPrevious /> Prev</button>
               <div className="text-2xl space-x-6">
               {
                    pages.map(page => <button
                        className={`${currentPage == page? 'bg-[#FF6F61] text-yellow-50 w-10 rounded-full':""} `}
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >{page +1  }</button>)
                }
               </div>
                <button className="flex items-center justify-center gap-1 ml-4" onClick={handleNextPage}>Next <GrLinkNext /></button>
                
            </div>
    </div>
  );
};

export default Sopping;
