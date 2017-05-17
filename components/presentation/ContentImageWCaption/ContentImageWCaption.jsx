/*
  ContentImageWCaption
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import ContentImageWCaption from '../../ContentImageWCaption/ContentImageWCaption.jsx';
*/

import React from 'react';
import Parser from 'html-react-parser';
import DomToReact from 'html-react-parser/lib/dom-to-react';

const ContentImageWCaption = (props, context) => {

  let baseClassName = 'cpnt-content-image-w-caption';
  let vh = window.innerHeight || 800;
  let isAlive = context.boundingRect !== undefined;
  let componentTop;
  let isInView;
  let mods = '';
  let html = '';
  let wrapClasses = 'wrap';

  //Remove anything that's not useful
  let textEls = props.domNode.children.filter(node => {
    // return node.name === 'br' || node.type === 'text';
    return node.type === 'text';
  });

  let images = props.domNode.children.filter(node => {
    return node.name === 'img';
  });

  function getClassNames() {
    componentTop = isAlive ? context.boundingRect.top : 0;
    isInView = componentTop < 500;

    mods += isAlive ? 'is-alive' : '';
    mods += ' ';
    mods += isAlive && isInView ? 'is-in-view' : '';
    mods += ' ';
    mods += props.layout ? '-' + props.layout : '';
    mods += ' ';
    mods += props.modifier ? '-' + props.modifier : '';

    return baseClassName + ' ' + mods;
  }

  // for (var i = 0; i < textEls.length; i++) {
    // html += elements[i];//'<div><img src=' + images[i].attribs.src + ' /></div>';
    // if (props.modifier === 'fat' && Math.floor( images.length / 2) === i) {
    //   wrapClasses = 'wrap fatty';
    // } else {
    //   wrapClasses = 'wrap';
    // }
    // html += '<div class="'+wrapClasses+'"><img src=' + images[i].attribs.src + ' /></div>';
  // }

  return (
    <div className={getClassNames()} >
      <div className="img-wrap">{DomToReact(images)}</div>
      <span className="text-wrap">{DomToReact(textEls)}</span>
    </div>
  )

};

ContentImageWCaption.contextTypes = {
  scrollPosition: React.PropTypes.number,
  boundingRect: React.PropTypes.object
}

export default ContentImageWCaption;
