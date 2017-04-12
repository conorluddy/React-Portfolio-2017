/*
  RouteDevelopment component description goes here, please!

  To import this elsewhere:
  import RouteDevelopment from './components/RouteDevelopment/RouteDevelopment';
*/

import React from 'react'

export default class RouteDevelopment extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cpnt-route-development">

        RouteDevelopment component

        {this.props.children}

      </div>
    );
  }
}
