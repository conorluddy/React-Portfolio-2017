/*
  PageProgress
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import PageProgress from '../../PageProgress/PageProgress.jsx';
*/

import React from 'react';

const PageProgress = ({translateX, scrollProgress}) => {

  return (
    <div className="cpnt-page-progress" style={{transform: translateX}} >
      <span>{scrollProgress}%</span>
    </div>
  )
};

//PageProgress.propTypes = { children: React.PropTypes.string };
//PageProgress.defaultProps = { children: 'Hello World!' };

export default PageProgress;
