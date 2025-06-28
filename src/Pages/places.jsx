import React from 'react'
import { easternDhofar, centralDhofar, westernDhofar } from '../data/places'

const Places = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12 text-center">Tourist Places in Dhofar</h2>

      {/* Eastern Dhofar */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold text-green-700 mb-6">Eastern Dhofar</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {easternDhofar.map(place => (
            <div key={`eastern-${place.id}`} className="bg-white shadow rounded-lg overflow-hidden">
              <img src={place.image} alt={place.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-green-800 mb-2">{place.name}</h4>
                <p className="text-gray-700 mb-4">{place.description}</p>
                <a 
                  href={place.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Central Dhofar */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold text-green-700 mb-6">Central Dhofar</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {centralDhofar.map(place => (
            <div key={`central-${place.id}`} className="bg-white shadow rounded-lg overflow-hidden">
              <img src={place.image} alt={place.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-green-800 mb-2">{place.name}</h4>
                <p className="text-gray-700 mb-4">{place.description}</p>
                <a 
                  href={place.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Western Dhofar */}
      <section>
        <h3 className="text-2xl font-bold text-green-700 mb-6">Western Dhofar</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {westernDhofar.map(place => (
            <div key={`western-${place.id}`} className="bg-white shadow rounded-lg overflow-hidden">
              <img src={place.image} alt={place.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-green-800 mb-2">{place.name}</h4>
                <p className="text-gray-700 mb-4">{place.description}</p>
                <a 
                  href={place.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Places
