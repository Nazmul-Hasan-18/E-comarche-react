import React from "react";

const AboutSection = () => {
  return (
    <div>
      <div className="container mx-auto px-26 grid grid-cols-9 gap-9 pt-13">
        <div className="col-span-5">
          <div className="flex items-center gap-5 ">
            <div>
              <img
                className="w-210 rounded-md"
                src="/../../../../public/image/about.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-90 rounded-md"
                src="/../../../public/image/about-2.png"
                alt=""
              />
              <img
                className="w-210 mt-5 "
                src="/../../../public/image/about-3.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" col-span-4">
          <h2 className="text-4xl font-bold mt-25">Who <span className="text-[#29a56c]">We Are?</span></h2>
          <h4 className="text-xl font-semibold leading-6 mt-3 ">
            We’re here to serve only the best products for you. Enriching your
            homes with the best essentials.
          </h4>
          <p className="mt-4 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
