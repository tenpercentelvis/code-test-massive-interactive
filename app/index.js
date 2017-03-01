
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import router from './router';
import styles from './style.scss';

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app'),
);
