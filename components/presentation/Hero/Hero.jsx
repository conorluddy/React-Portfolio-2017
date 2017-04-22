/*
  Hero
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import Hero from '../../Hero/Hero.jsx';
*/

import React from 'react';

const Hero = ({imgSrc, videoSrc, title, subtitle, modifiers, scrollPosition}) => {

  let video = '';
  let heroStyle = {};
  let heroImg = "/assets/images/hero/" + imgSrc;
  let parallaxStyle = {
    transform: 'translate3D(0,' + scrollPosition/5 + 'px,0)'
  };

  videoSrc = videoSrc ? "./../assets/video/" + videoSrc : false;
  video = <video style={parallaxStyle} autoPlay loop><source src={videoSrc} type="video/mp4" /></video>;

  if (modifiers && modifiers.height)
    heroStyle.height = modifiers.height;

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
        <img src={heroImg} alt={title} style={parallaxStyle} />
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
