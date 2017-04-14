import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';
import Nucleus from './components/container/Nucleus/Nucleus.jsx';
import RouteLanding from './components/presentation/RouteLanding/RouteLanding.jsx';
import RoutePhotography from './components/presentation/RoutePhotography/RoutePhotography.jsx';
import RouteDevelopment from './components/presentation/RouteDevelopment/RouteDevelopment.jsx';
import Reader from './components/presentation/Reader/Reader.jsx';

render((
  <Router history={browserHistory} >
    <Route path="/" component={Nucleus}>

      <IndexRoute component={RouteLanding} />

      <Route path="photography" component={RoutePhotography} >

        <Route path=":slug" component={Reader}/>

      </Route>

      <Route path="development" component={RouteDevelopment} >

        <Route path=":slug" component={Reader}/>

      </Route>

    </Route>
  </Router>
), document.getElementById('app'))
