import axios from "axios";

export const priceRange = [
   '1-99', '100-199', '200-299', '300-399', '400-499', '500-599', '600-699', '700-799', '800-899', '900-1000'
]
export const priductCategories =[
    {
      brandName: `Gucci`,
      id:1,
      
     subcategories: [
        {
          name: "Dresses",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
        {
          name: "Hat",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
      
        {
          name: "Sunglasses",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
        {
          name: "Hand Gloves",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
       
        {
          name: "Backpack",
          items: ["Hiking Backpacks", "Travel Backpacks", "Camping Backpacks", "Tactical/Military Backpacks", "Hydration Packs", "Camera Backpacks", "Wheeled Backpacks", "Ultralight Backpacks", "Child Carriers"],
          size:["XS", "S", "M", "XL", "XXL"]
        }
      ]
    },
    {
      brandName: "Chanel",
      id:2,
      
     subcategories: [
        {
          name: "Dresses",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]

        },
        {
          name: "Hat",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
       
        {
          name: "Hand Gloves",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
       
        {
          name: "Backpack",
          items: ["Hiking Backpacks", "Travel Backpacks", "Camping Backpacks", "Tactical/Military Backpacks", "Hydration Packs", "Camera Backpacks", "Wheeled Backpacks", "Ultralight Backpacks", "Child Carriers"],
          size:["XS", "S", "M", "XL", "XXL"]
        }
      ]
    },
    {
      brandName: "Louis Vuitton",
      id:3,
     
      subcategories: [
        {
          name: "Dresses",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
        {
          name: "Hat",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
        {
          name: "Shoes",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
       
        {
          name: "Hand Gloves",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
       
        {
          name: "Backpack",
          items: ["Hiking Backpacks", "Travel Backpacks", "Camping Backpacks", "Tactical/Military Backpacks", "Hydration Packs", "Camera Backpacks", "Wheeled Backpacks", "Ultralight Backpacks", "Child Carriers"],
          size:["XS", "S", "M", "XL", "XXL"]
        }
      ]
    },
    {
      brandName: "Dolce & Gabbana",
      id:4,
      
      subcategories: [
        {
          name: "Dresses",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
        {
          name: "Hat",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
      
        
        {
          name: "Hand Gloves",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
       
        {
          name: "Backpack",
          items: ["Hiking Backpacks", "Travel Backpacks", "Camping Backpacks", "Tactical/Military Backpacks", "Hydration Packs", "Camera Backpacks", "Wheeled Backpacks", "Ultralight Backpacks", "Child Carriers"],
          size:["XS", "S", "M", "XL", "XXL"]
        }
      ]
    },
    {
      brandName: "Ray-Ban",
      id:5,
 subcategories: [
       
        {
          name: "Sunglasses",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
        
      ]
    },
    {
      brandName: "Oakley",
      id:6,
      
     subcategories: [
        
        {
          name: "Hat",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
   
        {
          name: "Sunglasses",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
       
      ]
    },
    {
      brandName: "Nike",
      id:7,
     
      subcategories: [
        {
          name: "Dresses",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
        {
          name: "Hat",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
        {
          name: "Shoes",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
       
        {
          name: "Hand Gloves",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
       
        {
          name: "Backpack",
          items: ["Hiking Backpacks", "Travel Backpacks", "Camping Backpacks", "Tactical/Military Backpacks", "Hydration Packs", "Camera Backpacks", "Wheeled Backpacks", "Ultralight Backpacks", "Child Carriers"],
          size:["XS", "S", "M", "XL", "XXL"]
        }
      ]
    },
    {
      brandName: "Adidas",
      id:8,
       subcategories: [
        {
          name: "Dresses",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
        {
          name: "Hat",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
        {
          name: "Shoes",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
       
        {
          name: "Hand Gloves",
          items: ["Men", "Women", "Kids"],
          size:["XS", "S", "M", "XL", "XXL"]
        },
       
        {
          name: "Backpack",
          items: ["Hiking Backpacks", "Travel Backpacks", "Camping Backpacks", "Tactical/Military Backpacks", "Hydration Packs", "Camera Backpacks", "Wheeled Backpacks", "Ultralight Backpacks", "Child Carriers"],
          size:["XS", "S", "M", "XL", "XXL"]
        }
      ]
    }
  ];
  // Image upload
export const imageUpload = async image => {
  const formData = new FormData()
  formData.append('image', image)
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
    formData
  )
  return data.data.display_url
}
  