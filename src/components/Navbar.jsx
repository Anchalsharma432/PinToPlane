import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="PinToPlane Logo" className="h-8 w-8" />
          <span className="font-bold text-xl text-gray-800">PinToPlane</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-[#44acfc]">Home</a>
          <a href="#" className="hover:text-[#44acfc]">About us</a>
          <a href="#" className="hover:text-[#44acfc]">Service</a>
          <a href="#" className="hover:text-[#44acfc]">Blog</a>
          <a href="#" className="hover:text-[#44acfc]">Contact</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#"
            className="bg-[#44acfc] text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition"
          >
            Get a quote
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
          <a href="#" className="block text-gray-700 hover:text-[#44acfc]">Home</a>
          <a href="#" className="block text-gray-700 hover:text-[#44acfc]">About us</a>
          <a href="#" className="block text-gray-700 hover:text-[#44acfc]">Service</a>
          <a href="#" className="block text-gray-700 hover:text-[#44acfc]">Blog</a>
          <a href="#" className="block text-gray-700 hover:text-[#44acfc]">Contact</a>
          <a
            href="#"
            className="block bg-[#44acfc] text-white text-center px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition"
          >
            Get a quote
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar