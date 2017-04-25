/*
  RouteDevelopment
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import RouteDevelopment from '../../RouteDevelopment/RouteDevelopment.jsx';
*/

import React from 'react';

const RouteDevelopment = () => {
  return (
    <div className="cpnt-route-development">
     {children}
    </div>
  )
};

RouteDevelopment.propTypes = { children: React.PropTypes.string };
//RouteDevelopment.defaultProps = { children: 'Hello World!' };

export default RouteDevelopment;
