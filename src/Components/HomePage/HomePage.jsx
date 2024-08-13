import React from "react";
import banner from "../../assets/mobile-banner.png";

const HomePage = () => {
  return (
    <>
      <div className="flex justify-center flex-col items-center  text-center  ">
        <div className=" flex flex-col items-center gap-3  ">
          <h1 className="text-4xl ">
            Nepal's leading study abroad consultants
          </h1>
          <h1 className="text-4xl  ">
            We’ve helped 60,000+ students turn their dreams into reality, for
            FREE!*
          </h1>
          <button className="bg-buttoncolor-light p-4 rounded-full mt-4 ">
            Talk to Us
          </button>
        </div>
        <div>
          <img src={banner} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
