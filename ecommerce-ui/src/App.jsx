import './App.css';
import Bnbs from './bnbs.json';
import VacationCard from './VacationCard';
import ShoppingCartCard from './ShoppingCartCard';
import { useState } from 'react';
import ShoppingListItems from './ShoppingListItems';

function App() {
  // const [rentalDetails, setRentalDetails] = useState('');
  // const [rentalTitle, setRentalTitle] = useState('');
  // const [rentalPrice, setRentalPrice] = useState('');
  const [cartRentals, setCartRentals] = useState([]);

  const addToCart = (rental) => {
    // const tempRental = {
    //   title: rental.title,
    //   price: rental.price
    // }
    // const tempRental = {
    //   cartRental: rental
    // }

    setCartRentals([...cartRentals, rental]);
    // setRentalDetails(rentalPrice);

    // console.log(`added to cart: ${JSON.stringify(tempRental)}`)
  }

  const removeFromCart = (cartRental) => {
    // const tempArray = cartRentals.filter((cartRental) => {
    //   if (cartRental.title !== rental.title) {
    //     return cartRentals;
    //   }
    // });
    setCartRentals(
      cartRentals.filter((rental) =>
        rental.id !== cartRental.id
      )
    );
  };


  const rentalList = Bnbs.map((rental, index) => {
    return (
      <li key={index}>
        <VacationCard
          rental={rental}
          addToCart={addToCart}
          // rentalDetails={rentalDetails}
        />
      </li>
    )
  });


  const cartRentalList = cartRentals.map((rental, index) => {
    return (
      <li key={index}>
        <ShoppingCartCard
          rental={rental}
        />
      </li>
    )
  });

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
