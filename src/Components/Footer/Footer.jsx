import React from "react";

import logo from "../../assets/react.svg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-primary-dark text-white flex flex-col gap-4 p-8 shrink">
        <div className=" grid   grid-cols-1 justify-center sm:grid-cols-4  md:grid-col-2 ">
          <div>
            <div className="flex gap-2">
              <img src={logo} alt="logo" />
              <h1>Comp.Name</h1>
            </div>
            <h1>Let's get social.</h1>
            <div className="flex gap-2 ">
              <FaFacebook />
              <FaLinkedin />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold">About Us</h1>
            <ul className="text-gray-500 mb-2">
              <li>Who We Are</li>
              <li>Our Timeline</li>
              <li>Our Leadership Team</li>
              <li>Patner With Us</li>
              <li>Award Recognitions</li>
              <li>Careers</li>
            </ul>
            <h1 className="text-xl font-bold">Our Services</h1>
            <ul className="text-gray-500">
              <li>Meet Us Online</li>
              <li>Admission Counselling</li>
              <li>Health Cover</li>
              <li>Student Visa Service</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-bold">Quick Links</h1>
            <ul className="text-gray-500 mb-2">
              <li>Visit Our Vietual Office</li>
              <li>Test Preperation</li>
              <li>International Study Guide</li>
              <li>Patner With Us</li>
              <li>Duolingo English Test</li>
            </ul>
            <h1 className="text-xl font-bold">Study Destinations</h1>
            <ul className="text-gray-500">
              <li>Study In Australia</li>
              <li>Study In Canada</li>
              <li>Study In Europe</li>
              <li>Study In New Zealand</li>
              <li>Study In UK</li>
              <li>Study In USA</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-bold">Courses Abroad</h1>
            <ul className="text-gray-500 mb-2">
              <li>MBA in Australia</li>
              <li>MBA in USA</li>
              <li>MBA in Canada</li>
            </ul>
            <h1 className="text-xl font-bold">Our Branches</h1>
            <ul className="text-gray-500">
              <li>Kathmandu</li>
              <li>Pokhara</li>
              <li>Chitwan</li>
            </ul>
            <h1 className="text-xl font-bold">Events</h1>
            <ul className="text-gray-500">
              <li>Upcoming Events</li>
              <li>Webinars</li>
              <li>Pathfinder</li>
              <li>Unisessions</li>
            </ul>
          </div>
        </div>

        <div className="">
          <div className="bg-white h-1 w-full mb-4" />
          <div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-center">
              <li>Australia |</li>
              <li>Bangladesh |</li>
              <li>India |</li>
              <li>Indonesia |</li>
              <li>Malaysia |</li>
              <li>Nepal |</li>
              <li>Nigeria |</li>
              <li>Philippines |</li>
              <li>Singapore |</li>
              <li>Sri Lanka |</li>
              <li>Thailand |</li>
              <li>Vietnam |</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
