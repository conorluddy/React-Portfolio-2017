/*
  GoogleAnalytics
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import GoogleAnalytics from '../../GoogleAnalytics/GoogleAnalytics.jsx';
*/

import React from 'react';

const GoogleAnalytics = (props) => {
  return (
    <div className="cpnt-google-analytics">
     GoogleAnalytics component
     {props.children}
    </div>
  )
};

//GoogleAnalytics.propTypes = { children: React.PropTypes.string };
//GoogleAnalytics.defaultProps = { children: 'Hello World!' };

export default GoogleAnalytics;
