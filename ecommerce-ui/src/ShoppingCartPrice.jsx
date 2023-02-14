import React from 'react';

function ShoppingCartPrice({ shoppingCartList }) {
  // const { payment } = shoppingCartList;
  // const calculateTotal = shoppingCartList.map(
  //   price => price.payment.cost
  //   )
  //   .reduce(
  //     (acc, amount) => acc + amount
  //   );

  return (
    <h2 className="shopping-cart-price">
      {/* TOTAL: ${calculateTotal} */}
      TOTAL:
      {}
    </h2>
  )
}

export default ShoppingCartPrice