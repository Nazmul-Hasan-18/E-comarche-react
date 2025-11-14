import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto  relative py-10">
        <img
          className="md:h-130 object-cover rounded-xl w-full"
          src="/../../../../public/image/execulisive colloction.jpg"
          alt=""
        />
        <div className="bg- absolute top-17 md:top-40 md:right-26 right-6">
          <h2 className="text-white md:text-3xl text-lg font-bold">30% off sale</h2>
          <h2 className="md:text-6xl text-2xl font-bold  md:mt-3 text-white md:leading-14 leading-6">
            Latest Exclusive <br /> Summer Collection
          </h2>
          <div className="flex items-center gap-1 hover:gap-3 text-sm md:text-md cursor-pointer rounded-sm md:mt-10 mt-2 bg-[#29a56c] text-white py-2 md:py-3 px-1 md:px-6 hover:w-40 duration-500  w-30  md:w-36 justify-center">
            <p>Shop Now</p>
            <div className="text-2xl">
              <IoIosArrowRoundForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
