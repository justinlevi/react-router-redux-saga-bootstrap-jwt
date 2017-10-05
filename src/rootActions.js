import { createConstants } from './utils';

// ---------------
// Actions
// ---------------

export const Actions = createConstants(
  'FETCH_CSRF_TOKEN_SUCCESS',
);

export default Actions;

// ---------------
// Action Creators
// ---------------

export const fetchCsrfTokenSuccess = (payload) => ({
  type: Actions.FETCH_CSRF_TOKEN_SUCCESS,
  payload
});
