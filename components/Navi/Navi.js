/*
  Navi component description goes here, please!

  To import this elsewhere:
  import Navi from './components/Navi/Navi';
*/

import React from 'react'
import { Link, IndexLink } from 'react-router';

export default class Navi extends React.Component {
  render() {
    return (
      <div className="cpnt-navi">

        {this.props.active}

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
}
