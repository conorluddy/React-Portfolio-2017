/*
  PageProgress
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import PageProgress from '../../PageProgress/PageProgress.jsx';
*/

import React from 'react';
import PropTypes from 'prop-types';

const PageProgress = ({}, context) => {
  let barPosition = context.scrollProgress - 100;
  let translateX = 'translateX(' + barPosition + '%)';

  function getClassNames(baseName) {
    if (context.scrollProgress < 10) {
      baseName += ' -begin';
    }
    if (context.scrollProgress > 97) {
      baseName += ' -fin';
    }
    return baseName;
  }

  let text = context.scrollProgress === 100 ? 'THANKS FOR READING!' : 'READ PROGRESS';

  return (
    <div className={getClassNames("cpnt-page-progress")} style={{transform: translateX}} >
      <span><strong>{text} // </strong>{context.scrollProgress}%</span>
    </div>
  )
};

PageProgress.contextTypes = {
  scrollProgress: PropTypes.number,
  scrollPosition: PropTypes.number
}

export default PageProgress;
