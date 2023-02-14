import './App.css';
import Bnbs from './bnbs.json';
import VacationCard from './VacationCard';
import ShoppingCartCard from './ShoppingCartCard';
import { useState } from 'react';
import ShoppingListItems from './ShoppingListItems';

function App() {
  const [rentalDetails, setRentalDetails] = useState('');
  const [cartRentals, setCartRentals] = useState([]);

  const addToCart = (rentalTitle, rentalPrice) => {
    console.log(`added to cart: ${cartRentals}`)
    setCartRentals([...cartRentals, {title: rentalTitle, price: rentalPrice}]);
    setRentalDetails(rentalPrice);
  }

  const rentalList = Bnbs.map((rental, index) => {
    return (
      <li key={index}>
        <VacationCard
          rental={rental}
          addToCart={addToCart}
          rentalDetails={rentalDetails}
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
          <ShoppingListItems
            rentalList={rentalList}
            addToCart={addToCart}
          />
        </ul>
      </div>
    </div>
  );
}

export default App;
