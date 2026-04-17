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
            <button className="btn bg-[#244D3F] text-white">
              <FaPlus /> Add a Friend
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full  p-6 sm:p-10">
          <div className="w-[95%] md:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">          
              <div               
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col items-center justify-center text-center"
              >                
                <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900">
                  10
                </h2>               
                <p className="text-sm font-medium text-slate-500 mt-2">
                  Total Friends
                </p>
              </div>
              <div               
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col items-center justify-center text-center"
              >                
                <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900">
                  3
                </h2>               
                <p className="text-sm font-medium text-slate-500 mt-2">
                  On Track
                </p>
              </div>
              <div               
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col items-center justify-center text-center"
              >                
                <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900">
                  6
                </h2>               
                <p className="text-sm font-medium text-slate-500 mt-2">
                  Need Attention
                </p>
              </div>
              <div               
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col items-center justify-center text-center"
              >                
                <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900">
                  12
                </h2>               
                <p className="text-sm font-medium text-slate-500 mt-2">
                  Interactions This Month
                </p>
              </div>
            
          </div>
          <div className="max-w-5xl mx-auto mt-10 border-t border-gray-100"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
