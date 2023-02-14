import React from 'react';
import Bnbs from './bnbs.json';
import VacationCard from './VacationCard';
import ShoppingCartCard from './ShoppingCartCard';
import { useState } from 'react';

function VacationApp() {  // const [rentalDetails, setRentalDetails] = useState('');
  // const [rentalTitle, setRentalTitle] = useState('');
  // const [rentalPrice, setRentalPrice] = useState('');
  const [cartRentals, setCartRentals] = useState([]);
  const [cartId, setCartId] = useState(0);

  const addToCart = (rental) => {
    const tempRental = {
      id: cartId,
      cartRental: rental
    }

    // setCartRentals([...cartRentals, rental]);
    setCartRentals([...cartRentals, tempRental]);
    setCartId(prevCartId => prevCartId + 1);
    // setRentalDetails(rentalPrice);

    // console.log(`added to cart: ${JSON.stringify(tempRental)}`)
  }

  // const removeFromCart = (rental) => {
  //   // const tempArray = cartRentals.filter((cartRental) => {
  //   //   if (cartRental.title !== rental.title) {
  //   //     return cartRentals;
  //   //   }
  //   // });
  //   console.log(`removed ${JSON.stringify(rental)}`);
  //   setCartRentals(
  //     cartRentals.filter((cartRental) =>
  //       cartRental.id !== rental.id
  //     )
  //   );
  // };
  
  // const removeFromCart = (index) => {
  //   const newCartRentals = cartRentals.filter((_, i) => i !== index);
  //   setCartRentals(newCartRentals);
  //   console.log(`removed: `)
  // }
  const removeFromCart = (rental) => {
    const newCartRentals = cartRentals.filter((cartRental) => cartRental.id !== rental.id);
    setCartRentals(newCartRentals);
    console.log(`removed: ${JSON.stringify(rental)}`)
  }


  const rentalList = Bnbs.map((rental, index) => {
    return (
      <li key={index}>
        <VacationCard
          rental={rental}
          addToCart={addToCart}
          // rentalDetails={rentalDetails}
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
          // index={index}
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
          {/* <ShoppingListItems
            rentalList={rentalList}
            addToCart={addToCart}
          /> */}
          {cartRentalList}
        </ul>
      </div>
    </>
  )
}

export default VacationApp