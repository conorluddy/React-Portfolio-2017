import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, browserHistory, Link, IndexRoute } from 'react-router';

import RouteLanding from './components/RouteLanding/RouteLanding';

import App from './components/App/App';

render((
    <Router history={browserHistory} >
      <Route path="/" component={App}>

        <IndexRoute component={RouteLanding} />

      </Route>
    </Router>
), document.getElementById('app'))
