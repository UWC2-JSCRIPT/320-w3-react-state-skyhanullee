import React from 'react';
import VacationDetails from './VacationDetails';
import VacationImage from './VacationImage';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types'


function VacationCard({ rental, addToCart }) {
  return (
    <div className='vacation-card'>
      <VacationImage
      rental={rental}
      />
      <VacationDetails
        rental={rental}
      />
      <div className='button-container'>
        {/* <button className='add-button'
          onClick={() => addToCart(rental)}
        >ADD</button> */}
        <Icon 
          icon='material-symbols:add-shopping-cart-rounded'
          className='add-button'
          onClick={() => addToCart(rental)}
        />
      </div>
    </div>
  )
}

VacationCard.propTypes = {
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
  addToCart: PropTypes.func.isRequired
}

export default VacationCard