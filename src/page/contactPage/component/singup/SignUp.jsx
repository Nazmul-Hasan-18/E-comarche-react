import React from "react";

const SignUp = () => {
  return (
    <div>
      <div className="grid grid-cols-10 container mx-auto  px-26 py-10">
        <div className="col-span-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15927.545120272622!2d90.41127958145982!3d23.768559094847586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c740f58538d9%3A0x24b88001005eb461!2sBdcalling%20Academy!5e0!3m2!1sen!2sbd!4v1762753567287!5m2!1sen!2sbd"
            width="100%"
            height="367"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="col-span-5 ml-12">
            <input className=" outline-none border border-gray-200  px-4 py-2 w-[100%] rounded-sm" type="text" placeholder="Your name " /><br />
            <input className=" outline-none border border-gray-200  px-4 py-2 w-[100%] rounded-sm mt-3" type="text" placeholder="Your Phone Number" /><br />
            <input className=" outline-none border border-gray-200  px-4 py-2 w-[100%] rounded-sm mt-3" type="email" placeholder="Email Address" />
            <br />
            <textarea  type="" name="Your Message" placeholder="Message....."  className="border border-gray-200 w-[100%] mb-7 h-35 mt-3 px-4 py-2"></textarea>
            <a className="bg-[#29a56c] px-70 py-3 font-bold text-white  text-center rounded-sm" href="#">Submit</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
