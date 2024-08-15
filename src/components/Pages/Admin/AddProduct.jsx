import React, { useRef, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { useMutation } from "@tanstack/react-query";

import Swal from "sweetalert2";
import { imageUpload, priductCategories } from "./utilits/utlits";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const AddProduct = () => {
    const {user} = useAuth()
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedBrandName, setSelectedBrandName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checkboxItem, setCheckboxItem] = useState("");
  const [startDate, setStartDate] = useState(null);

  const [color, setColor] = useState([]);
  const colorRef = useRef(null);

  const [checkedIndex, setCheckedIndex] = useState(null);
  const [checkboxSize, setCheckBoxSize] = useState([]);
  const [coverImagePreview, setCoverImagePreview] = useState();
 
  const axiosSecure = useAxiosSecure();

  const handleSelectBrandName = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const brand = priductCategories[selectedIndex - 1]; // Adjust for "Select" option at index 0
    console.log(brand);
    setSelectedBrandName(brand.brandName);
    setSelectedBrand(brand);
  };

  const handleSelectProduct = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const product = selectedBrand?.subcategories[selectedIndex - 1];
    setSelectedProduct(product);
    setCheckboxItem("");
    setCheckedIndex(null);
  };
  const handleCheckboxChange = (e, idx) => {
    const item = e.target.value;
    setCheckboxItem(item);
    setCheckedIndex(idx);
  };

  const handleCheckboxSize = (e) => {
    const size = e.target.value;
    setCheckBoxSize([...checkboxSize, size]);
  };

  const handleCoverImage = async (image) => {
    const image_url = await imageUpload(image);
    setCoverImagePreview(image_url);
    // setCoverImagePreview(URL.createObjectURL(image));
  };

  const handleColer = (e) => {
    const data = e.target.value;
    setColor([...color, data]);
    colorRef.current.value = "";
  };
  const { mutateAsync } = useMutation({
    mutationFn: async (productData) => {
      const { data } = await axiosSecure.post(`/add-product`, productData);
      return data;
    },
    onSuccess: () => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product Post Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const actualPrice = form.price.value;
    const discount = form.discount.value;
    const currentPrice = actualPrice * (1 - discount / 100);

    const productData = {
      name: form.name.value,
      description: form.description.value,
      bracode: form.bracode.value,
      quantity: form.quantity.value,
      price: actualPrice,
      BrandName: selectedBrandName,
      category: selectedProduct?.name,
      item: checkboxItem,
      size: checkboxSize,
      data:startDate,
      coverImage: coverImagePreview,
      discount: discount,
      currentPrice: currentPrice,
      color: color,
      auhtor:user?.email,
      BrandId: selectedBrand?.id,
      ratings: 4.5
    };
    console.log(productData, "this is product data");

    const res = mutateAsync(productData)
  };
//   console.log(startDate)
  return (
    <>
      {/* button */}

      <div>
        <form
          onSubmit={handleSubmit}
          action=""
          className="container mx-auto mt-10"
        >
          <div className="flex justify-between items-center mb-5 bg-[#F9F9F9] p-5 rounded-lg shadow-sm">
            <h3 className="font-semibold">Add New Product</h3>
            <button
              type="submit"
              className="bg-[#8DBE3F] hover:bg-[#5B8021] px-6 py-2 rounded-xl hover:text-yellow-50 text-xs font-semibold flex items-center gap-2"
            >
              <span className="font-bold text-sm">
                <MdOutlineFileDownloadDone />
              </span>{" "}
              <span>Add Product</span>
            </button>
          </div>
          <div className="lg:flex md:flex justify-between text-gray-800 container mx-auto gap-5">
            <div className="bg-[#F9F9F9]  lg:w-[65%] md:w-[65%] space-y-4 p-5 rounded-lg shadow-sm">
              <h1 className="font-semibold">General Information</h1>
              <div className="flex flex-col pl-5 pr-5 space-y-1">
                <label htmlFor="">Name Product*</label>
                <input
                  type="text"
                  placeholder="Enter Product Name"
                  required
                  name="name"
                  className="p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F]"
                />
              </div>
              <div className="flex flex-col pl-5 pr-5 space-y-1">
                <label htmlFor="">Description Produce*</label>
                <textarea
                  required
                  className="h-20 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F]"
                  placeholder="Enter Product Description"
                  name="description"
                  id=""
                ></textarea>
              </div>
              {/* barcode quantity */}
              <div className="lg:flex md:flex justify-between  p-5 gap-4">
                <div className="flex flex-col  space-y-1 lg:w-[50%] md:w-[50%]">
                  <label htmlFor="">Barcode*</label>
                  <input
                    type="text"
                    placeholder="Enter Product Barcode"
                    required
                    name="bracode"
                    className="p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F]"
                  />
                </div>
                <div className="flex flex-col  lg:w-[50%] md:w-[50%] space-y-1">
                  <label htmlFor="">Quantity*</label>
                  <input
                    required
                    className=" rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F]"
                    placeholder="Enter Product Quantity"
                    name="quantity"
                    id=""
                  />
                </div>
              </div>
              {/* categoris */}
              <div className="lg:flex md:flex justify-between pl-5 pr-5 gap-4">
                <div className="lg:w-[50%] md:w-[50%] space-y-1">
                  <h1>Select Brand Name*</h1>
                  <select
                    required
                    className=" p-2 w-full bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F] "
                    onChange={handleSelectBrandName}
                  >
                    <option value="">Select</option>
                    {priductCategories?.map((brandName, index) => (
                      <option
                        key={index}
                        className="selection:bg-gray-800 hover:cursor-pointer"
                        value={brandName.brandName} // Keep value for form submission if needed
                      >
                        {brandName.brandName}
                      </option>
                    ))}
                  </select>
                </div>
                {/* product category */}
                <div className="lg:w-[50%] md:w-[50%] space-y-1">
                  <h1>Product Category*</h1>
                  <select
                    required
                    className=" p-2 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F] "
                    onChange={handleSelectProduct}
                  >
                    <option value="">
                      {selectedBrand?.subcategories ? "Select" : ""}
                    </option>
                    {selectedBrand?.subcategories?.map((product, index) => (
                      <option
                        key={index}
                        className="selection:bg-gray-800 hover:cursor-pointer"
                        value={product.name} // Keep value for form submission if needed
                      >
                        {product.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* items */}
              <div>
                <div className="lg:flex md:flex space-y-2 gap-4 pl-5 pr-5 items-center justify-center">
                  <div className="lg:w-[50%] md:w-[50%]">
                    <h1>
                      {selectedProduct?.items.length == 3
                        ? "Gender*"
                        : "Product Items*"}
                    </h1>
                    {selectedProduct?.items?.map((item, idx) => (
                      <div key={idx} className="space-x-1">
                        <input
                          type="checkbox"
                          id={`checkbox-${idx}`}
                          name="item"
                          value={item}
                          onChange={(event) => handleCheckboxChange(event, idx)}
                          checked={checkedIndex === idx}
                        />
                        <label htmlFor={`checkbox-${idx}`}>{item}</label>
                      </div>
                    ))}
                  </div>
                  <div className="lg:w-[50%] md:w-[50%]">
                    <h1>Product Size*</h1>
                    {selectedProduct?.size?.map((size, idx) => (
                      <div key={idx} className="space-x-1">
                        <input
                          type="checkbox"
                          id={`checkbox-${idx}`}
                          name="item"
                          value={size}
                          onChange={(event) => handleCheckboxSize(event, idx)}
                        />
                        <label htmlFor={`checkbox-${idx}`}>{size}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* upload img */}
            <div className=" md:w-[35%] lg:w-[35%] bg-[#F9F9F9] p-5 rounded-lg shadow-sm">
              <h1 className="font-semibold">Product Media</h1>
              {/* images */}
              <div className="p-5">
                <div>
                  <label className="flex flex-col  items-center rounded-lg shadow-lg bg-[#FCF7F1]">
                    <input
                      type="file"
                      className="text-sm cursor-pointer w-36 hidden bg-slate-200"
                      name="image"
                      accept="image/*"
                      id="image"
                      onChange={(e) => handleCoverImage(e.target.files[0])}
                      hidden
                      required
                    />
                    <div className="h-64 object-cover  rounded-lg  flex items-center justify-center">
                      {coverImagePreview ? (
                        <img
                          className=" h-64 w-64 object-cover rounded-lg"
                          src={coverImagePreview}
                        />
                      ) : (
                        <p className="text-6xl opacity-50 ">
                          <span>
                            <IoIosAddCircleOutline />
                          </span>
                        </p>
                      )}
                    </div>
                  </label>
                  {/* group images */}
              
                </div>
              </div>
              {/* prices brand */}
              <div className="lg:flex  justify-between  ">
                <div className="flex flex-col pl-5 pr-5 space-y-1 lg:w-[50%]">
                  <label htmlFor="">Price*</label>
                  <input
                    type="number"
                    placeholder="Enter Product Price"
                    required
                    name="price"
                    className="p-2 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F]"
                  />
                </div>
                <div className="flex flex-col pl-5 pr-5 lg:w-[50%]  space-y-1">
                 
                      <label htmlFor="">Discount</label>
                  <input
                    type="number"
                    placeholder="Enter Discount %"
                    name="discount"
                    className="p-2 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F]"
                  />
                </div>
              </div>
              {/* discount color */}
              <div className="lg:flex  justify-between mt-2 ">
                <div className="flex flex-col pl-5 pr-5 space-y-1 lg:w-[50%]">
                <label htmlFor="">Select start date</label>
                  <DatePicker
                        className="bg-slate-200 mr-10 p-2 rounded-md"
                        required
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                       
                        placeholderText="Select start date"
                      />
                </div>
                <div className="flex flex-col pl-5 pr-5 lg:w-[50%]  space-y-1">
                  <label htmlFor="">Colors</label>
                  <div className="w-[100%] flex focus:outline-none focus:ring-1 focus:ring-[#8DBE3F] hover:border hover:border-[#8DBE3F] rounded-md">
                    <input
                      type="text"
                      placeholder="Enter Product Colors"
                      name="color"
                      onBlur={handleColer}
                      ref={colorRef}
                      className="p-2 w-full rounded-l-md focus:outline-none"
                    />{" "}
                    <div className="bg-slate-200 px-2 rounded-r-md flex items-center justify-center">
                      {" "}
                      <IoIosAddCircleOutline />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
