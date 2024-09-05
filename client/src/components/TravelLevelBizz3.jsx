import React from "react";
import { useLocation } from "react-router-dom";
import bicyclelogo from "../assets/bicycle-logo.png";
import bicycle_crop from "./../assets/bicycle-logo-crop.png";
import green_arch from "./../assets/green-arch.png";
import cc_green from "./../assets/cc_green.svg";

export default function TravelLevelBizz3() {
  const location = useLocation();
  const { email, org } = location.state || {};

  return (
    <div className="flex flex-col items-center h-screen w-10/12 mx-auto border border-gray-200 border-t-0">
      <div className="flex flex-col w-full relative">
        <div className="bg-blue clip-path-custom z-0 inset-0 absolute h-full" />
        <div className="w-full bg-dark-grey flex justify-start p-2 z-20">
          <img
            src={bicyclelogo}
            className="w-30 h-auto ml-2 z-10"
            alt="Bicycle Logo"
          />
          <div className="flex justify-evenly items-center w-full h-full ">
            <p className="menu m-0 text-white">Option 1</p>
            <p className="menu m-0 text-white">Option 2</p>
            <p className="menu m-0 text-white">Option 3</p>
          </div>
        </div>
        <div className="flex flex-col w-[1200px] h-auto pl-5 pr-5 mt-20 z-10">
          <h3 className="color-heading text-red">Sub-heading Text</h3>
          <div className="flex w-full z-10">
            <div className="flex flex-col tracking-wider flex-grow w-fit p-0 m-0 pr-5">
              <h1 className="heading p-0 text-white">
                This heading contains exactly six words
              </h1>
              <p className="body p-0 text-left font-extralight text-xl text-white leading-8">
                Forty-five words are written here, indicating the total word
                count for this brief passage. From beginning to end, each word
                is accounted for, ensuring precision and clarity in its
                delivery. This concise structure maintains consistency
                throughout, capturing the intended message perfectly.
              </p>
              <div className="flex justify-between items-center mt-4 w-3/5">
                <button className="sub-heading tracking-wide font-light text-lg w-fit m-0 pl-7 pr-7 pt-1 bg-red text-white rounded-full">
                  Button button &gt;
                </button>
                <p className="sub-heading tracking-wide font-light text-lg m-0 mt-1 text-white cursor-pointer">
                  Start now &nbsp; &gt;
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center w-[1400px] h-[700px] border-[12px] border-red bg-white z-20 relative  m-0 -mr-[120px]">
              <h1 className="heading text-dark-grey">HERO IMAGE</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full w-full">

        
      </div>
    </div>
  );
}
