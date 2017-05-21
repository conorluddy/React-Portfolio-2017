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
import ContentImageWCaption from '../ContentImageWCaption/ContentImageWCaption.jsx';
import ContentImageCurtains from '../ContentImageCurtains/ContentImageCurtains.jsx';

const ReaderContent = ({content}) => {

  console.info('ReaderContent Component - we should not see this message more than once or twice per page...');
  
  // Replace MD html with React components, based on
  // what component attribute we gave them.

  return (
    <div className="cpnt-reader-content grid-row" >
      {Parser(content, { replace: function(domNode) {

            if (!domNode.attribs) {
              return domNode;
            }

            switch (domNode.attribs.component) {

              case 'image-group':

                if (domNode.attribs.alive === 'true') {
                  return (
                    <ScrollPosition getBoundingRect="true" >
                      <ContentImageGroup domNode={domNode} layout={domNode.attribs.layout} modifier={domNode.attribs.modifier} />
                    </ScrollPosition>
                  )
                } else {
                  return (
                    <ContentImageGroup domNode={domNode} layout={domNode.attribs.layout} modifier={domNode.attribs.modifier} />
                  )
                }

              case 'image-with-caption':

                if (domNode.attribs.alive === 'true') {
                  return (
                    <ScrollPosition getBoundingRect="true" >
                      <ContentImageWCaption domNode={domNode} layout={domNode.attribs.layout} modifier={domNode.attribs.modifier} />
                    </ScrollPosition>
                  )
                } else {
                  return (
                    <ContentImageWCaption domNode={domNode} layout={domNode.attribs.layout} modifier={domNode.attribs.modifier} />
                  )
                }
                break;

              case 'image-curtains':

                return (
                    <ScrollPosition getBoundingRect="true" >
                      <ContentImageCurtains domNode={domNode} layout={domNode.attribs.layout} modifier={domNode.attribs.modifier} />
                    </ScrollPosition>
                  )
                break;

              default:
                return (domNode);

            }

      }})}
    </div>
  )
};

export default ReaderContent;
