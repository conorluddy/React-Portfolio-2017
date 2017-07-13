/*
  GlitchText
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import GlitchText from '../../GlitchText/GlitchText.jsx';
*/

import React from 'react';
import DomToReact from 'html-react-parser/lib/dom-to-react';
import Parser from 'html-react-parser';

const GlitchText = (props, context) => {
  let text;
  let textArr;
  let result = '';
  let nested = false;
  let i;
  let j;
  let k;
  let vh = window.innerHeight || 800;
  let isAlive = context.boundingRect !== undefined;
  let componentTop;
  let isInView;

  /**
   * Wrap all characters in a span. Retains any strong/bold wrappers
   */
  for (i = 0; i < props.domNode.children.length; i++) {
    if (props.domNode.children[i].name && props.domNode.children[i].children) {
      text = props.domNode.children[i].children[0].data || '';
      textArr = text.split('');
      for (j = 0; j < textArr.length; j++) {
        result += '<span style="transition-delay:' + ( j * 200 ) + 'ms;">' + textArr[j] + '</span>';
      }
      result = '<strong>' + result + '</strong>';
    } else {
      text = props.domNode.children[i].data || '';
      textArr = text.split('');

      for (j = 0; j < textArr.length; j++) {
        result += '<span style="transition-delay:' + ( j * 200 ) + 'ms;">' + textArr[j] + '</span>';
      }
    }
  }

  function getClassNames() {
    let clas = 'cpnt-glitch-text';
    componentTop = isAlive ? context.boundingRect.top : 0;
    isInView = componentTop < vh / 2;

    clas += ' ';
    clas += isAlive ? 'is-alive' : '';
    clas += ' ';
    clas += isAlive && isInView ? 'is-in-view' : '';

    return clas;
  }

  if (props.domNode.name.toLowerCase() === 'h1') {
    return (
      <h1 className={getClassNames()} >
        {Parser(result)}
      </h1>
    );
  } else {
    return (
      <h2 className={getClassNames()} >
        {Parser(result)}
      </h2>
    );
  }

};

GlitchText.contextTypes = {
  scrollPosition: React.PropTypes.number,
  boundingRect: React.PropTypes.object
};

export default GlitchText;
