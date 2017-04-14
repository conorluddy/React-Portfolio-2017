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
  return (
    <div className="cpnt-route-landing">
      <Hero />
    </div>
  )
};

//RouteLanding.propTypes = { children: React.PropTypes.string };
//RouteLanding.defaultProps = { children: 'Hello World!' };

export default RouteLanding;
