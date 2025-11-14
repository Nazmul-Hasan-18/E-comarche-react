import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const Top = () => {
  const [flag, setFlag] = useState(false);

  return (
    <div className="py-3 sm:py-2 bg-gray-100 ">
      <div className="container mx-auto px-6   md:px-26 flex items-center justify-between text-gray-600">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-4 text-xs md:text-sm">
          <div className="hidden sm:block">
            <div className="flex items-center gap-1 ">
              <IoIosCall className="text-lg md:text-xl" />
              <p>01756-966372</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <FaWhatsapp className="text-base md:text-lg" />
            <p>01322-575923</p>
          </div>
        </div>

        {/* MIDDLE TEXT — hide on mobile/tablet */}
        <p className="hidden lg:block text-sm">
          World's Fastest Online Shopping Destination
        </p>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 text-xs md:text-sm relative">
          <p className="cursor-pointer">Help?</p>
          <p className="cursor-pointer">Track Order?</p>

          {/* LANGUAGE SELECT */}
          <div className="relative">
            <p
              onMouseEnter={() => setFlag(true)}
              onMouseLeave={() => setFlag(false)}
              className="cursor-pointer"
            >
              English
            </p>

            {/* Dropdown */}
            <div
              onMouseEnter={() => setFlag(true)}
              onMouseLeave={() => setFlag(false)}
              className={`${
                flag ? "block" : "hidden"
              } absolute top-6 right-0 bg-white shadow-md py-2 px-4 rounded w-24 flex flex-col gap-1 text-xs`}
            >
              <p className="cursor-pointer hover:text-blue-500">Bangla</p>
              <p className="cursor-pointer hover:text-blue-500">English</p>
              <p className="cursor-pointer hover:text-blue-500">Hindi</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Top;
