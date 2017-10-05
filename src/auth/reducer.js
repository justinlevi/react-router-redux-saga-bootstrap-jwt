// import { Reducer } from 'redux';
import {Actions as ActionType} from './actions';
// import jwtDecode from 'jwt-decode';

export const initialState = {
  jwtToken: null,
  isLoggingIn: false,
  error: null,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_REQUEST:
      return { ...state, isLoggingIn: true,};
    case ActionType.LOGIN_SUCCESS:
      return { ...state, jwtToken: payload, isLoggingIn: false };
    case ActionType.LOGIN_FAILURE:
      return {...state, isLoggingIn: false, error: payload };
    case ActionType.LOGOUT: 
      return initialState;
    default: 
      return state;
  }
};

export default reducer;