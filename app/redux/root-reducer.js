
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import example from '../views/example/reducer';

const rootReducer = combineReducers({
  example,
  routing: routerReducer,
});

export default rootReducer;
