import React, { useState } from 'react';
import logo from '../../assets/logo.jpeg'

import { Link, useLocation } from 'react-router-dom';


export default function AlpixinHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/Home';

  return (
    <>
      <nav className={` bg-header-skin flex items-center justify-between px-8 py-4 ${!isHomePage ? 'bg-dark-blue' : ''}`}>
        <div className="flex items-center">
          <div className=" bg-black flex items-center justify-center text-yellow-500 font-script">
            <img src={logo} alt="logo" className="w-40 h-10 object-cover" />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8 bg-header-skin">
          <Link to="/" className="text-black font-medium hover:text-dark-blue">Home</Link>
          <Link to="/about-us" className="text-black font-medium hover:text-dark-blue">About Us</Link>
          <Link to="/Services" className="text-black font-medium hover:text-dark-blue flex items-center">
            Services
            <svg className="ml-1 w-1 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </Link>
          <Link to="/industries" className="text-black font-medium hover:text-dark-blue">Industries</Link>
          <Link to="/hiretalent" className="text-black font-medium hover:text-dark-blue">Hire Talent</Link>
          <Link to="/portfolio" className="text-black font-medium hover:text-dark-blue">Portfolio</Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/Services" className="border border-dark-blue text-black px-4 py-2 hover:bg-white hover:text-dark-blue transition duration-300">
            BOOK A 30 MIN CALL
          </Link>
        </div>

        <button 
          type="button" 
          className="md:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-90 p-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-white font-medium">Home</Link>
            <Link to="/about-us" className="text-white font-medium">About Us</Link>
            <Link to="/Services" className="text-white font-medium">Services</Link>
            <Link to="/industries" className="text-white font-medium">Industries</Link>
            <Link to="/hiretalent" className="text-white font-medium">Hire Talent</Link>
            <Link to="/portfolio" className="text-white font-medium">Portfolio</Link>
            <Link to="/contact" className="text-white font-medium">Contacts</Link>
            <Link to="/Services" className="border border-white text-black px-4 py-2 text-center">
              BOOK A VISIT
            </Link>
          </div>
        </div>
      )}
    </>
  );
}