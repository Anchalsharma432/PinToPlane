import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#44acfc] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo and Description */}
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-gray-300">Pin</span>
            <span className="text-white">ToPlane</span>
          </h1>
          <p className="text-sm mt-2 text-white/80">
            Cleaning Services company
          </p>
          <p className="mt-4 text-sm text-white/80">
            Stay updated with our latest cleaning tips, service updates, and helpful articles on maintaining a spotless home.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#team">Our Team</a></li>
          </ul>
        </div>

        {/* Know More */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Know More</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#">Support</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & conditions</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/30 mt-12 pt-6 text-center text-sm text-white/70">
        2024 “Procleaning” All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer