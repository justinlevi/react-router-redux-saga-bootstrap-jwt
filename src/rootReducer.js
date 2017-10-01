import { combineReducers } from 'redux';
// import recycleState from 'redux-recycle';

import { reducer as authReducer } from './auth/reducer';

export const rootReducer = combineReducers({
  authReducer
});

export default rootReducer;