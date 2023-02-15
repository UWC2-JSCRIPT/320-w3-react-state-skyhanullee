import React from 'react';
import PropTypes from 'prop-types'


function CartPrice({ totalPrice }) {
  return (
    <h2 className='cart-price'>
    TOTAL: ${totalPrice}
    </h2>
  )
}

CartPrice.propTypes = {
  totalPrice: PropTypes.number.isRequired
}

export default CartPrice