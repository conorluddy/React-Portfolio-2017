/*
  Grip component description goes here, please!

  To import this elsewhere:
  import Grip from './components/Grip/Grip';
*/

import React from 'react'

export default class Grip extends React.Component {

  render() {
    let classes = 'cpnt-grip ';
    classes += this.props.className;

    return (
      <div className={classes}>

      </div>
    );
  }
}
