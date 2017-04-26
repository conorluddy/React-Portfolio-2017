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

import ScrollPosition from '../../container/ScrollPosition/ScrollPosition.jsx';
import ContentImageGroup from '../ContentImageGroup/ContentImageGroup.jsx';

const ReaderContent = ({content}) => {

  console.log('ReaderContent - should not see this more than once or twice per page');

  return (
    <div className="cpnt-reader-content grid-row" >
      {Parser(content, { replace: function(domNode) {

            if (!domNode.attribs) {
              return domNode;
            }

            if (domNode.attribs && domNode.attribs.component === 'image-group') {
              if (domNode.attribs.alive === 'true') {
                return (
                  <ScrollPosition getBoundingRect="true" >
                    <ContentImageGroup domNode={domNode} layout={domNode.attribs.layout} />
                  </ScrollPosition>
                )
              } else {
                return (
                  <ContentImageGroup domNode={domNode} layout={domNode.attribs.layout} />
                )
              }
            }

            // if (domNode.attribs && domNode.attribs.component === 'image-row') {
            //   return <div className="image-row"> {DomToReact(domNode.children)} </div>;
            // }
            //
            // if (domNode.attribs && domNode.attribs.component === 'image-wide') {
            //   return <div className="wide-image"> {DomToReact(domNode.children)} </div>;
            // }

      }})}
    </div>
  )
};

export default ReaderContent;
