import React from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types'


function VacationDetails({ rental }) {
  const { title, houseType, location, payment, rating, host } = rental;
  return (
    <div className='vacation-details-container'>
    <p className='vacation-location'>{location.city} | {location.country}</p>
    <h3 className='vacation-title'>{title}</h3>
    <p className='vacation-house-type'>{houseType}</p>
    <p className='vacation-payment'>${payment.cost} {(payment.description !== '') ? `| ${payment.description}` : ''}</p>
    <p className='vacation-rating'>
      {rating.stars} <Icon icon='material-symbols:star' /> | {rating.reviews} reviews
    </p>
    <p className='vacation-host'>{host.name} {host.isSuperhost ? '| Superhost' : ''}</p>
  </div>
  )
}

VacationDetails.propTypes = {
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

export default VacationDetails