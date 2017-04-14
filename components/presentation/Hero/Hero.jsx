/*
  Hero
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import Hero from '../../Hero/Hero.jsx';
*/

import React from 'react';

const Hero = () => {
  return (
    <div className="cpnt-hero">

      <video autoPlay loop>
        <source src="assets/video/landing.mp4" type="video/mp4" />
      </video>

    </div>
  )
};

//Hero.propTypes = { children: React.PropTypes.string };
//Hero.defaultProps = { children: 'Hello World!' };

export default Hero;
