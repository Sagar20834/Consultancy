import React, { useState } from "react";
import logo from "../../assets/react.svg";
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
    <div className="relative">
      <div className="flex justify-between p-4 items-center border-b shadow-md max-h-16  fixed w-full top-0 bg-white z-1">
        <div className="flex items-center text-primary-dark mr-2">
          <img src={logo} alt="React Logo" className="h-12" />
          <h1 className="text-xl font-bold ml-2 whitespace-nowrap">Welcome</h1>
        </div>

        {/* Full menu for laptop screens and larger */}
        <div className="hidden lg:flex gap-2 items-center text-primary-light">
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

        {/* "Meet Us Online" button for large screens */}
        <button
          onClick={() => setShowModel(true)}
          className="hidden lg:block bg-primary-dark text-gray-50 rounded-full h-12 p-3 text-ellipsis text-nowrap"
        >
          Meet Us Online
        </button>
        {showModel && <ContactFormModal onClose={onClose} />}

        {/* Hamburger menu for mobile screens */}
        <div className="lg:hidden flex items-center">
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
        <div className="lg:hidden fixed top-12 inset-0 bg-gray-200 bg-opacity-100">
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
              className="bg-primary-dark text-gray-50 rounded-full p-2"
            >
              Meet Us Online
            </button>
            {showModel && <ContactFormModal onClose={onClose} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
