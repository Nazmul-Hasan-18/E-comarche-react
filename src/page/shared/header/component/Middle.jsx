import React from "react";
import { BsSearch } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Middle = () => {
  return (
    <div className="py-4 border-b border-gray-300 w-full">
      <div className="container md:px-26 mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6  w-full">

        {/* TOP ROW: Logo + User + Cart */}
        <div className="flex justify-between w-full md:w-auto items-center">
          {/* Logo */}
          <img
            className="w-24 md:w-28"
            src="/image/logo.png"
            alt="Logo"
          />

          {/* Mobile Icons */}
          <div className="flex items-center gap-4 text-gray-600 text-2xl md:hidden">
            <CiUser /> {/* User icon shown on mobile */}
            <AiOutlineShoppingCart />
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="flex items-center gap-4 border border-gray-300 py-2 px-4 rounded-sm w-full md:w-2/6">
          <div className="text-gray-600 text-lg">
            <BsSearch />
          </div>
          <input
            className="w-full border-none outline-none text-sm"
            type="text"
            placeholder="Search..."
          />
        </div>

        {/* RIGHT: ACCOUNT + CART for Desktop */}
        <div className="hidden md:flex items-center gap-5">
          {/* Account */}
          <div className="flex items-center gap-2">
            <CiUser className="text-[26px] text-gray-600" />
            <div className="text-gray-600">
              <p className="text-[13px]">Account</p>
              <h2 className="mt-[-4px] font-semibold">Login / Register</h2>
            </div>
          </div>

          {/* Cart */}
          <div className="flex items-center gap-2">
            <AiOutlineShoppingCart className="text-[26px] text-gray-600" />
            <div className="text-gray-600">
              <p className="text-[13px]">Cart</p>
              <h2 className="mt-[-4px] font-semibold">Login</h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Middle;
