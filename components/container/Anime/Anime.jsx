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

    //ToDo = make this a prop, including queryselector.
    // const paths = this.elemnt.querySelectorAll('path');
    // const ani = anime({
    //   targets: paths,
    //   duration: this.props.duration || 1200,
    //   delay: this.props.delay || 0,
    //   elasticity: this.props.elasticity || 200,
    //   easing: this.props.easing || 'easeInOutExpo',
    //   autoplay: false,
    //   strokeDashoffset: [anime.setDashoffset, 0]
    // });

    const circle = this.elemnt.querySelectorAll('circle');
    const wrapper = this.elemnt.querySelectorAll('svg');
    const radius = wrapper[0].clientHeight > wrapper[0].clientWidth ? wrapper[0].clientHeight : wrapper[0].clientWidth;
    const ani = anime({
      targets: circle,
      r: radius * 1.5,
      duration: 3500,
      easing: 'easeOutCubic',
      elasticity: 0
    });

    //So we can stop, start, restart etc.
    this.setState({
      anime: ani
    });
  }

  componentDidUpdate(prevProps, prevState) {
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
