import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import recycleState from 'redux-recycle';

import {Actions as ActionType} from './rootActions';

import { reducer as authReducer } from './auth/reducer';

export const globalState = {
  csrfToken: null
};

export const reducer = (state = globalState, {type, payload}) => {
  switch (type) {
    case ActionType.FETCH_CSRF_TOKEN_SUCCESS:
      return {
        ...state,
        csrfToken: payload,
      };
    default:
      return state;
  }
};


export const rootReducer = combineReducers({
  globalState: reducer,
  auth: authReducer,
  router: routerReducer,
});

export default rootReducer;