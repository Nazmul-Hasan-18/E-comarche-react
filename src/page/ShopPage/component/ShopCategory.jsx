import React, { useEffect, useState } from "react";
import useCustomHook from "../../shared/customHook/UseCustomHook";
import ShopProduct from "./ShopProduct";

const ShopCategory = () => {
  const { items } = useCustomHook("category.json");
  const [products , setProducts] = useState([])
  const [count, setCount] = useState();
  const [width,setWidth ] = useState(); 
  const handleId = (id) => {
    setCount(id);
  };
  const handlProduct = (id) => {
    setWidth(id);
  };


  useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])
  return (
    <div className="grid grid-cols-10  container mx-auto px-26 py-10">
      <div className=" col-span-2   gap-7">
        <div className=" border h-150 px-4">
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 border-b border-gray-300 py-2">
              Category
            </h3>
            <div className="flex flex-col gap-2 mt-3 ">
              {items.map((item) => (
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => {
                    handleId(item.id);
                  }}
                >
                  <input type="checkbox" id="name" />
                  <p
                    className="text-[17px] font-semibold text-gray-600"
                    id="name"
                  >
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-2xl font-semibold text-gray-700 border-b border-gray-300 py-2">
              Width
            </h3>
            <div className="flex flex-col gap-2 mt-3 ">
              {
              [...new Set(products.map(product=>product.width))].map((product) => (
                <div  onClick={()=>handlProduct(product)}
                  className="flex items-center gap-2 cursor-pointer"
                 
                >
                  <input type="checkbox" id="name" />
                  <p
                    className="text-[17px] font-semibold text-gray-600"
                    id="name"
                  >
                    {product}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <div className="col-span-8 ml-7">
        <ShopProduct count={count} width={width} />
      </div>
    </div>
  );
};

export default ShopCategory;
