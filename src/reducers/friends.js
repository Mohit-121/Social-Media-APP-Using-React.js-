import { FETCH_FRIEND_SUCCESS } from '../actions/actionTypes';

const defaultState = [];

export default function friends(state = defaultState, action) {
  switch (action.type) {
    case FETCH_FRIEND_SUCCESS:
      return [...action.friends];
    default:
      return state;
  }
}
