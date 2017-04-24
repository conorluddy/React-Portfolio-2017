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


  console.log('scrollPosition: ', context.scrollPosition);

  // componentWillUpdate: function() {
  //   var node = this.getDOMNode();
  //   this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
  // },


  return (
    <div className="cpnt-content-image-group">
     ContentImageGroup component

     {DomToReact(props.domNode.children)}

    </div>
  )
};


ContentImageGroup.contextTypes = {
  scrollPosition: React.PropTypes.number
}

export default ContentImageGroup;
