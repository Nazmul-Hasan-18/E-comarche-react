import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto ">
        <div className="relative">
          {/* Hero Image */}
          <img src="/image/HERO-COVER.jpg" alt="" className="w-full h-auto" />

          {/* Overlay Text */}
          <div className="absolute top-5  md:top-40  transform  px-4 md:px-26  ">
            <div className="flex flex-col justify-center  md:items-start">
              <h3 className="text-sm md:text-3xl font-semibold text-[#29a56c]">
                70% Off For This Winter
              </h3>
              <h1 className="text-2xl md:text-6xl font-bold text-gray-700  md:mt-4">
                Bigest Sale For Winter <br /> Man & Woman
              </h1>
              <Link to="/shopPage">
                <div className="flex items-center gap-1 hover:gap-3 cursor-pointer rounded-sm mt-2 md:mt-10 bg-[#29a56c] text-white py-[7px] md:py-3 px-4 md:px-5  hover:w-45 duration-500 w-30  md:w-38 justify-center">
                  <p className="text-sm md:text-base">Shop Now</p>
                  <div className="text-lg md:text-2xl">
                    <IoIosArrowRoundForward />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
