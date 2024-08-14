import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import ContactFormModal from "../ContactFormModal/ContactFormModal";

const ConsultationSection = () => {
  const [showModel, setShowModel] = useState(false);
  const onClose = () => {
    setShowModel(false);
  };
  return (
    <div className="bg-purple-50 py-16 px-6">
      <div className="   items-center">
        <div className="text-center  ">
          <h2 className="text-3xl font-semibold text-gray-800">
            With you at every step of your study abroad journey
          </h2>
          <p className="mt-4 text-gray-600">
            Get personalised, friendly, honest guidance for free from the top
            consultancy in Nepal.
          </p>
          <button
            onClick={() => setShowModel(true)}
            className="inline-block mt-6 bg-blue-900 text-gray-50 px-6 py-3 rounded-full shadow-lg hover:bg-blue-800 transition"
          >
            Book a free consultation
            <ArrowRightIcon className="w-5 h-5 inline ml-2" />
          </button>
          {showModel && <ContactFormModal onClose={onClose} />}
        </div>
      </div>
    </div>
  );
};

export default ConsultationSection;
