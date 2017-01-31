/*
  FullHero component description goes here, please!
  To import this elsewhere:
  import FullHero from './components/FullHero/FullHero';
*/

import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="cpnt-full-hero" style={{backgroundImage: 'url(' + this.props.imgSrc + ')' }} >

        {this.props.children}

      </div>
    );
  }
})
