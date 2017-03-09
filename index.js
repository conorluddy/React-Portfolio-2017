import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, browserHistory, Link, IndexRoute } from 'react-router';

import RouteLanding from './components/RouteLanding/RouteLanding';
import RoutePhotography from './components/RoutePhotography/RoutePhotography';
import RouteDevelopment from './components/RouteDevelopment/RouteDevelopment';
import PageReader from './components/PageReader/PageReader';

import App from './components/App/App';

render((
    <Router history={browserHistory} >
      <Route path="/" component={App}>

        <IndexRoute component={RouteLanding} />

        <Route path="photography" component={RoutePhotography} >
          <Route path="gear" component={PageReader} />
        </Route>

        <Route path="development" component={RouteDevelopment} />

      </Route>
    </Router>
), document.getElementById('app'))
