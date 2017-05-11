/*
  Social
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import Social from '../../Social/Social.jsx';
*/

import React from 'react';

const Social = (props) => {
  return (
    <div className="cpnt-social">
     Social component
     {props.children}
    </div>
  )
};

//Social.propTypes = { children: React.PropTypes.string };
//Social.defaultProps = { children: 'Hello World!' };

export default Social;
