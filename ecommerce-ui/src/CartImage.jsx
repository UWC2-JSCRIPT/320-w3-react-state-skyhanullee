import React from 'react';
import PropTypes from 'prop-types'


function CartImage({ rental }) {
  const { title, image } = rental.cartRental;
  return (
    <div className='cart-image-container'>
      <img src={image} alt={title} className='vacation-image' />
    </div>
  )
}

CartImage.propTypes = {
  rental: PropTypes.shape({
    id: PropTypes.number.isRequired,
    cartRental: PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
    })
  })
}

export default CartImage