import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-customGreen text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Coursoo</div>
        <div className="space-x-4">
          <a href="#home" className="hover:text-hoverBlue">
            Home
          </a>
          <a href="#courses" className="hover:text-hoverBlue">
            Courses
          </a>
          <a href="#about" className="hover:text-hoverBlue">
            About
          </a>
          <a href="#contact" className="hover:text-hoverBlue">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
