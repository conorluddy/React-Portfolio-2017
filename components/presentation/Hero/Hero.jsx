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
  let imgStyle = {};
  let heroImg = "/assets/images/hero/" + imgSrc;

  videoSrc = videoSrc ? "./../assets/video/" + videoSrc : false;
  video = <video autoPlay loop><source src={videoSrc} type="video/mp4" /></video>;

  if (modifiers && modifiers.height) heroStyle.height = modifiers.height;

  imgStyle.transform = 'translate3D(0,' + scrollPosition/5 + 'px,0)';


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
        <img src={heroImg} alt={title} style={imgStyle} />
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
