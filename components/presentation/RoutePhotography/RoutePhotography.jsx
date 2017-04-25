/*
  RoutePhotography
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import RoutePhotography from '../../RoutePhotography/RoutePhotography.jsx';
*/

import React from 'react';

const RoutePhotography = (props) => {
  return (
    <div className="cpnt-route-photography">
     {props.children}
    </div>
  )
};

// RoutePhotography.propTypes = { children: React.PropTypes.string };
//RoutePhotography.defaultProps = { children: 'Hello World!' };

export default RoutePhotography;
