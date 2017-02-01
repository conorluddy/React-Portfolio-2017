/*
  App component description goes here, please!

  To import this elsewhere:
  import App from './components/App/App';
*/

import React from 'react'
import { Link, IndexLink } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className="cpnt-app">

        {/* add this */}
        {this.props.children}


        <ul role="nav">
          <li>
            <IndexLink to="/" activeClassName="is-active">Home</IndexLink>
            <IndexLink to="/software" activeClassName="is-active">Software</IndexLink>
            <IndexLink to="/photography" activeClassName="is-active">Photography</IndexLink>
          </li>
        </ul>

      </div>
    );
  }
})
