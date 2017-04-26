/*
  ContentImageGroup
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import ContentImageGroup from '../../ContentImageGroup/ContentImageGroup.jsx';
*/

import React from 'react';
import Parser from 'html-react-parser';
import DomToReact from 'html-react-parser/lib/dom-to-react';

// https://www.pinterest.com/search/pins/?q=photo%20gallery%20layout&rs=typed&term_meta[]=photo%7Ctyped&term_meta[]=gallery%7Ctyped&term_meta[]=layout%7Ctyped

const ContentImageGroup = (props, context) => {

  let baseClassName = 'cpnt-content-image-group';
  let vh = window.innerHeight || 800;
  let isAlive = context.boundingRect !== undefined;
  let componentTop;
  let isInView;
  let mods = '';
  let html = '';
  let wrapClasses = 'wrap';

  //Remove anything that's not an img tag.
  let images = props.domNode.children.filter(node => {
    return node.name === 'img';
  });

  function getClassNames() {
    componentTop = isAlive ? context.boundingRect.top : 0;
    isInView = componentTop < 0;//..(-1 * (vh / 6));

    console.log('componentTop: ', componentTop);

    mods += isAlive ? 'is-alive' : '';
    mods += ' ';
    mods += isAlive && isInView ? 'is-in-view' : '';
    mods += ' ';
    mods += props.layout ? '-' + props.layout : '';
    mods += ' ';
    mods += props.modifier ? '-' + props.modifier : '';

    return baseClassName + ' ' + mods;
  }

  //Wrappin
  for (var i = 0; i < images.length; i++) {
    if (props.modifier === 'fat' && Math.floor( images.length / 2) === i) {
      wrapClasses = 'wrap fatty';
    } else {
      wrapClasses = 'wrap';
    }
    html += '<div class="'+wrapClasses+'"><img src=' + images[i].attribs.src + ' /></div>';
  }

  return (
    <div className={getClassNames()} >
      {Parser(html)}
    </div>
  )

};

ContentImageGroup.contextTypes = {
  scrollPosition: React.PropTypes.number,
  boundingRect: React.PropTypes.object
}

export default ContentImageGroup;
