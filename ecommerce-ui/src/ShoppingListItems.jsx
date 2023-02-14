import React from 'react';

function ShoppingListItems({ rentalList, addToCart }) {
  const rentalListItems = rentalList.map((rental, index) => {
    return (
      <li
        key={index}
        onClick={() => addToCart}>
        {rental.title}
      </li>
    )
  })
  return (
    <div>
      <ul>
        {rentalListItems}
      </ul>
    </div>
  )
}

export default ShoppingListItems