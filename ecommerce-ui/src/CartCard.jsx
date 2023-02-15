import React from 'react';
import CartDetails from './CartDetails';
import CartImage from './CartImage';
import PropTypes from 'prop-types'


function CartCard({ rental, removeFromCart }) {
  return (
    <div className='cart-card'>
      <CartImage
        rental={rental}
      />
      <CartDetails
        rental={rental}
        removeFromCart={removeFromCart}
      />
    </div>
  )
}

CartCard.propTypes = {
  rental: PropTypes.shape({
    id: PropTypes.number.isRequired,
    cartRental: PropTypes.shape({
      title: PropTypes.string,
      houseType: PropTypes.string,
      image: PropTypes.string,
      location: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string
      }),
      payment: PropTypes.shape({
        cost: PropTypes.number,
        description: PropTypes.string
      }),
      host: PropTypes.shape({
        name: PropTypes.string,
        isSuperhost: PropTypes.bool
      }),
      rating: PropTypes.shape({
        stars: PropTypes.number,
        reviews: PropTypes.number
      })
    })
  }),
  removeFromCart: PropTypes.func.isRequired
}

export default CartCard