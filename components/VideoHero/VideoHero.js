/*
  VideoHero component description goes here, please!

  To import this elsewhere:
  import VideoHero from '../VideoHero/VideoHero';
*/

import React from 'react'

export default class VideoHero extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cpnt-video-hero">

        <video autoPlay loop muted>
          <source src="https://player.vimeo.com/external/97799177.hd.mp4" type="video/mp4" />
        </video>

        {this.props.children}
      </div>
    );
  }
}