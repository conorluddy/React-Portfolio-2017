/*
  PageProgress
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import PageProgress from '../../PageProgress/PageProgress.jsx';
*/

import React from 'react';

const PageProgress = ({translateX, scrollProgress}) => {

  function getClassNames(baseName) {
    if (scrollProgress < 25) {
      baseName += ' -begin';
    }
    if (scrollProgress > 98) {
      baseName += ' -fin';
    }
    return baseName;
  }

  let text = scrollProgress === 100 ? 'THANKS FOR READING!' : 'READ PROGRESS';

  return (
    <div className={getClassNames("cpnt-page-progress")} style={{transform: translateX}} >
      <span><strong>{text} // </strong>{scrollProgress}%</span>
    </div>
  )
};

export default PageProgress;
