import React from "react";
import { AiFillFund } from "react-icons/ai";
import {
  FaAppStoreIos,
  FaCcApplePay,
  FaCcPaypal,
  FaCcVisa,
  FaFacebookF,
  FaGithub,
  FaGofore,
  FaGooglePlay,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdAddLocationAlt, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className="border-t border-b border-gray-300 py-12">
        <div className="container mx-auto px-6 md:px-26 flex gap-54">
          <div>
            <div className="flex items-center gap-3">
              <div className="text-2xl bg-[#29a56c] p-3 rounded-full text-white">
                <FaGofore />
              </div>
              <h3 className="font-bold text-3xl text-gray-800">Nazmul</h3>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Nazmul is the biggest market of grocery products. <br />
              Get your daily needs from our store.
            </p>
            <div className="flex  items-center gap-4 mt-4">
              <div className="flex items-center gap-2 border border-gray-400 px-5 py-2.5 rounded-sm">
                <FaGooglePlay />
                <p className="text-sm font-semibold text-gray-700">
                  Google Play
                </p>
              </div>
              <div className="flex items-center gap-2 border border-gray-400 px-5 py-2.5 rounded-sm">
                <FaAppStoreIos />
                <p className="text-sm font-semibold text-gray-700">App Store</p>
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className=" flex gap-39">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Category
                </h3>
                <div className="text-sm mt-3  flex flex-col gap-2">
                  <p className=" cursor-pointer">Dairy & Milk</p>
                  <p className=" cursor-pointer">Snack & Spice</p>
                  <p className=" cursor-pointer">Fast Food</p>
                  <p className=" cursor-pointer">Juice & Drinks</p>
                  <p className=" cursor-pointer">Bakery</p>
                  <p className=" cursor-pointer">Seafood</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Company</h3>
                <div className="text-sm mt-3  flex flex-col gap-2">
                  <p className=" cursor-pointer">About us</p>
                  <p className=" cursor-pointer">Delivery</p>
                  <p className=" cursor-pointer">Legal Notice</p>
                  <p className=" cursor-pointer">Terms & Conditions</p>
                  <p className=" cursor-pointer">Secure Payment</p>
                  <p className=" cursor-pointer">Contact us</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Contact</h3>
                <div className="text-sm mt-3  flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <div className="text-xl text-gray-700">
                      <MdAddLocationAlt />
                    </div>
                    <p className="text-gray-600">
                      Purbo Rampura , Banasree , Dhaka
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-xl text-gray-700">
                      <IoCall />
                    </div>
                    <p className="text-gray-600">01756-966372</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-xl text-gray-700">
                      <MdEmail />
                    </div>
                    <p className="text-gray-600">nazmulhasan@gmail.com</p>
                  </div>
                  <div className="flex gap-2 items-center text-lg text-gray-700">
                    <FaFacebookF />
                    <FaLinkedinIn />
                    <FaGithub />
                    <FaTwitter />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto md:px-26 px-6 py-3 flex flex-col md:flex-row  md:justify-between ">
        <p className="text-sm text-gray-500">Copyright © 2025 <span className="text-[#29a56c] font-bold">Nazmul</span> all rights reserved. Powered by <span className="text-[#29a56c] font-bold">Nazmul</span>  .</p>
        <div className="flex items-center gap-3 text-2xl mt-2 md:mt-0">
            <FaCcVisa />
            <FaCcPaypal />
            <FaCcApplePay />
            <AiFillFund />
        </div>
      </div>
    </div>
  );
};

export default Footer;
