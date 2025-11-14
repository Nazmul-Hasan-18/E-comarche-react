import React from "react";

const Tesmosial = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-6 md:px-26 py-6">
        <div className="bg- relative">
          <img
            src="https://sakib-ecommerce-react-router.netlify.app/assets/12-ytEU1d9X.jpg"
            alt=""
          />
          <div className=" absolute top-9 right-6">
            <h3 className="md:text-4xl text-2xl font-bold text-white">
              Women's <br /> Collection
            </h3>
            <p className="bg-[#29a56c] md:w-25 w-20 text-[13px] md:text-sm text-white rounded-sm md:mt-5 font-semibold text-center mt-3 py-1 md:py-2">
              Shop Now
            </p>
          </div>
        </div>
        <div className=" relative">
          <img
            src="https://sakib-ecommerce-react-router.netlify.app/assets/13-BixKb9Zl.jpg"
            alt=""
          />
          <div className="bg- absolute top-9 right-6">
            <h3 className="md:text-4xl text-2xl font-bold text-white">
              Children's <br /> Collection
            </h3>
            <p className="bg-[#29a56c] md:w-25 w-20 text-[13px] md:text-sm text-white rounded-sm md:mt-5 font-semibold text-center mt-3 py-1 md:py-2">
              Shop Now
            </p>
          </div>
        </div>
        <div className=" relative">
          <img
            src="https://sakib-ecommerce-react-router.netlify.app/assets/14-CYJPCf3B.jpg"
            alt=""
          />
          <div className="bg- absolute top-9 right-6">
            <h3 className="md:text-4xl text-2xl font-bold text-white">Men's <br /> Collection</h3>
            <p className="bg-[#29a56c] md:w-25 w-20 text-[13px] md:text-sm text-white rounded-sm md:mt-5 font-semibold text-center mt-3 py-1 md:py-2">
              Shop Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tesmosial;
