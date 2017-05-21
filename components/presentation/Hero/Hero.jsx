/*
  Hero
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import Hero from '../../Hero/Hero.jsx';
*/

import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({imgSrc, videoSrc, title, subtitle, modifiers, scrollPosition, heroHasLoaded, confirmHeroLoaded}, context) => {

  //TODO - make this work independently of context

  let video = '';
  let heroStyle = {};
  let heroImg = "/assets/images/hero/" + imgSrc;
  let parallaxStyle = {
    transform: 'translate3D(0,' + context.scrollPosition / 5 + 'px,0)'
  };
  let classNames = heroHasLoaded ?  "cpnt-hero is-loaded" : "cpnt-hero is-loading";

  videoSrc = videoSrc ? "./../assets/video/" + videoSrc : false;

  //TODO - make loop a prop, maybe make muted a prop, make poster a prop...

  let imgError = (e) => {
    console.log('image load error: ', e);
  }

  if (modifiers && modifiers.height) heroStyle.height = modifiers.height;

  if (videoSrc) {
    return (
      <div className={classNames} style={heroStyle}>
        <video style={parallaxStyle} autoPlay onCanPlay={confirmHeroLoaded} ><source src={videoSrc} type="video/mp4" /></video>
        <h1>
          {title}
        </h1>
      </div>
    )
  } else {
    return (
      <div className={classNames} style={heroStyle}>
        <img src={heroImg} alt={title} style={parallaxStyle} onLoad={confirmHeroLoaded} onError={imgError} />
        <h1>
          {title}
        </h1>
      </div>
    )
  }
};

Hero.contextTypes = {
  scrollProgress: PropTypes.number,
  scrollPosition: PropTypes.number
}

export default Hero;
