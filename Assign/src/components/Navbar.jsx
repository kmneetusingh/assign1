import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for hamburger and close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        Real Estate UI
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6">
        <Link to="/" className="text-gray-700 hover:text-blue-600"></Link>
        <Link to="/favorites" className="text-gray-700 hover:text-blue-600">Favorites</Link>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <Link to="/" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Home</Link>
          <Link to="/favorites" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Favorites</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
