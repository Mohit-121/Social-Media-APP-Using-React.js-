import {
  FETCH_FRIEND_SUCCESS,
  ADD_FRIEND,
  REMOVE_FRIEND,
} from '../actions/actionTypes';

const defaultState = [];

export default function friends(state = defaultState, action) {
  switch (action.type) {
    case FETCH_FRIEND_SUCCESS:
      return [...action.friends];
    case ADD_FRIEND:
      return state.concat(action.friend);
    case REMOVE_FRIEND:
      return state.filter((friend) => friend.to_user._id !== action.userid);
    default:
      return state;
  }
}
