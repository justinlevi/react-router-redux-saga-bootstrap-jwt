import { Reducer } from 'redux';
import Actions from './actions';
// import jwtDecode from 'jwt-decode';

export const initialState = {
  token: null,
  isLoggingIn: false,
  error: null,
  idToken: null,
};

export const reducer = (state = initialState, payload) => {
  switch (payload.type) {
    case Actions.LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
      };
    case Actions.LOGIN_SUCCESS:
      return {
        ...state,
        idToken: payload.idToken,
        isLoggingIn: false,
      };
    case Actions.LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: payload.error,
      };
    case Actions.LOGOUT_REQUEST: 
      return initialState;
    default: 
      return state;
  }
};

export default reducer;