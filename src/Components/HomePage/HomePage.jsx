import React, { useState } from "react";
import banner from "../../assets/mobile-banner.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import NearEvents from "../NearEvents/NearEvents";
import ConsultationSection from "../ConsultationSection/ConsultationSection";
import ContactFormModal from "../ContactFormModal/ContactFormModal";
import CountryCard from "../Cards/CountryCard";
import { FaGreaterThan } from "react-icons/fa6";

const HomePage = () => {
  const [showModel, setShowModel] = useState(false);
  const onClose = () => {
    setShowModel(false);
  };
  const image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXA1REJvHOiZRE1xjMTziNs3X4hYFh0Hv1lw&s";
  const url = "/";
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
          <button
            onClick={() => setShowModel(true)}
            className="bg-buttoncolor-light p-4 rounded-full mt-4 flex justify-center items-center gap-4 "
          >
            Get Started for FREE Now{" "}
            <FaArrowAltCircleRight size={32} className="text-white" />
          </button>
          {showModel && <ContactFormModal onClose={onClose} />}
        </div>
        <div>
          <img src={banner} alt="banner" />
        </div>
      </div>
      <NearEvents />
      <ConsultationSection />
      <div className="my-8 p-8">
        <div className="text-center">
          {" "}
          <h1 className="text-3xl font-semibold text-primary-light my-2">
            Wherever you want to go, we'll get you there.
          </h1>
          <p className="text-xl font-medium p-8 text-violet-600">
            Explore the best study destinations in the world! Learn all about
            the countries' top universities, scholarships, cost of living,
            post-study work rights and more
          </p>
        </div>
        <div className=" flex  gap-8 flex-wrap m-8  sm:w-full">
          <CountryCard image={image} url={url} Country={"UK"} />
          <CountryCard image={image} url={url} Country={"UK"} />
          <CountryCard image={image} url={url} Country={"UK"} />
          <CountryCard image={image} url={url} Country={"UK"} />
          <CountryCard image={image} url={url} Country={"UK"} />
          <CountryCard image={image} url={url} Country={"UK"} />
          <CountryCard image={image} url={url} Country={"UK"} />
        </div>
        <div className=" my-16 flex  flex-col  items-center text-center">
          <h1 className="text-3xl font-semibold text-primary-light my-2">
            Want to read on other topics?
          </h1>
          <div>
            <button className=" mt-8 flex justify-center text-center items-center  text-violet-600 border border-blue-500 p-4  rounded-full  gap-2 hover:text-white hover:bg-primary-dark text-lg">
              <span className="text-lg "> Explore our blogs</span>{" "}
              <FaGreaterThan size={12} />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
