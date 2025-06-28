import React from 'react'
import { useParams } from 'react-router-dom'

const places = [
  // Same data array as before
]

const PlaceDetails = () => {
  const { id } = useParams()
  const place = places.find(p => p.id === parseInt(id))

  if (!place) return <h2>Place Not Found</h2>

  return (
    <div>
      <h2>{place.name}</h2>
      <img src={place.image} alt={place.name} width="500" />
      <p>{place.description}</p>
      <a href={place.mapLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
    </div>
  )
}

export default PlaceDetails
