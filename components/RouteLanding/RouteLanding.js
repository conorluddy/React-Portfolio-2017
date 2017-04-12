/*
  RouteLanding component description goes here, please!

  To import this elsewhere:
  import RouteLanding from './components/RouteLanding/RouteLanding';
*/

import React from 'react';
import FullHero from '../FullHero/FullHero';

export default class RouteLanding extends React.Component {

  constructor(props) {
     super(props);
     console.log('RouteLanding');
  }

  render() {
    return (
      <div className="cpnt-route-landing">

        <FullHero imgSrc="assets/images/hero/mac-candles.jpg" />


        {this.props.children}

      </div>
    );
  }
}
