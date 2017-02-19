/*
  RouteLanding component description goes here, please!

  To import this elsewhere:
  import RouteLanding from './components/RouteLanding/RouteLanding';
*/

import React from 'react';
import FullHero from '../FullHero/FullHero';
import LandingHero from '../LandingHero/LandingHero';

export default class RouteLanding extends React.Component {



  constructor(props) {
     super(props);

     console.log('x');
     console.log(this);
  }


  render() {
    return (
      <div className="cpnt-route-landing">
        <LandingHero imgSrc="assets/images/hero/software.jpg" />
      </div>
    );
  }
}
