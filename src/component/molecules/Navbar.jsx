import React, { useState } from 'react';
import logo from "./../../assets/zwilt.png";
import sublogo from "./../../assets/Vector.svg";
import { MenuIcon } from './../atoms/MenuIcon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#525AA0] my-2 mx-2 md:mx-12 p-4 rounded-xl flex justify-between flex-wrap items-center">
      {/* Logo */}
      <div className="text-white flex items-center w-full md:w-auto mb-2 md:mb-0">
        <img src={logo} alt="Logo" className="h-8 w-auto mr-2 md:mr-0" />
        <img src={sublogo} alt="Logo" className="w-auto h-[60%]" />
      </div>

      {/* Menu icon for small screens */}
      <MenuIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Navigation items */}
      <ul className={`flex flex-col md:flex-row justify-center md:justify-start w-full md:w-auto space-y-2 md:space-y-0 md:space-x-4 items-center ${isMenuOpen ? '' : 'hidden md:flex'}`}>
        <li className="text-white font-bold text-lg">Find Work</li>
        <li className="text-white font-extrabold text-lg">Find Talent</li>
        <li className="text-white">Article</li>
        <li className="text-white">About Us</li>
        <li className="text-white">Contact Us</li>
      </ul>

      {/* Login/Join Now buttons */}
      <div className="w-full md:w-auto flex justify-center md:justify-end mt-2 md:mt-0">
        <button className="text-white px-4 py-2 rounded-md">Login</button>
        <button className="bg-white text-[#202229] px-4 py-2 rounded-3xl ml-2 md:ml-4">Join Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
