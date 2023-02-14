import React from 'react';

function ShoppingCartCard({ rental }) {
  const { title, houseType, image, payment } = rental;
  console.log(rental);
  return (
    <div className='shopping-cart-card'>
    <div className="shopping-cart-image-container">
      <img src={image} alt={title} className="vacation-image" />
    </div>
    <div className="shopping-cart-details-container">
      <p className="shopping-cart-housetype">{houseType}</p>
      <p className="shopping-cart-title">{title}</p>
      <p className="shopping-cart-price">${payment.cost}</p>
    </div>
  </div>
  )
}

export default ShoppingCartCard