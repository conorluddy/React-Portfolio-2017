/*
  RouteLanding component description goes here, please!

  To import this elsewhere:
  import RouteLanding from './components/RouteLanding/RouteLanding';
*/

import React from 'react';
import FullHero from '../FullHero/FullHero';
import VideoHero from '../VideoHero/VideoHero';


export default class RouteLanding extends React.Component {

  constructor(props) {
     super(props);
     console.log('RouteLanding');
  }

  render() {
    // <FullHero imgSrc="assets/images/hero/mac-candles.jpg" />
    //
    return (
      <div className="cpnt-route-landing">

        <VideoHero />

        {this.props.children}

      </div>
    );
  }
}
