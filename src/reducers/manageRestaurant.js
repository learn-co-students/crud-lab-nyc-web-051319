
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return {...state, restaurants: [...state.restaurants, { id: cuid(), text: action.restaurant, reviews: [] }] }
    case "DELETE_RESTAURANT":
      let filteredRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return {...state, restaurants: filteredRestaurants }
    case "ADD_REVIEW":
      return {...state, reviews: [...state.reviews, {...action.review, id: cuid() }] }
    case "DELETE_REVIEW":
      let filteredReviews = state.reviews.filter(review => review.id !== action.id);
      return {...state, reviews: filteredReviews }
    default:
      return state;
  }
}
