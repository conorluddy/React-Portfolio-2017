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


const NavOverlay = ({className, setSectionDevelopment, setSectionPhotography, navSection, transparency, stashNav, clearSection, section, prevSection}) => {
  const styles = {
    backgroundColor: 'RGBA(20,20,20,' + transparency/100 + ')'
  };
  const points = {
    flat: '0 0 1000 0 1000 5 850 5 708 5 523 5 329 5 245 5 149 5 59 5 0 5',
    random: '0 0 1000 0 1000 8 850 15 708 25 523 15 329 22 245 25 149 20 60 30 0 20',
    full: '0 0 1000 0 1000 40 850 40 708 40 523 40 329 40 245 40 149 40 59 40 0 40'
  };

  let newPoints = [];
  let startPoints;

  if (prevSection !== null) {
    // startPoints = points.full;
  }

  if (section === 'landing') {
    //Flat to full
    startPoints = points.flat;
    newPoints = [
      {value: points.flat},
      {value: points.random},
      {value: points.full}
    ];

  }

  // else {
  //   //Full to flat
  //   startPoints = points.full;
  //   newPoints = [
  //     {value: points.full},
  //     {value: points.random},
  //     {value: points.flat}
  //   ];
  //
  // }

  console.log('sections', [prevSection, section]);
  console.log('newPoints', newPoints);
  console.log('--- render ---');

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

      {navSection}

      <Anime section={section} aniOptions={{selector: 'path', duration: 3500, easing: 'easeOutCubic', elasticity: 900}} >
        <TriggerArrow handleClick={section === 'landing' ? stashNav : clearSection} />
      </Anime>

      <i className="edge-border -top" >
        <Anime section={section} aniOptions={{selector: 'polygon', duration: 2000, easing: 'linear', elasticity: 900, points: newPoints, loop: false}} >
            <svg viewBox="0 0 1000 40" preserveAspectRatio="none" >
              <polygon points={startPoints} />
            </svg>
        </Anime>
      </i>

      <i className="edge-border -right" />

      <i className="edge-border -bottom" >
        <Anime section={section} aniOptions={{selector: 'polygon', duration: 2000, easing: 'linear', elasticity: 900, points: newPoints, loop: false}} >
            <svg viewBox="0 0 1000 40" preserveAspectRatio="none" >
              <polygon points={startPoints} />
            </svg>
        </Anime>
      </i>

      <i className="edge-border -left" />

    </div>
  );
};


export default NavOverlay;
