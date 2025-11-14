import React, { useState } from "react";
import { useParams } from "react-router";
import useCustomHook from "../../customHook/UseCustomHook";
import { FaStar } from "react-icons/fa";
import SliceProduct from "./sliceProduct/SliceProduct";

const SingleProduct = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClicks = () => {
    if (count > 0){
      setCount(count - 1);
    }
    
  };
  const { id } = useParams();
  const { items } = useCustomHook("/products.json");
  const product = items.find((item) => item.id == id);
  return (
    <div>
      <div className="container mx-auto px-46 flex items-center gap-10 py-12">
        <div>
          <img className="w-110 h-110 rounded-xl" src={product?.image} alt="" />
        </div>
        <div>
          <p className="text-gray-500">{product?.categoryName}</p>
          <h2 className="text-[32px] font-bold text-gray-700 mt-1">
            {product?.name}
          </h2>
          <div className="flex items-center gap-14 mt-2">
            <div className="flex items-center gap-1 text-sm text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-sm  text-gray-600">
              Total Rating : {product?.ratings}
            </p>
          </div>
          <div className="flex gap-5 items-center mt-1">
            <h2 className="text-xl font-semibold text-gray-700 ">
              Prices : {product?.price}$
            </h2>
            <h2 className="line-through text-gray-500">{product?.mrp}$</h2>
          </div>
          <p className="w-150 text-sm text-gray-600 ">{product?.description}</p>
          <p className="font-semibold mt-3">
            SKU :{" "}
            <span className="font-medium text-gray-500">{product?.sku}</span>
          </p>
          <p className="font-semibold">
            Stock :{" "}
            <span className="font-medium text-gray-500">{product?.stock}</span>
          </p>
          <p className="font-semibold">
            Closure :{" "}
            <span className="font-medium text-gray-500">
              {product?.closure}
            </span>
          </p>
          <div className="flex items-center gap-4 mt-3">
            <p className="font-semibold ">Size : </p>
            <div className="flex items-center gap-2 ">
              <p className="border px-2 py-0.5 text-sm bg-gray-100 border-gray-200 rounded-sm hover:text-white hover:bg-[#29a56c] duration-500 font-semibold cursor-pointer">
                M
              </p>
              <p className="border px-2.5 py-0.5 text-sm bg-gray-100 border-gray-200 rounded-sm hover:text-white hover:bg-[#29a56c] duration-500 font-semibold cursor-pointer">
                L
              </p>
              <p className="border px-2 py-0.5 text-sm bg-gray-100 border-gray-200 rounded-sm hover:text-white hover:bg-[#29a56c] duration-500 font-semibold cursor-pointer">
                XL
              </p>
              <p className="border px-2 py-0.5 text-sm bg-gray-100 border-gray-200 rounded-sm hover:text-white hover:bg-[#29a56c] duration-500 font-semibold cursor-pointer">
                XXL
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-5 ">
            <div className="flex  items-center gap-4  rounded-sm px-5 border">
              <p className="text-3xl cursor-pointer" onClick={handleClicks}>-</p>
              <p className="text-sm">{count}</p>
              <p onClick={handleClick} className="bg- cursor-pointer text-xl">+</p>
            </div>
            <p className="text-sm font-semibold bg-[#29a56c] text-white px-5 py-2.5 rounded-sm cursor-pointer">Add To Card</p>
          </div>
        </div>
      </div>
      <div>
        <SliceProduct/>
      </div>
    </div>
  );
};

export default SingleProduct;
