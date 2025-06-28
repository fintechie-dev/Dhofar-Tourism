import React from 'react'
import { Link } from 'react-router-dom'

const AdArea = () => {
  return (
    <div className="bg-gradient-to-r from-green-700 to-green-900 text-white py-4 px-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between space-y-3 md:space-y-0">
        
        <p className="text-lg font-semibold">
          🚀 Advertise Here – Promote Your Business to Thousands of Salalah Visitors!
        </p>
        
        <Link 
          to="/contact" 
          className="inline-block bg-yellow-400 text-green-900 font-bold px-5 py-2 rounded-full shadow hover:bg-yellow-300 transition"
        >
          Book This Ad Space
        </Link>
        
      </div>
    </div>
  )
}

export default AdArea
