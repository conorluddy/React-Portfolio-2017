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
          <Route path="gear" component={PageReader} >
            <Route path=":slug" component={PageReader}/>
          </Route>
          <Route path="tutorials" component={PageReader} >
            <Route path=":slug" component={PageReader}/>
          </Route>
          <Route path="work" component={PageReader} >
            <Route path=":slug" component={PageReader}/>
          </Route>
          <Route path="video" component={PageReader} >
            <Route path=":slug" component={PageReader}/>
          </Route>
        </Route>

        <Route path="development" component={RouteDevelopment} >
          <Route path="about" component={PageReader} />
          <Route path="playground" component={PageReader} >
            <Route path=":slug" component={PageReader}/>
          </Route>
          <Route path="projects" component={PageReader} >
            <Route path=":slug" component={PageReader}/>
          </Route>
          <Route path="tutorials" component={PageReader} >
            <Route path=":slug" component={PageReader}/>
          </Route>
          <Route path="design" component={PageReader} >
            <Route path=":slug" component={PageReader}/>
          </Route>
        </Route>

      </Route>
    </Router>
), document.getElementById('app'))
