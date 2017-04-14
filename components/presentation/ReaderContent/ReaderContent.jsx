/*
  ReaderContent
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import ReaderContent from '../../ReaderContent/ReaderContent.jsx';
*/

import React from 'react';

const ReaderContent = ({content}) => {

  function createMarkup() {
    return {__html: content};
  };

  return (
    <div className="cpnt-reader-content grid-row" dangerouslySetInnerHTML={createMarkup()} />
  )
};

export default ReaderContent;
