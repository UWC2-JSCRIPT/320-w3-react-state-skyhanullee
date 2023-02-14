import React from 'react';
import Bnbs from './bnbs.json';
import VacationCard from './VacationCard';
import ShoppingCartCard from './ShoppingCartCard';
import { useState } from 'react';
import ShoppingCartPrice from './ShoppingCartPrice';

function VacationApp() {
  const [cartRentals, setCartRentals] = useState([]);
  const [cartId, setCartId] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (rental) => {
    const tempRental = {
      id: cartId,
      cartRental: rental
    }

    setCartRentals([...cartRentals, tempRental]);
    setCartId(prevCartId => prevCartId + 1);
    
    setTotalPrice(prevTotalPrice => prevTotalPrice + rental.payment.cost)
    
  }

  const removeFromCart = (rental) => {
    const newCartRentals = cartRentals.filter((cartRental) => cartRental.id !== rental.id);
    setCartRentals(newCartRentals);
    setTotalPrice(prevTotalPrice => prevTotalPrice - rental.cartRental.payment.cost)
  }


  const rentalList = Bnbs.map((rental, index) => {
    return (
      <li key={index}>
        <VacationCard
          rental={rental}
          addToCart={addToCart}
          index={index}
        />
      </li>
    )
  });

  const cartRentalList = cartRentals.map((rental, index) => {
    return (
      <li key={index}>
        <ShoppingCartCard
          rental={rental}
          removeFromCart={removeFromCart}
        />
      </li>
    )
  });

  return (
    <>
      <div className="vacation-container">
        <h1>Vacation Rentals</h1>
        <ul>
          {rentalList}
        </ul>
      </div>

      <div className="shopping-cart-container">
        <h1>Shopping Cart</h1>
        <ul>
          {cartRentalList}
        </ul>
      </div>

      <div className="shopping-cart-price-container">
        <h2 className="shopping-cart-price">
          TOTAL: ${totalPrice}
        </h2>
      </div>
    </>
  )
}

export default VacationApp