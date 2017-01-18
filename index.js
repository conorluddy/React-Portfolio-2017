import React from 'react'
import { render } from 'react-dom';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';

import App from './components/App/App';
import RouteLanding from './components/RouteLanding/RouteLanding';



var MainLayout = React.createClass({
 render: () => {
   return (
     <div className="app">
      Main
     </div>
   );
 }
});



render((
    <Router history={hashHistory}>

      <Route path="/" component={App}>
        <Route path="/home" component={RouteLanding} ></Route>
        <Route path="/test" component={MainLayout} ></Route>
      </Route>

    </Router>
), document.getElementById('app'))
