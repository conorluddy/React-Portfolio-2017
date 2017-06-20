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
    const paths = this.elemnt.querySelectorAll('path');
    const ani = anime({
      targets: paths,
      duration: 2000,
      delay: 800,
      elasticity: 200,
      easing: 'easeInOutExpo',
      autoplay: false,
      strokeDashoffset: [anime.setDashoffset, 0]
    });


    //So we can stop, start, restart etc.
    this.setState({
      anime: ani
    });
  }

  componentDidUpdate(/*prevProps, prevState*/) {
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
