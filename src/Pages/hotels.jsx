import React from 'react'

const hotels = [
  {
    id: 1,
    name: "Al Baleed Resort (Anantara)",
    description: "Luxury beachfront resort with premium facilities and dining options.",
    image: "/images/al-baleed.jpg",
    mapLink: "https://maps.app.goo.gl/6m2Bszbac7CyowbT9"
  },
  {
    id: 2,
    name: "Millennium Resort",
    description: "Modern rooms with sea views and close to key attractions.",
    image: "/images/millennium.jpg",
    mapLink: "https://maps.app.goo.gl/ddfx9ZruZorwZT7e8"
  },
  {
    id: 3,
    name: "Hilton Salalah Resort",
    description: "Well-known international hotel with beachfront access.",
    image: "/images/hilton.jpg",
    mapLink: "https://maps.app.goo.gl/ea5xVAT6bctYvfzg8"
  },
  // Add more hotels here
]

const Hotels = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-green-800 mb-10 text-center">Hotels & Resorts in Salalah</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {hotels.map(hotel => (
          <div key={hotel.id} className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <img src={hotel.image} alt={hotel.name} className="rounded-t-lg w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
              <p className="text-gray-600 mb-4">{hotel.description}</p>
              <a 
                href={hotel.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 font-medium hover:underline"
              >
                View on Map
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hotels
