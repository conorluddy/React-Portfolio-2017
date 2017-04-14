/*
  TriggerArrow
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import TriggerArrow from '../../TriggerArrow/TriggerArrow.jsx';
*/

import React from 'react';

const TriggerArrow = ({nsew, handleClick}) => {

  let svgTransform = "translate(494.000000, 10.000000) ";

  switch (nsew) {
    case 'nw':
      svgTransform += "rotate(90.000000)"
      break;
    case 'ne':
      svgTransform += "rotate(180.000000)"
      break;
    case 'se':
      svgTransform += "rotate(270.000000)"
      break;
    case 'sw':
      svgTransform += "rotate(90.000000)"
      break;
    default:
  }

  return (
    <div className="cpnt-trigger-arrow">

      <svg width="36px" height="36px" viewBox="494 10 36 36" version="1.1" onClick={handleClick} >
          <g id="back" stroke="none" fill="none" transform="translate(494.000000, 10.000000)" strokeWidth="1" fillRule="evenodd">
              <g>
                  <rect id="Rectangle-5" fill="#EEFF00" x="0" y="0" width="36" height="36"></rect>

                  <g id="aro" transform="translate(6.000000, 6.000000)" fillRule="nonzero" fill="#4A4A4A">
                      <path d="M12.1310756,7 L20.1708827,7 L20.1708827,0 L3.58544136,0 L0,0 L0,20 L7,20 L7,11.7986376 L11.9403839,16.8440668 L17.0218461,11.9947608 L12.1310756,7 Z" id="Combined-Shape"></path>
                  </g>
              </g>
          </g>
      </svg>

    </div>
  )
};

//TriggerArrow.propTypes = { children: React.PropTypes.string };
//TriggerArrow.defaultProps = { children: 'Hello World!' };

export default TriggerArrow;
