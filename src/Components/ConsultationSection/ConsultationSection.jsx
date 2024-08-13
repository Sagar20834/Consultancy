import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid"; // Update the import path for Heroicons v2
import { Carousel } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FiClipboard, FiDollarSign, FiGlobe } from "react-icons/fi";

const ConsultationSection = () => {
  return (
    <div className="bg-purple-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800">
            With you at every step of your study abroad journey
          </h2>
          <p className="mt-4 text-gray-600">
            Get personalised, friendly, honest guidance for free from the top
            consultancy in Nepal.
          </p>
          <Link
            to="/consultation"
            className="inline-block mt-6 bg-blue-900 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-800 transition"
          >
            Book a free consultation
            <ArrowRightIcon className="w-5 h-5 inline ml-2" />
          </Link>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0"></div>
      </div>
    </div>
  );
};

export default ConsultationSection;
