/*
  ContentImageGroup
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import ContentImageGroup from '../../ContentImageGroup/ContentImageGroup.jsx';
*/

import React from 'react';
import DomToReact from 'html-react-parser/lib/dom-to-react';

const ContentImageGroup = (props, context) => {

  let baseClassName = 'cpnt-content-image-group';
  let vh = window.innerHeight || 800;
  let componentTop = context.boundingRect.top;
  let isInView = componentTop < vh;

  function getClassNames() {
    let mods = isInView ? 'is-in-view' : '';
    return baseClassName + ' ' + mods;
  }

  return (
    <div className={getClassNames()} >
      {DomToReact(props.domNode.children)}
    </div>
  )

};


ContentImageGroup.contextTypes = {
  scrollPosition: React.PropTypes.number,
  boundingRect: React.PropTypes.object
}

export default ContentImageGroup;
