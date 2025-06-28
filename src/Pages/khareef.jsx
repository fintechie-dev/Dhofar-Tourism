import React from 'react'

const AboutKhareef = () => {
  return (
    <div className="bg-green-50 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">About Khareef</h2>
        
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Khareef is the magical monsoon season that transforms Salalah and Dhofar into a lush paradise, attracting visitors from around the world to enjoy its cool weather, greenery, and breathtaking landscapes.
        </p>

        {/* Image */}
        <img 
          src="/images/khareef-view.jpg" 
          alt="Khareef Season in Salalah" 
          className="rounded-lg shadow-lg mx-auto mb-10"
        />

        <div className="text-left space-y-8">

          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-2">Why is our summer not really summer?</h3>
            <p className="text-gray-700">
              Due to Dhofar's unique climatic phenomenon, monsoon winds cause a drop in temperature and bring refreshing rainfall, creating a season unlike any other in the Gulf.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-2">Temperature & Weather</h3>
            <p className="text-gray-700">
              Average temperature in Salalah city is around 26°C, while the mountain areas remain cooler at about 21°C during Khareef (June to September).
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-2">Local Highlights</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Rich tropical fruit cultivation thanks to the cool, moist climate.</li>
              <li>Frankincense trees (White Gold), an ancient Omani natural treasure.</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}

export default AboutKhareef
