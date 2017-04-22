/*
  ReaderContent
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import ReaderContent from '../../ReaderContent/ReaderContent.jsx';
*/

import React from 'react';
import Parser from 'html-react-parser';


const ReaderContent = ({content}) => {

  let buildImageComponent = domNode => {
    let images = [];

    if (!domNode.children) {
      return domNode;
    }

    for (var i = 0; i < domNode.children.length; i++) {
      if (domNode.children[i].name === 'img') {
        images.push(domNode.children[i]);
      }
    }

    console.log(images);

    return domNode;
  };

  let parseReplace = domNode => {
    if (domNode.attribs && domNode.attribs.component === 'images') {
      return buildImageComponent( domNode );
    }
  };




  return (
    <div className="cpnt-reader-content grid-row" >
      {Parser(content, { replace: parseReplace })}
    </div>
  )
};

export default ReaderContent;
