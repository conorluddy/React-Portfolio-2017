/*
  Square
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import Square from '../../Square/Square.jsx';
*/

import React from 'react';

const Square = ({handleClick}) => {
  return (
    <div className="cpnt-square">
        <svg width="36px" height="36px" viewBox="0 0 36 36" onClick={handleClick} >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">

                <g id="bg" transform="translate(17.951533, 17.951533) rotate(-315.000000) translate(-17.951533, -17.951533) translate(-12.548467, -8.048467)" stroke="#EEFF00" strokeWidth="4">
                    <path d="M0.941281671,2 L59.3649149,2" id="Line"></path>
                    <path d="M0.941281671,4 L59.3649149,4" id="Line"></path>
                    <path d="M0.941281671,7 L59.3649149,7" id="Line-Copy"></path>
                    <path d="M0.941281671,10 L59.3649149,10" id="Line-Copy-2"></path>
                    <path d="M0.941281671,13 L59.3649149,13" id="Line"></path>
                    <path d="M0.941281671,16 L59.3649149,16" id="Line"></path>
                    <path d="M0.941281671,19 L59.3649149,19" id="Line-Copy"></path>
                    <path d="M0.941281671,21 L59.3649149,21" id="Line-Copy-2"></path>
                    <path d="M0.941281671,24 L59.3649149,24" id="Line"></path>
                    <path d="M59.3381089,27 L0.914475689,27" id="Line"></path>
                    <path d="M59.3381089,30 L0.914475689,30" id="Line-Copy"></path>
                    <path d="M59.3381089,33 L0.914475689,33" id="Line-Copy-2"></path>
                    <path d="M59.3381089,36 L0.914475689,36" id="Line-Copy"></path>
                    <path d="M59.3381089,38 L0.914475689,38" id="Line-Copy-2"></path>
                    <path d="M59.3381089,41 L0.914475689,41" id="Line"></path>
                    <path d="M59.3381089,44 L0.914475689,44" id="Line"></path>
                    <path d="M59.3381089,47 L0.914475689,47" id="Line-Copy"></path>
                    <path d="M59.3381089,50 L0.914475689,50" id="Line-Copy-2"></path>
                </g>
                <g transform="translate(10.000000, 9.000000)" stroke="#4A4A4A" strokeWidth="6">
                    <path d="M0,1 L16,1" id="Line"></path>
                    <path d="M0,9 L16,9" id="Line"></path>
                    <path d="M0,17 L16,17" id="Line"></path>
                </g>

            </g>
        </svg>
    </div>
  )
};

//Square.propTypes = { children: React.PropTypes.string };
//Square.defaultProps = { children: 'Hello World!' };

export default Square;
