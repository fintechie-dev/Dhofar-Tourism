import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="relative bg-green-50">
      
      {/* Hero Section with Background Image */}
      <div className="relative h-screen bg-center bg-cover" style={{ backgroundImage: "url('/images/khareef-hero.png')" }}>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-green-800 to-transparent opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 md:px-16 lg:px-24 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore Salalah</h1>
          <p className="text-lg md:text-2xl mb-6 max-w-xl">
            Discover the beauty of Khareef season, lush landscapes, and hidden gems of Dhofar with our ultimate tourism guide.
          </p>
          <div className="space-x-4">
            <Link 
              to="/places"
              className="inline-block bg-yellow-400 text-green-900 font-bold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
            >
              Explore Places
            </Link>
            <Link 
              to="/contact"
              className="inline-block bg-white text-green-800 font-semibold px-6 py-3 rounded-full hover:bg-green-100 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>

      {/* Optional Featured Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-green-800 mb-6">Why Visit Salalah?</h2>
        <p className="text-gray-700 mb-4">
          Experience the unique monsoon season, ancient heritage, stunning mountains, and the refreshing greenery of Oman’s jewel city.
        </p>
        <Link 
          to="/about-khareef"
          className="inline-block mt-4 bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
        >
          Learn About Khareef
        </Link>
      </section>

    </div>
  )
}

export default Home
