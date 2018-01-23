/*
  Anime
  Stateful Container Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import Anime from '../../Anime/Anime.jsx';
*/

import React from 'react';
import anime from 'animejs';

class Anime extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      anime: null
    };
  }

  componentDidMount() {
    const opts = Object.assign({
      targets: this.elemnt.querySelectorAll(this.props.aniOptions ? this.props.aniOptions.selector : 'path'),
      autoplay: false,
      strokeDashoffset: [anime.setDashoffset, 0],
      delay: function(el, i) { return i * (Math.random(10) * 10); }
    }, this.props.aniOptions);

    //So we can stop, start, restart etc.
    this.setState({
      anime: anime(opts)
    });
  }

  componentDidUpdate() {
    this.state.anime.restart();
  }

  render() {
    return (
      <div className="cpnt-anime" ref={(elemnt) => {this.elemnt = elemnt;}}>
        {this.props.children}
      </div>
    );
  }
}

export default Anime;
