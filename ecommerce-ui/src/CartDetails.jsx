import React from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types'


function CartDetails({ rental, removeFromCart }) {
  const { title, houseType, payment } = rental.cartRental;
  return (
    <div className='cart-details-container'>
      <p className='cart-housetype'>{houseType}</p>
      <h3 className='cart-title'>{title}</h3>
      <p className='cart-price'>${payment.cost}</p>
      <div className='button-container'>
        <Icon 
          icon='material-symbols:delete-rounded'
          className='remove-button'
          onClick={() => removeFromCart(rental)}
        />
      </div>
    </div>
  )
}

CartDetails.propTypes = {
  rental: PropTypes.shape({
    id: PropTypes.number.isRequired,
    cartRental: PropTypes.shape({
      title: PropTypes.string,
      houseType: PropTypes.string,
      payment: PropTypes.shape({
        cost: PropTypes.number,
        description: PropTypes.string
      }),
    })
  }),
  removeFromCart: PropTypes.func.isRequired
}

export default CartDetails