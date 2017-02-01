/*
  RouteLanding component description goes here, please!

  To import this elsewhere:
  import RouteLanding from './components/RouteLanding/RouteLanding';
*/

import React from 'react';
import FullHero from '../FullHero/FullHero';

export default React.createClass({
  render() {
    return (
      <div className="cpnt-route-landing">

        <FullHero imgSrc="assets/images/hero/software.jpg" >
          <h1>
            <strong>Soft</strong>ware
          </h1>
        </FullHero>

      </div>
    );
  }
})
