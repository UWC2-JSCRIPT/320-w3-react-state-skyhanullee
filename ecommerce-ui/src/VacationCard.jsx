import React from 'react';
// import VacationDetails from './VacationDetails';
// import VacationImage from './VacationImage';

function VacationCard({ rental, addToCart }) {
  // const { image } = rental;
  // console.log(`vacation card: ${JSON.stringify(rental)}`)
  const { title, houseType, location, payment, rating, host, image } = rental;
  let nextId = 0;
  return (
    <div className="vacation-card">
      <div className="vacation-image-container">
        <img src={image} alt={title} className="vacation-image" />
      </div>
      <div className="vacation-details-container">
        <h4 className="vacation-location">{location.city} | {location.country}</h4>
        <p className="vacation-title">{title}</p>
        <p className="vacation-house-type">{houseType}</p>
        <p className="vacation-payment">${payment.cost} | {payment.description}</p>
        <p className="vacation-rating">{rating.stars} stars | {rating.reviews} reviews</p>
        <p className="vacation-host">{host.name} | {host.isSuperhost ? 'Superhost' : 'Not Superhost'}</p>

      </div>
      <div className='vacation-button-container'>
        <button className="add-button"
          onClick={() => addToCart(rental)}
        >ADD</button>
      </div>
    </div>
  )
}

export default VacationCard