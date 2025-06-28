import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 md:flex md:justify-between">
        
        {/* Left - Site Info */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold">Salalah Tourism Guide</h3>
          <p className="mt-2 text-gray-200">
            Your ultimate guide to exploring the beauty of Dhofar and Khareef season.
          </p>
        </div>

        {/* Right - Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul>
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/places" className="hover:underline">Places</Link></li>
            <li><Link to="/hotels" className="hover:underline">Hotels</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-green-900 text-center py-4 mt-4">
        <p>© {new Date().getFullYear()} FinTechie.dev All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
