/*
  App component description goes here, please!

  To import this elsewhere:
  import App from './components/App/App';
*/

import React from 'react'
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className="cpnt-app">

        <ul role="nav">
          <li><Link to="/home">About</Link></li>
          <li><Link to="/test">Repos</Link></li>
        </ul>

        {/* add this */}
        {this.props.children}

      </div>
    );
  }
})
