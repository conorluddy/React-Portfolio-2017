/*
  ContentImageTextMask
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import ContentImageTextMask from '../../ContentImageTextMask/ContentImageTextMask.jsx';
*/

import React from 'react';
import Parser from 'html-react-parser';
import DomToReact from 'html-react-parser/lib/dom-to-react';

const ContentImageTextMask = (props) => {
  return (
    <div className="cpnt-content-image-text-mask">
     ContentImageTextMask component
     {props.children}
    </div>
  )
};


ContentImageTextMask.contextTypes = {
  scrollPosition: React.PropTypes.number,
  boundingRect: React.PropTypes.object
}


export default ContentImageTextMask;
