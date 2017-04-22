/*
  ReaderContent
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import ReaderContent from '../../ReaderContent/ReaderContent.jsx';
*/

import React from 'react';
import Parser from 'html-react-parser';
import DomToReact from 'html-react-parser/lib/dom-to-react';


const ReaderContent = ({content}) => {

  // let buildImageComponent = domNode => {
  //   let images = [];
  //
  //   if (!domNode.children) {
  //     return domNode;
  //   }
  //
  //   for (var i = 0; i < domNode.children.length; i++) {
  //     if (domNode.children[i].name === 'img') {
  //       images.push(domNode.children[i]);
  //     }
  //   }
  //
  //   console.log(images);
  //
  //   return 'x';
  // };



  //
  // let buildWideImageComponent = domNode => {
  //   let images = [];
  //
  //   return 'xxxx';
  //
  //   if (!domNode.children) {
  //     return domNode;
  //   }
  //
  //   console.log('buildWideImageComponent');
  //
  //   for (var i = 0; i < domNode.children.length; i++) {
  //     if (domNode.children[i].name === 'img') {
  //       images.push(domNode.children[i]);
  //     }
  //   }
  //
  //   console.log(images);
  //
  //   return 'x';
  // };




  // let parseReplace = domNode => {
  //
  //   return 'xxx';
  //
  //   if (!domNode.attribs) {
  //     return domNode;
  //   }
  //
  //   if (domNode.attribs.component === 'images') {
  //     return buildImageComponent( domNode );
  //   }
  //
  //   if (domNode.attribs.component === 'wide-image') {
  //     return '<span>replaced</span>';
  //     // return null;//buildWideImageComponent( domNode );
  //   }
  //
  // };




  return (
    <div className="cpnt-reader-content grid-row" >
      {Parser(content, { replace: function(domNode) {

              // if (domNode.attribs) {
              //     return <span>replaced</span>;
              // }
            // if (!domNode.attribs) {
            //   return domNode;
            // }

            if (domNode.attribs && domNode.attribs.component === 'images') {
              return <div> {DomToReact(domNode.children, {})} </div>;
            }

            if (domNode.attribs && domNode.attribs.component === 'wide-image') {
              return <div className="wide-image"> {DomToReact(domNode.children, {})} </div>;
            }

      }})}
    </div>
  )
};

export default ReaderContent;
