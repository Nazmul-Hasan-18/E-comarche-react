import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const ProductCard = ({ item }) => {
  return (
    <div className="">
     <Link to= {`/singleProduct/ ${item.id}`}>
      <div className="bg-[#F7F7F7] py-6 rounded-xl group hover:overflow-hidden cursor-pointer" >
        <img  className="h-45 w-full group-hover:scale-110 duration-500 " src={item?.image} alt="" />
        <div className="px-5 mt-3">
          <p className="text-gray-600 ">{item?.categoryName}</p>
          <h3 className="text-lg font-semibold text-gray-700 mt-1">{item?.name}</h3>
          <div className="flex items-center gap-1  text-sm  text-yellow-500 mt-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div>
            <p className="text-[#56a29e] font-semibold mt-2">{item?.price}$ <span className="line-through font-medium text-sm ml-1 ">{item?.mrp}$</span></p>
          </div>
        </div>
      </div>
     </Link>
    </div>
  );
};

export default ProductCard;

 