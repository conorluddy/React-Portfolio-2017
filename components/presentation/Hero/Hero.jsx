/*
  Hero
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import Hero from '../../Hero/Hero.jsx';
*/

import React from 'react';

const Hero = ({imgSrc, videoSrc, title, subtitle, modifiers}) => {

  let video = '';
  let heroStyle = {};

  videoSrc = videoSrc ? "./../assets/video/" + videoSrc : false;
  video = <video autoPlay loop><source src={videoSrc} type="video/mp4" /></video>;

  if (imgSrc) heroStyle.backgroundImage = 'url(/assets/images/hero/' + imgSrc + ')';
  if (modifiers && modifiers.height) heroStyle.height = modifiers.height;

  if (videoSrc) {
    return (
      <div className="cpnt-hero" style={heroStyle}>
        {video}
        <h1>
          {title}
          <br />
          {subtitle}
        </h1>
      </div>
    )
  } else {
    return (
      <div className="cpnt-hero" style={heroStyle}>
        <h1>
          {title}
          <br />
          {subtitle}
        </h1>
      </div>
    )
  }

};

export default Hero;
