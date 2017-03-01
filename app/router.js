
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// template
import App from './app';

// views
import ExampleContainer from './views/example/container';

export default (

  <Router history={browserHistory}>

    <Route path="/" component={App}>

      <IndexRoute component={ExampleContainer} />

    </Route>

  </Router>

);
