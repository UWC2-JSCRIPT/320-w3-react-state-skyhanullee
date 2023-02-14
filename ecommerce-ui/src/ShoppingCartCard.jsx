import React from 'react';

function ShoppingCartCard({ rental }) {
  const { title, houseType, image, payment , price } = rental;
  return (
    <div className='shopping-cart-card'>
    <div className="shopping-cart-image-container">

    </div>
    <div className="shopping-cart-details-container">
      <p className="shopping-cart-housetype">{houseType}</p>
      <p className="shopping-cart-title">{title}</p>
      <p className="shopping-cart-price">${price}</p>
    </div>
  </div>
  )
}

export default ShoppingCartCard