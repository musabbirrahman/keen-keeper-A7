import React from "react";
import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="">
      <div className="hero w-95% md:w-[80%] mx-auto  md:mt-20">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-3xl md:text-5xl font-bold text-[#1F2937]">
              Friends to keep close in your life
            </h1>
            <p className="py-6 text-[#64748B]">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the <br /> relationships that matter most.
            </p>
            <button className="btn bg-[#244D3F] text-white"><FaPlus /> Add a Friend</button>
          </div>
        </div>
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default Banner;
