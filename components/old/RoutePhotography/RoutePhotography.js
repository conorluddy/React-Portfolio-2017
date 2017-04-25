/*
  RoutePhotography component description goes here, please!

  To import this elsewhere:
  import RoutePhotography from './components/RoutePhotography/RoutePhotography';
*/

import React from 'react'

export default class RoutePhotography extends React.Component {

  constructor(props) {
    super(props);

    console.log('this.props: ', this.props);
  }

  render() {
    return (
      <div className="cpnt-route-photography">
        {this.props.children}
      </div>
    );
  }
}
