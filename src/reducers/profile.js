import {
  FETCH_USER_PROFILE,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
} from '../actions/actionTypes';

const initialProfileState = {
  user: {},
  success: null,
  error: null,
  inProgress: false,
};

export default function profile(state = initialProfileState, action) {
  switch (action.type) {
    case FETCH_USER_PROFILE:
      return {
        ...state,
        inProgress: true,
      };
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.user,
        inProgress: false,
        success: true,
      };
    case USER_PROFILE_FAILURE:
      return {
        ...state,
        error: action.error,
        inProgress: false,
      };
    default:
      return state;
  }
}
