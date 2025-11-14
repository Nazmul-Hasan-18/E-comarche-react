import React, { useState } from "react";
import { LuTableOfContents } from "react-icons/lu";
import { IoChevronDownSharp } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri"; // Close icon added
import { NavLink } from "react-router";
import useCustomHook from "../../customHook/UseCustomHook";

const Bottom = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { items } = useCustomHook("headerCategory.json");

  return (
    <div className="py-4 border-b border-gray-300">
      <div className="container mx-auto md:px-26 px-4 flex flex-col md:flex-row justify-between md:items-center gap-4">

        {/* Mobile: Left + Right */}
        <div className="flex justify-between w-full md:hidden">
          {/* Left: Categories */}
          <div className="relative ">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 bg-[#29A56C] rounded-md px-4 py-3 text-white text-base"
            >
              <LuTableOfContents className="text-2xl" />
              <span>Browse All Categories</span>
              <IoChevronDownSharp
                className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-[48vw] bg-white border border-gray-200 shadow-lg rounded-md p-4 grid grid-cols-1 gap-3 z-10 max-h-80 overflow-y-auto">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 border px-2 py-2 rounded-sm hover:shadow-sm cursor-pointer"
                  >
                    <img className="w-7" src={item.image} alt={item.name} />
                    <h3 className="text-gray-700 text-sm">{item.name}</h3>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Mobile Hamburger / Cross */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-2xl text-gray-600"
            >
              {mobileMenuOpen ? <RiCloseLine /> : <RiMenu2Line />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="flex flex-col gap-3 mt-2 md:hidden font-semibold text-gray-600 bg-white border border-gray-200 rounded-md p-4 shadow-md w-full">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shopPage">Shop Now</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <button className="flex items-center gap-2 bg-[#29A56C] px-4 py-2 text-white rounded-md mt-2">
              <AiOutlineShoppingCart className="text-xl" />
              Shop Now
            </button>
          </div>
        )}

        {/* Desktop: Left, Center Nav, Right */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Left: Categories */}
          <div className="relative flex-shrink-0">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 bg-[#29A56C] rounded-md px-4 py-3 text-white"
            >
              <LuTableOfContents className="text-2xl" />
              <span>Browse All Categories</span>
              <IoChevronDownSharp
                className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-[480px] bg-white border border-gray-200 shadow-lg rounded-md p-4 grid grid-cols-2 gap-3 z-10 max-h-96 overflow-y-auto">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 border px-2 py-2 rounded-sm hover:shadow-sm cursor-pointer"
                  >
                    <img className="w-7" src={item.image} alt={item.name} />
                    <h3 className="text-gray-700 text-sm">{item.name}</h3>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Center Nav Links */}
          <div className="flex-1 flex justify-center gap-6 font-semibold text-gray-600">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shopPage">Shop Now</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Right: Shop Now Button */}
          <div>
            <button className="flex items-center gap-2 bg-[#29A56C] px-5 py-3 text-white rounded-md hover:-translate-y-1 transition-transform duration-300">
              <AiOutlineShoppingCart className="text-xl" />
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
