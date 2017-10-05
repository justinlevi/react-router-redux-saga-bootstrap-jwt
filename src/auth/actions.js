import { 
  createConstants, 
  checkHttpStatus, 
  parseJSON 
} from '../utils';
import jwtDecode from 'jwt-decode';
// import { push } from 'react-router-redux';

// ---------------
// Actions
// ---------------

export const Actions = createConstants(
  'LOGIN_REQUEST',
  'LOGIN_SUCCESS',
  'LOGIN_FAILURE',
  'LOGOUT',
);

export default Actions;

// ---------------
// Action Creators
// ---------------

export const loginRequest = (payload) => ({
  type: Actions.LOGIN_REQUEST,
  payload
});

export const loginSuccess = (payload) => ({
  type: Actions.LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (error) => ({
  type: Actions.LOGIN_FAILURE,
  error,
});

export const logout = () => ({
  type: Actions.LOGOUT,
});


export function api(ourFetch) {
  return ourFetch
  .then(resp => { return checkHttpStatus(resp)})
  .then(resp => { return parseJSON(resp)})
  .catch(error => {console.log(error)});
}


export function loginUser(username, password, csrfToken, redirect = "/") {
  return api(fetch('http://blt.dev/api/v1/token?_format=hal_json', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/hal+json',
      'X-CSRF-Token': csrfToken,
      'Authorization': 'json_auth'
    },
    body: JSON.stringify({ username: username, password: password })
  }))
}

// export function loginUser(username, password, csrfToken, redirect = "/") {

//   return fetch('http://blt.dev/api/v1/token?_format=hal_json', {
//     method: 'POST',
//     credentials: 'include',
//     headers: {
//       'Content-Type': 'application/hal+json',
//       'X-CSRF-Token': csrfToken,
//       'Authorization': 'json_auth'
//     },
//     body: JSON.stringify({ username: username, password: password })
//   })
//   .then(checkHttpStatus)
//   .then(parseJSON)
//   .then(response => {
//     try {
//       let decoded = jwtDecode(response.token);
//       return response.token;
//       // dispatch(loginSuccess(response.token));
//       // dispatch(push(null, redirect));
//     } catch (e) {
//       // dispatch(loginFailure({
//       //   response: {
//       //     status: 403,
//       //     statusText: 'Invalid token'
//       //   }
//       // }));
//       console.log(e);
//     }
//   })
//   .catch(error => {
//     //dispatch(loginFailure(error));
//     console.log(error);
//   });
// }