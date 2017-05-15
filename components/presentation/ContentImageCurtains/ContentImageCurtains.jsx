/*
  ContentImageCurtains
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import ContentImageCurtains from '../../ContentImageCurtains/ContentImageCurtains.jsx';
*/

import React from 'react';
import Parser from 'html-react-parser';
import DomToReact from 'html-react-parser/lib/dom-to-react';

const ContentImageCurtains = (props, context) => {
  let baseClassName = 'cpnt-content-image-curtains';
  let vh = window.innerHeight || 800;
  let preload = vh/10;//fully load without having to go all the way up
  let images = props.domNode.children.filter(node => {
    return node.name === 'img';
  });

  function getClassNames() {
    let mods = '';
    mods += props.layout ? '-' + props.layout : '';
    mods += ' ';
    mods += props.modifier ? '-' + props.modifier : '';

    return baseClassName + ' ' + mods;
  }

  function getCurtainPull(direction) {
    let cTop = context.boundingRect.top - preload;
    let progress;

    //want curtains to be fully closed when component is 1vh from top

    if (cTop > vh) {
      progress = 0 + '%';
    } else if (cTop < 0) {
      progress = 100 + '%';
    } else {
      progress = Math.floor( 100 - (cTop / vh * 100) ) + '%';
    }

    switch (direction) {
      case 'U': return {transform: 'translate3d(0, -' + progress + ', 0)'};
      case 'D': return {transform: 'translate3d(0, ' + progress + ', 0)'};
      case 'L': return {transform: 'translate3d(-' + progress + ', 0, 0)'};
      case 'R': return {transform: 'translate3d(' + progress + ', 0, 0)'};
      //////////////////////////////////////////////////////////////////////////
      default: return {transform: 'translate3d(' + progress + ', 0, 0)'};
    }
  }


  function getCurtains() {
    let curtains = props.layout.split('');

    return curtains.map((dir) => {
      if (dir === 'U') return (<div className="curtain -top" style={getCurtainPull("U")} key={dir} />);
      if (dir === 'D') return (<div className="curtain -bottom" style={getCurtainPull("D")} key={dir} />);
      if (dir === 'L') return (<div className="curtain -left" style={getCurtainPull("L")} key={dir} />);
      if (dir === 'R') return (<div className="curtain -right" style={getCurtainPull("R")} key={dir} />);
    })
  }

  return (
    <div className={getClassNames()} >
      <div className="img-wrap">
        {DomToReact(images)}
      </div>
      {getCurtains()}
    </div>
  )

};


ContentImageCurtains.contextTypes = {
  // scrollPosition: React.PropTypes.number,
  boundingRect: React.PropTypes.object
}

export default ContentImageCurtains;
