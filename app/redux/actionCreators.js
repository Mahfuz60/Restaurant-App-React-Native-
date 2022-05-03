import axios from 'axios';
import actionType from './actionType';

export const loadDishes = (dishes) => {
  return {
    type: actionType.LOAD_DISHES,
    payload: dishes,
  };
};

export const getDishes = () => (dispatch) => {
  axios
    .get('https://restaurant-app-8a8cd-default-rtdb.firebaseio.com/dishes')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => {
      console.log('error', err);
    });
};
