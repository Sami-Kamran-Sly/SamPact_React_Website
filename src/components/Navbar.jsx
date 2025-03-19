import { Link } from 'react-router-dom'
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {


    

    const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 px-4">
    <div className="section-padding py-4 flex justify-between items-center relative">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-primary transition-transform duration-300 hover:scale-105">
        YourLogo
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="text-gray-600 hover:text-primary transition-colors duration-300 hover:scale-105"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Contact Button (Desktop Only) */}
      <Link to="/contact" className="btn-primary hidden md:block transition-all duration-300 hover:scale-105">
        Get Started
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-700 text-2xl focus:outline-none z-50 transition-transform duration-300 hover:scale-110"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>

    {/* Mobile Menu */}
    <div
      className={`fixed top-0 left-0 w-full h-screen  shadow-lg flex flex-col items-center justify-center gap-6 transition-all duration-500 transform
            bg-black

        ${
        isOpen ? "translate-x-0 opacity-80" : "-translate-x-full opacity-0"
      } md:hidden`}
    >
      {navLinks.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className="text-gray-700 hover:text-primary text-2xl transition-colors duration-300 hover:scale-110"
          onClick={() => setIsOpen(false)}
        >
          {link.name}
        </Link>
      ))}
      <Link
        to="/contact"
        className="btn-primary text-lg px-6 py-3 transition-transform duration-300 hover:scale-105"
        onClick={() => setIsOpen(false)}
      >
        Get Started
      </Link>
    </div>
  </nav>


  )
}

export default Navbar 