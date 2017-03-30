/*
  ReadProgress component description goes here, please!

  To import this elsewhere:
  import ReadProgress from '../ReadProgress/ReadProgress';
*/

import React from 'react'

export default class ReadProgress extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      'scrollProgress': 0
    };
  }

  componentDidMount() {
    this.setState({intrvl: setInterval( this.update.bind(this), 1000/10 ) });
  }

  componentWillUnmount() {
    clearInterval(this.state.intrvl);
  }

  update() {
    let progress = Math.round( this.getScrollPos() );
    this.setState({ scrollProgress: progress });
  }

  getScrollPos() {
    return ((window.scrollY + window.innerHeight) / window.document.documentElement.clientHeight) * 100;
  }

  render() {
    let barPosition = this.state.scrollProgress - 100;
    let translateX = 'translateX(' + barPosition + '%)';

    // let adjustForWindow = (window.innerHeight / 100) * barPosition;
    // barPosition += adjustForWindow;
    // console.log('adjustForWindow: ', adjustForWindow);
    // console.log('innerHeight: ', window.innerHeight);
    // console.log('scrollProgress', this.state.scrollProgress);

    return (
      <div className="cpnt-read-progress" style={{transform: translateX}} ></div>
    );
  }
}
