import React from "react";
import banner from "../../assets/mobile-banner.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import NearEvents from "../NearEvents/NearEvents";
import ConsultationSection from "../ConsultationSection/ConsultationSection";

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
          <button className="bg-buttoncolor-light p-4 rounded-full mt-4 flex justify-center items-center gap-4 ">
            Get Started for FREE Now{" "}
            <FaArrowAltCircleRight size={32} className="text-white" />
          </button>
        </div>
        <div>
          <img src={banner} alt="banner" />
        </div>
      </div>
      <NearEvents />
      <ConsultationSection />
    </>
  );
};

export default HomePage;
