/*
  BackgroundSvg
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import BackgroundSvg from '../../BackgroundSvg/BackgroundSvg.jsx';
*/

import React from 'react';

const BackgroundSvg = (props) => {
  return (
    <div className="cpnt-background-svg">

        <svg width="100%" height="100%" viewBox="0 0 100% 100%" >
            <circle cx="0" cy="0" r="0" opacity="0.5"></circle>
            <circle cx="100%" cy="0" r="0" opacity="0.5"></circle>
            <circle cx="50%" cy="100%" r="0" opacity="0.5"></circle>
        </svg>

    </div>
  )
};

//BackgroundSvg.propTypes = { children: React.PropTypes.string };
//BackgroundSvg.defaultProps = { children: 'Hello World!' };

export default BackgroundSvg;
