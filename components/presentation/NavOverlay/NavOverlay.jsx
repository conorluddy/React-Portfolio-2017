/*
  NavOverlay
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import NavOverlay from '../../NavOverlay/NavOverlay.jsx';
*/

import React from 'react';
import Grip from '../Grip/Grip.jsx';
import TriggerArrow from '../TriggerArrow/TriggerArrow.jsx';

const NavOverlay = ({className, setSectionDevelopment, setSectionPhotography, sectionNav, transparency, stashNav}) => {

  const styles = {
    backgroundColor: 'RGBA(20,20,20,' + transparency/100 + ')'
  }

  className = 'cpnt-nav-overlay' + ' ' + className;
  return (
    <div className={className} style={styles}>

      <div className="initial-opt _akrobat _weight-black left" >
          <h2 className="_weight-normal _selection-transparent" onClick={setSectionDevelopment} >
            WEB<small className="_weight-xlight _selection-transparent">DEVELOPMENT & DESIGN</small>
          </h2>
      </div>

      <div className="initial-opt _akrobat _weight-black right" >
          <h2 className="_weight-normal _selection-transparent" onClick={setSectionPhotography} >
            PHOTO<small className="_weight-xlight _selection-transparent">GRAPHY & VIDEO</small>
          </h2>
      </div>

      <Grip />

      {sectionNav}



    </div>
  )
};

//NavOverlay.propTypes = { children: React.PropTypes.string };
//NavOverlay.defaultProps = { children: 'Hello World!' };

export default NavOverlay;
