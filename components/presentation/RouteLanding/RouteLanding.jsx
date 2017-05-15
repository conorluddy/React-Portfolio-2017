/*
  RouteLanding
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import RouteLanding from '../../RouteLanding/RouteLanding.jsx';
*/

import React from 'react';
import Hero from '../Hero/Hero.jsx';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const RouteLanding = () => {

  return (
    <div className="cpnt-route-landing">

      <CSSTransitionGroup transitionName="fade" transitionEnterTimeout={3000} transitionLeaveTimeout={3000} >
        <Hero videoSrc="sunset.mov" />
      </CSSTransitionGroup>

    </div>
  )

};

export default RouteLanding;
