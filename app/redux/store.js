
import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middleware = applyMiddleware(thunk);

export const store = createStore(
  rootReducer,
  compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

if (module.hot) {
  module.hot.accept('./root-reducer', () => {
    const nextRouteReducer = rootReducer.default;
    store.replaceReducer(nextRouteReducer);
  });
}

// Create an enhanced history that syncs navigation events with the store
export const history = syncHistoryWithStore(browserHistory, store);
