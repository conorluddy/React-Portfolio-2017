/*
  ScrollPosition
  Stateful Container Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import ScrollPosition from '../../ScrollPosition/ScrollPosition.jsx';
*/

import React from 'react';
import PropTypes from 'prop-types';

class ScrollPosition extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      scrollProgress: 0,
      scrollPosition: 0,
      boundingRect: {},
      intrvl: null
    };
  }

  componentDidMount() {
    this.setState({
      intrvl: setInterval(this.updateProgress.bind(this), 1000/40)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intrvl);
  }

  getScrollPos() {
    let scroll = window.scrollY;
    let windowHeight = window.innerHeight;
    let docHeight = window.document.documentElement.clientHeight;

    return (scroll / (docHeight - windowHeight)) * 100;
  }

  updateProgress() {
    let progress = Math.floor( this.getScrollPos() );
    let position = Math.floor( window.scrollY );
    let boundingRect = this.props.getBoundingRect ? this.elWrap.getBoundingClientRect() : null;

    this.setState({
      scrollProgress: progress,
      scrollPosition: position,
      boundingRect: boundingRect
    });
  }

  getChildContext() {
     return {
       scrollProgress: this.state.scrollProgress,
       scrollPosition: this.state.scrollPosition,
       boundingRect: this.state.boundingRect
     };
  }

  render() {
    return (
      <div className="cpnt-scroll-position" ref={(el) => { this.elWrap = el; }} >
        {this.props.children}
      </div>
    );
  }
}

ScrollPosition.childContextTypes = {
  scrollProgress: PropTypes.number,
  scrollPosition: PropTypes.number,
  boundingRect: PropTypes.object
};

export default ScrollPosition;
