import React from 'react'
import { Link } from 'react-router-dom'

const PlaceCard = ({ place }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
      <img 
        src={place.image} 
        alt={place.name} 
        className="rounded-t-lg w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
        <p className="text-gray-600 mb-4">{place.description}</p>
        <a 
          href={place.mapLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-green-700 font-medium hover:underline"
        >
          View on Map
        </a>
        <br />
        <Link 
          to={`/places/${place.id}`}
          className="inline-block mt-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default PlaceCard
