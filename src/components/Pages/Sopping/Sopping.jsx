import React, { useState } from "react";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { priceRange, priductCategories } from "../Admin/utilits/utlits";

const Sopping = () => {
  const axiosCommon = useAxiosCommon();
  const [checkedCategory, setCheckedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null); 
  const [productBrand, SetProductBrandName] = useState("");
  const [categoresItem, setCategoresItem] = useState([]);
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const handleCheckboxChange = (event, idx) => {
    const value = event.target.value;
    SetProductBrandName(value);
    const { subcategories } = priductCategories.find(
      (brand) => brand.id == idx - 1
    );
    setCategoresItem(subcategories);
    setCheckedCategory(checkedCategory === idx ? null : idx); // Toggle the selected category
  };
  const handleCheckboxItem = (event, idx) => {
    const item = event.target.value;
    console.log(idx);
    setItem(item);
  };
  const handleCheckboxPrice = (event, idx) => {
    const price = event.target.value;
    setPrice(price)
    setSelectedPrice(selectedPrice === idx ? null: idx)
  };
  console.log(price, "thi is item");
  return (
    <div className="container mx-auto">
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

    </div>
  );
};

export default Sopping;
