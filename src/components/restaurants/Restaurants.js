import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  renderRestaurants = () => this.props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} key={restaurant.id} removeRestaurant={this.props.removeRestaurant} />)

  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;
