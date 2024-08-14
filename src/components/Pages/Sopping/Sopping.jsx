import React, { useState } from 'react';
import useAxiosCommon from '../../../hooks/useAxiosCommon';
import { priductCategories } from '../Admin/utilits/utlits';

const Sopping = () => {
    const axiosCommon = useAxiosCommon();
  const [checkedCategory, setCheckedCategory] = useState(null);
  const [productBrand, SetProductBrand] = useState('');
  const [categoresItem, setCategoresItem] = useState([]);

console.log(productBrand)
  const handleCheckboxChange = (event, idx) => {
    const value = event.target.value
     SetProductBrand(value);
     const { subcategories } = priductCategories.find((brand) => brand.id == idx -1);
     setCategoresItem(subcategories)
    setCheckedCategory(checkedCategory === idx ? null : idx); // Toggle the selected category
  };
  console.log(categoresItem)
    return (
        <div className='container mx-auto'>
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
          {/* <div className={`${checkedCategory !== idx && 'hidden'} pl-5`}>
            {category.items.map((item, itemIdx) => (
              <div key={itemIdx} action="">
                <input
                  type="checkbox"
                  id={`item-checkbox-${itemIdx}`}
                  name="item"
                  value={item}
                  onChange={(event) => handleCheckboxItem(event, itemIdx)}
                />
                <label htmlFor={`item-checkbox-${itemIdx}`}>{item}</label>
              </div>
            ))}
          </div> */}
        </div>
      ))}
    </div>
    );
};

export default Sopping;