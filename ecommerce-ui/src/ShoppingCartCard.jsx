import React from 'react';

function ShoppingCartCard({ rental, removeFromCart }) {
  const { title, houseType, image, payment } = rental.cartRental;
  // console.log(`shopping card no rental: ${JSON.stringify(rental)}`);
  // console.log(`shopping card cartRental: ${JSON.stringify(rental.cartRental)}`);
  return (
    <div className='shopping-cart-card'>
    <div className="shopping-cart-image-container">
      <img src={image} alt={title} className="vacation-image" />
    </div>
    <div className="shopping-cart-details-container">
      <p className="shopping-cart-housetype">{houseType}</p>
      <p className="shopping-cart-title">{title}</p>
      <p className="shopping-cart-price">${payment.cost}</p>
      <div className='vacation-button-container'>
        <button className="remove-button"
          onClick={() => removeFromCart(rental)}
        >REMOVE</button>
      </div>
    </div>
  </div>
  )
}

export default ShoppingCartCard