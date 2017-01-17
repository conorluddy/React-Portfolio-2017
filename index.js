import React from 'react'
import { render } from 'react-dom';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';

import RouteLanding from './components/RouteLanding/RouteLanding';



var MainLayout = React.createClass({
 render: () => {
   return (
     <div className="app">
       <Link to="/test">Test</Link>
     </div>
   );
 }
});



render((
    <Router history={hashHistory}>
      <Route path="/" component={RouteLanding} ></Route>
      <Route path="/test" component={MainLayout} ></Route>
    </Router>
), document.getElementById('app'))
