import React, { useState } from "react";
import logo from "../../assets/react.svg";
import { Button } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ContactFormModal from "../ContactFormModal/ContactFormModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const onClose = () => {
    setShowModel(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex justify-between p-4 items-center bg-gray-200 max-h-16">
        <div className="flex items-center text-primary-dark mr-2">
          <img src={logo} alt="React Logo" className="h-12" />
          <h1 className="text-xl font-bold ml-2 whitespace-nowrap ">Welcome</h1>
        </div>

        {/* Full menu for larger screens */}
        <div className="hidden md:flex gap-2 items-center text-primary-light">
          <ul className="flex gap-4 items-center">
            <li className="whitespace-nowrap">Student Services</li>
            <li className="whitespace-nowrap">Study Abroad</li>
            <li className="whitespace-nowrap">Scholarship</li>
            <li className="whitespace-nowrap">Test Preparation</li>
            <li className="whitespace-nowrap">Success Stories</li>
            <li className="whitespace-nowrap">Upcoming Events</li>
            <li className="whitespace-nowrap">Blogs</li>
          </ul>
        </div>
        <button
          onClick={() => setShowModel(true)}
          className="bg-primary-dark text-gray-50 rounded-full p-3"
        >
          Meet Us Online
        </button>
        {showModel && <ContactFormModal onClose={onClose} />}

        {/* Hamburger menu for smaller screens */}
        <div className="md:hidden flex items-center">
          <button
            variant="text"
            className="text-primary-dark"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden lg:hidden bg-gray-200">
          <ul className="flex flex-col gap-4 items-center p-4 text-primary-dark">
            <li className="w-full text-center">Student Services</li>
            <li className="w-full text-center">Study Abroad</li>
            <li className="w-full text-center">Scholarship</li>
            <li className="w-full text-center">Test Preparation</li>
            <li className="w-full text-center">Success Stories</li>
            <li className="w-full text-center">Upcoming Events</li>
            <li className="w-full text-center">Blogs</li>
          </ul>
          <div className="flex justify-center pb-4">
            <button
              onClick={() => setShowModel(true)}
              className="bg-primary-dark text-gray-50 rounded-full p-2 "
            >
              Meet Us Online
            </button>
            {showModel && <ContactFormModal onClose={onClose} />}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
