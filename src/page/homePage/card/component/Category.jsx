import React, { useState } from "react";
import Blog from "./Blog";
import useCustomHook from "../../../shared/customHook/UseCustomHook";

const Category = () => {
  const { items } = useCustomHook("category.json");
  const [count, setCount] = useState(null);
  const handleClick = (name) => {
    setCount(name);
    

  };

  return (
    <div>
      <div className="container mx-auto md:px-26 px-5 flex flex-col md:flex-row justify-between items-center pt-7">
        <div className="text-center md:text-left">
          <h2 className="md:text-4xl text-3xl text-gray-700 font-bold ">
            Propular <span className="text-[#29a56e] ">Product</span>
          </h2>
          <h3 className="text-gray-500 mt-1">
            Shop online for new arrivals and get free shipping!
          </h3>
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-end mt-2 md:mt-0 md:gap-7  font-semibold text-gray-700">
          <p onClick={() => handleClick(null)} className=" cursor-pointer">
            All
          </p>
          {items.map((item) => (
            <div key={item.name}>
              <p
                onClick={() => handleClick(item.name)}
                className="cursor-pointer hover:text-[#56a29c] duration-300 ml-7 md:ml-0"
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Blog count={count} />
      </div>
    </div>
  );
};

export default Category;
