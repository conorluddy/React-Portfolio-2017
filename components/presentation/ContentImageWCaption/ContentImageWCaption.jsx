/*
  ContentImageWCaption
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import ContentImageWCaption from '../../ContentImageWCaption/ContentImageWCaption.jsx';
*/

import React from 'react';

const ContentImageWCaption = (props) => {
  return (
    <div className="cpnt-content-image-w-caption">
     ContentImageWCaption component
     {props.children}
    </div>
  )
};

//ContentImageWCaption.propTypes = { children: React.PropTypes.string };
//ContentImageWCaption.defaultProps = { children: 'Hello World!' };

export default ContentImageWCaption;
