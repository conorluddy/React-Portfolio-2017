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
import * as THREE from 'three';

const GlitchText = (props) => {
  let text;
  let textArr;
  let result = '';
  let nested = false;
  let i;
  let j;
  let k;

  /**
   * Wrap all characters in a span. Retains any strong/bold wrappers
   */
  for (i = 0; i < props.domNode.children.length; i++) {
    if (props.domNode.children[i].name && props.domNode.children[i].children) {
      text = props.domNode.children[i].children[0].data || '';
      textArr = text.split('');
      for (j = 0; j < textArr.length; j++) {
        result += '<span>' + textArr[j] + '</span>';
      }
      result = '<strong>' + result + '</strong>';
    } else {
      text = props.domNode.children[i].data || '';
      textArr = text.split('');

      for (j = 0; j < textArr.length; j++) {
        result += '<span>' + textArr[j] + '</span>';
      }
    }
  }


  if (props.domNode.name.toLowerCase() === 'h1') {
    return (
      <h1 className="cpnt-glitch-text">
        {Parser(result)}
      </h1>
    );
  } else {
    return (
      <h2 className="cpnt-glitch-text">
        {Parser(result)}
      </h2>
    );
  }

};

//GlitchText.propTypes = { children: React.PropTypes.string };
//GlitchText.defaultProps = { children: 'Hello World!' };

export default GlitchText;
