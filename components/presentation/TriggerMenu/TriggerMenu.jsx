/*
  TriggerMenu
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import TriggerMenu from '../../TriggerMenu/TriggerMenu.jsx';
*/

import React from 'react';

const TriggerMenu = (props) => {
  return (
    <div className="cpnt-trigger-menu">
     TriggerMenu component
     {props.children}
    </div>
  )
};

//TriggerMenu.propTypes = { children: React.PropTypes.string };
//TriggerMenu.defaultProps = { children: 'Hello World!' };

export default TriggerMenu;
