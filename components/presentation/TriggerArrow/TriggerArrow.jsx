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

      <svg width="36px" height="36px" viewBox="0 0 36 36" className="close" onClick={handleClick} >
          <g >
            <g className="bg-lines" transform="translate(17.951533, 17.951533) rotate(-315.000000) translate(-17.951533, -17.951533) translate(-12.548467, -8.048467)" stroke="#EEFF00" strokeWidth="4">
              <path d="M0.941281671,2 L59.3649149,2" ></path>
              <path d="M0.941281671,4 L59.3649149,4" ></path>
              <path d="M0.941281671,7 L59.3649149,7" ></path>
              <path d="M0.941281671,10 L59.3649149,10" ></path>
              <path d="M0.941281671,13 L59.3649149,13" ></path>
              <path d="M0.941281671,16 L59.3649149,16" ></path>
              <path d="M0.941281671,19 L59.3649149,19" ></path>
              <path d="M0.941281671,21 L59.3649149,21" ></path>
              <path d="M0.941281671,24 L59.3649149,24" ></path>
              <path d="M59.3381089,27 L0.914475689,27" ></path>
              <path d="M59.3381089,30 L0.914475689,30" ></path>
              <path d="M59.3381089,33 L0.914475689,33" ></path>
              <path d="M59.3381089,36 L0.914475689,36" ></path>
              <path d="M59.3381089,38 L0.914475689,38" ></path>
              <path d="M59.3381089,41 L0.914475689,41" ></path>
              <path d="M59.3381089,44 L0.914475689,44" ></path>
              <path d="M59.3381089,47 L0.914475689,47" ></path>
              <path d="M59.3381089,50 L0.914475689,50" ></path>
            </g>
            <g className="x-paths" transform="translate(10.000000, 10.000000)" stroke="#4A4A4A" strokeWidth="7">
                <path d="M0,0 L16,16" id="Line"></path>
                <path d="M16,0 L0,16" id="Line"></path>
            </g>
          </g>
      </svg>

    </div>
  )
};

//TriggerArrow.propTypes = { children: React.PropTypes.string };
//TriggerArrow.defaultProps = { children: 'Hello World!' };

export default TriggerArrow;
