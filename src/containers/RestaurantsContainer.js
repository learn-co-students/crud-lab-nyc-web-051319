import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants restaurants={this.props.restaurants} removeRestaurant={this.props.removeRestaurant}/>
      </div>
    )
  }
}

const msp = ({ restaurants }) => ({ restaurants })

const mdp = dispatch => {
  return {
    addRestaurant: (restaurant) => dispatch({type: "ADD_RESTAURANT", restaurant}),
    removeRestaurant: (id) => dispatch({type: "DELETE_RESTAURANT", id})
  }
}

export default connect(msp, mdp)(RestaurantsContainer);
