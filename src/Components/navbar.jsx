import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-green-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h2 className="text-2xl font-bold">
          <Link to="/">Salalah Tourism Guide</Link>
        </h2>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about-khareef" className="hover:underline">About Khareef</Link></li>
          <li><Link to="/places" className="hover:underline">Places</Link></li>
          <li><Link to="/hotels" className="hover:underline">Hotels</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
