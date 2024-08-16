import React, { useEffect, useState } from "react";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { priceRange, priductCategories } from "../Admin/utilits/utlits";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import Card from "./card";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";

const Sopping = () => {
  const { searchText, setSearchText } = useAuth();
  const axiosCommon = useAxiosCommon();
  const [checkedCategory, setCheckedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [productBrand, SetProductBrandName] = useState("");
  const [categoresItem, setCategoresItem] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [price, setPrice] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [count, setCount] = useState(0);
  const [productsData, setProductsData] = useState([]);
  const [isActive, setActive] = useState(false)
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
    setPrice(price);
    setSelectedPrice(selectedPrice === idx ? null : idx);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [
      "productData",
      productBrand,
      categoryName,
      price,
      currentPage,
      searchText,
    ],
    queryFn: async () => {
      const { data } = await axiosCommon.get(
        `/get-all-product?productBrand=${productBrand}&categoryName=${categoryName}&price=${price}&page=${currentPage}&size=${itemsPerPage}&searchText=${searchText}`
      );
      setProductsData(data)
      
      return data;
    },
  });

  const handleLowtoHighSorting =async ()=>{
    setProductsData([])
    const sortedByLowToHigh =await products.sort((a, b) => parseFloat(a.currentPrice) - parseFloat(b.currentPrice));
    // console.log(sortedByLowToHigh)
    setProductsData(sortedByLowToHigh)
  
  }
  const  handleHightoLowSorting =async ()=>{
    // console.log("auch")
    setProductsData([])
    const sortedByHighToLow =await products.sort((a, b) => parseFloat(b.currentPrice) - parseFloat(a.currentPrice));
    // console.log(sortedByHighToLow)
    setProductsData([])
    setProductsData(sortedByHighToLow)
  }
  useEffect(() => {
    axiosCommon
      .get(`/productCount`)

      .then((res) => setCount(res.data.count));
  }, [currentPage, itemsPerPage]);

  if (isLoading) {
    return "Lodiding...";
  }
 
  const handleToggle = () => {
    setActive(!isActive)
  }
  console.log(productsData)
  return (
    <div>
       {/* Small Screen Navbar */}
       <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            {/* <Link to='/'>
            <Name></Name>
            </Link> */}
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>
      <div className="container mx-auto mt-10">
      <div className="flex justify-between  gap-5">
        {/* checked box */}
        <div className={` mt-5 z-10  flex flex-col overflow-x-hidden d lg:w-[20%] md:w-[30%] inset-y-0 left-0 transform ${
            isActive && '-translate-x-full'
          }  md:translate-x-0  transition duration-200 ease-in-out `}>
          {/* sorting */}
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="bg-[#8dbe3f] py-2 px-3  rounded-lg  hover:bg-[#5b8021] hover:text-yellow-50 transition-all duration-300 ease-in-out">
            Sorting
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1]  p-2 shadow"
            >
             <button onClick={handleLowtoHighSorting} className="  bg-[#8dbe3f] py-2  rounded-lg  hover:bg-[#5b8021] hover:text-yellow-50 transition-all duration-300 ease-in-out">Low to High</button>
             <button onClick={handleHightoLowSorting} className="  bg-[#8dbe3f] py-2 mt-1 rounded-lg  hover:bg-[#5b8021] hover:text-yellow-50 transition-all duration-300 ease-in-out">High to Low</button>
            
            </ul>
          </div>
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
                    <label htmlFor={`item-checkbox-${itemIdx}`}>
                      {item.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* product */}
        <div className="lg:grid md:grid lg:grid-cols-4  md:grid-cols-2  gap-5 ">
         {!productsData.length? <div>No product here</div>:   productsData.map((product, idx)=>(<Card key={idx} product={product}></Card>))}
         {/* {
          productsData.map((product, idx)=>(<Card key={idx} product={product}></Card>))
         } */}
        
        </div>
      </div>
      {/* pagination */}
      <div className="pagination join flex items-center justify-center p-16">
        <button
          className="flex items-center justify-center gap-1 mr-4"
          onClick={handlePrevPage}
        >
          <GrLinkPrevious /> Prev
        </button>
        <div className="text-2xl space-x-6">
          {pages.map((page) => (
            <button
              className={`${
                currentPage == page
                  ? "bg-[#5B8021] text-yellow-50 w-10 rounded-full"
                  : ""
              } `}
              onClick={() => setCurrentPage(page)}
              key={page}
            >
              {page + 1}
            </button>
          ))}
        </div>
        <button
          className="flex items-center justify-center gap-1 ml-4"
          onClick={handleNextPage}
        >
          Next <GrLinkNext />
        </button>
      </div>
    </div>
    </div>
   
  );
};

export default Sopping;
