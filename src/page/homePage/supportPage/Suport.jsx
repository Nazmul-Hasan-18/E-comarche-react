import React from "react";
import { FaHome, FaShippingFast } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Suport = () => {
  return (
    <div>
      <div className=" container mx-auto px-10 md:px-26 grid md:grid-cols-4 grid-cols-1 gap-5 py-12">
        <div className="flex flex-col items-center border px-5 py-5 group cursor-pointer bg-gray-100 border-gray-300 rounded-lg">
          <div className="text-4xl text-[#29a56c] group-hover:-translate-y-2 duration-500 ">
            <FaShippingFast />
          </div>
          <h4 className="text-xl font-semibold text-gray-700 mt-3">Free Shipping</h4>
          <p className="text-center text-sm ">Free shipping on all US order or order above </p>
        </div>
        <div className="flex flex-col items-center border px-5 py-5 group cursor-pointer bg-gray-100 border-gray-300 rounded-lg">
          <div className="text-4xl text-[#29a56c] group-hover:-translate-y-2 duration-500 ">
            <FaHome />
          </div>
          <h4 className="text-xl font-semibold text-gray-700 mt-3">24x7 Support</h4>
          <p className="text-center text-sm ">Contact us 24 hours a day, 7 days a week </p>
        </div>
        <div className="flex flex-col items-center border px-5 py-5 group cursor-pointer bg-gray-100 border-gray-300 rounded-lg">
          <div className="text-4xl text-[#29a56c] group-hover:-translate-y-2 duration-500 ">
            <IoCart />
          </div>
          <h4 className="text-xl font-semibold text-gray-700 mt-3">30 Days Return</h4>
          <p className="text-center text-sm ">Simply return it within 30 days for an exchange </p>
        </div>
        <div className="flex flex-col items-center border px-5 py-5 group cursor-pointer bg-gray-100 border-gray-300 rounded-lg">
          <div className="text-4xl text-[#29a56c] group-hover:-translate-y-2 duration-500 ">
            <TfiHeadphoneAlt />
          </div>
          <h4 className="text-xl font-semibold text-gray-700 mt-3">Payment Secure</h4>
          <p className="text-center text-sm ">Secure payment processing available 24/7</p>
        </div>
      </div>
    </div>
  );
};

export default Suport;
