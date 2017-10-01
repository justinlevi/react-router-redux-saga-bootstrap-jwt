import { createConstants, checkHttpStatus, parseJSON } from '../utils';
import jwtDecode from 'jwt-decode';
import { push } from 'react-router-redux';

// ---------------
// Actions
// ---------------

export const Actions = createConstants(
  'LOGIN_REQUEST',
  'LOGIN_SUCCESS',
  'LOGIN_FAILURE',
  'LOGOUT_REQUEST',
);

export default Actions;

// ---------------
// Action Creators
// ---------------

export const loginRequest = () => ({
  type: Actions.LOGIN_REQUEST,
});

export const loginSuccess = (idToken) => ({
  type: Actions.LOGIN_SUCCESS,
  idToken,
});

export const loginFailure = (error) => ({
  type: Actions.LOGIN_FAILURE,
  error,
});

export const logout = () => ({
  type: Actions.LOGOUT,
});


export function loginUser(email, password, redirect = "/") {
  return function (dispatch) {
    dispatch(loginRequest());
    return fetch('http://blt.dev/api/v1/token?_format=hal_json', {
      method: 'post',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/hal+json',
        'X-CSRF-Token': '',
        'Authorization': 'json_auth'
      },
      body: JSON.stringify({ email: email, password: password })
    })
      .then(checkHttpStatus)
      .then(parseJSON)
      .then(response => {
        try {
          let decoded = jwtDecode(response.token);
          dispatch(loginSuccess(response.token));
          dispatch(push(null, redirect));
        } catch (e) {
          dispatch(loginFailure({
            response: {
              status: 403,
              statusText: 'Invalid token'
            }
          }));
        }
      })
      .catch(error => {
        dispatch(loginFailure(error));
      })
  }
}