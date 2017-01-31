/*
  RouteSoftware component description goes here, please!

  To import this elsewhere:
  import RouteSoftware from './components/RouteSoftware/RouteSoftware';
*/

import React from 'react';
import FullHero from '../FullHero/FullHero';

export default React.createClass({
  render() {
    return (
      <div className="cpnt-routesoftware">
        <FullHero imgSrc="assets/images/hero/software.jpg" />
      </div>
    );
  }
})
