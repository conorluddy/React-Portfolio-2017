/*
  RouteLanding
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import RouteLanding from '../../RouteLanding/RouteLanding.jsx';
*/

import React from 'react';
import Hero from '../Hero/Hero.jsx';

const RouteLanding = () => {
  //<Hero imgSrc={imgSrc} videoSrc={videoSrc} title={title} subtitle={subtitle} darken="40" />;

  return (
    <div className="cpnt-route-landing">
      <Hero videoSrc="landing.mp4" title="Welcome" subtitle="Here" darken="40" />
    </div>
  )

};

export default RouteLanding;
