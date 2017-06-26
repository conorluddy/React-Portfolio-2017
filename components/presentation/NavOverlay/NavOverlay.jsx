/*
  NavOverlay
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import NavOverlay from '../../NavOverlay/NavOverlay.jsx';
*/

import React from 'react';
import Grip from '../Grip/Grip.jsx';
import Anime from '../../container/Anime/Anime.jsx';
import TriggerArrow from '../TriggerArrow/TriggerArrow.jsx';
import BackgroundSvg from '../BackgroundSvg/BackgroundSvg.jsx';


const NavOverlay = ({className, setSectionDevelopment, setSectionPhotography, sectionNav, transparency, stashNav, clearSection, section}) => {
  const closeBtn = <Anime section={section} aniOptions={{selector: 'path', duration: 3500, easing: 'easeOutCubic', elasticity: 900}} ><TriggerArrow handleClick={section === 'landing' ? stashNav : clearSection} /></Anime>;
  const styles = {
    backgroundColor: 'RGBA(20,20,20,' + transparency/100 + ')'
  };

  className = 'cpnt-nav-overlay' + ' ' + className;

  return (
    <div className={className} style={styles}>

      <div className="initial-opt _akrobat _weight-black left" onClick={setSectionDevelopment} >
          <h2 className="_weight-normal _selection-transparent" >
            WEB DEV <span className="_weight-xlight">//</span> DESIGN
          </h2>
      </div>

      <div className="initial-opt _akrobat _weight-black right" onClick={setSectionPhotography} >
          <h2 className="_weight-normal _selection-transparent" >
            PHOTO <span className="_weight-xlight">//</span> VIDEO
          </h2>
      </div>

      <Grip />

      {sectionNav}

      {closeBtn}

      <i className="edge-border -top" />
      <i className="edge-border -right" />
      <i className="edge-border -bottom" />
      <i className="edge-border -left" />

    </div>
  );
};


export default NavOverlay;

//PHOTO<small className="_weight-xlight _selection-transparent">GRAPHY & VIDEO</small>
