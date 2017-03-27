/*
  FullHero component description goes here, please!
  To import this elsewhere:
  import FullHero from './components/FullHero/FullHero';
*/

import React from 'react'

export default class FullHero extends React.Component {
  render() {

    let heroClassNames = 'cpnt-full-hero';
    if (this.props.darken) {
      heroClassNames += ' -darken-' + this.props.darken;
    }

    return (
      <div className={heroClassNames} style={{backgroundImage: 'url(/' + this.props.imgSrc + ')' }} >
        {this.props.children}
      </div>
    );

  }
}
