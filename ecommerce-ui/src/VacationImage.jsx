import React from 'react';
import PropTypes from 'prop-types'


function VacationImage({ rental }) {
  const { title, image } = rental;
  return (
    <div className='vacation-image-container'>
    <img src={image} alt={title} className='vacation-image' />
  </div>
  )
}

VacationImage.propTypes = {
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
  })
}

export default VacationImage