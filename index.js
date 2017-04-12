import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';

import RouteLanding from './components/RouteLanding/RouteLanding';
import RoutePhotography from './components/RoutePhotography/RoutePhotography';
import RouteDevelopment from './components/RouteDevelopment/RouteDevelopment';
import PageReader from './components/PageReader/PageReader';

import App from './components/App/App';

render((
    <Router history={browserHistory} >
      <Route path="/portfolio2017/" component={App}>

        <IndexRoute component={RouteLanding} />

        <Route path="photography" component={RoutePhotography} >
          <Route path=":slug" component={PageReader}/>
        </Route>

        <Route path="development" component={RouteDevelopment} >
          <Route path=":slug" component={PageReader}/>
        </Route>

      </Route>
    </Router>
), document.getElementById('app'))
