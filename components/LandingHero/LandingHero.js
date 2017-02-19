/*
  LandingHero component description goes here, please!

  To import this elsewhere:
  import LandingHero from './components/LandingHero/LandingHero';
*/

import React from 'react'

export default class LandingHero extends React.Component {

  //
  // constructor(props) {
  //    super(props);
  //
  //    this.state = {activeSection: 'photography'};
  //
  //    // This binding is necessary to make `this` work in the callback
  //    this.setSectionPhotography = this.setSectionPhotography.bind(this);
  //    this.setSectionSoftware = this.setSectionSoftware.bind(this);
  // }
  //
  // setSectionPhotography(e) {
  //   e.preventDefault();
  //   this.setState({
  //     activeSection: 'photography'
  //   });
  // }
  //
  // setSectionSoftware(e) {
  //   e.preventDefault();
  //   this.setState({
  //     activeSection: 'software'
  //   });
  // }
  //
  // <li onClick={this.props.setSectionSoftware}>
  // <li onClick={this.props.setSectionPhotography}>
  // <h1>{this.state.activeSection}</h1>


  render() {
    return (
      <div className="cpnt-landing-hero" style={{backgroundImage: 'url(' + this.props.imgSrc + ')' }} >

        <ul className="paths">
          <li >
            SW
          </li>
          <li >
            PH
          </li>
        </ul>

        <h1></h1>

      </div>
    );
  }
}
