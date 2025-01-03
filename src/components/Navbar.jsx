import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#1D3557] p-4"> {/* Dark Blue / Navy for background */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          My Portfolio
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-[#457B9D]"> {/* Accent Blue for hover */}
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-[#457B9D]">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="text-white hover:text-[#457B9D]">
              Skills
            </a>
          </li>
          <li>
            <a href="#resume" className="text-white hover:text-[#457B9D]">
              Resume
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:text-[#457B9D]">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-[#457B9D]">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
