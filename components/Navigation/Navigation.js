/*
  Navigation component description goes here, please!

  To import this elsewhere:
  import Navigation from './components/Navigation/Navigation';


  Navigation should contain the initial 50/50 option,
  but should also contain nav for photog and nav for software...
  These could be a component themselves...

*/

import React from 'react';
import { Link, IndexLink } from 'react-router';
import Grip from '../Grip/Grip';
import NavigationSection from '../NavigationSection/NavigationSection';

export default class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      section: 'landing'
    };

    this.setSectionDevelopment = this.setSectionDevelopment.bind(this);
    this.setSectionPhotography = this.setSectionPhotography.bind(this);
    this.clearSection = this.clearSection.bind(this);
  }

  setSectionDevelopment() {
    if (this.state.section !== 'development') {
      this.setState({section: 'development'});
    } else {
      this.clearSection();
    }
  }

  setSectionPhotography() {
    if (this.state.section !== 'photography') {
      this.setState({section: 'photography'});
    } else {
      this.clearSection();
    }
  }

  clearSection() {
    this.setState({section: 'landing'})
  }

  render() {
    let sectionNav = null;
    let photoNavItems = [
      {label: 'OVERVIEW', path: '/photography'},
      {label: 'GEAR', path: '/photography/gear'},
      {label: 'TUTORIALS', path: '/photography/tutorials'},
      {label: 'LANDSCAPES', path: '/photography/landscapes'},
      {label: 'ARCHITECTURE', path: '/photography/architecture'},
      {label: 'VIDEO', path: '/photography/video'}
    ];
    let devNavItems = [
      {label: 'OVERVIEW', path: '/development'},
      {label: 'PLAYGROUND', path: '/development/playground'},
      {label: 'TUTORIALS', path: '/development/tutorials'},
      {label: 'WORK', path: '/development/work'},
      {label: 'PROJECTS', path: '/development/projects'},
      {label: 'TOOLS', path: '/development/tools'}
    ];


    if (this.state.section === 'development') {
      sectionNav = <NavigationSection section={this.props.section} side='right' navList={devNavItems} clearSection={this.clearSection} />;
    } else if (this.state.section === 'photography') {
      sectionNav = <NavigationSection section={this.props.section} side='left' navList={photoNavItems} clearSection={this.clearSection} />;
    }



    return (
      <div className="cpnt-navigation">

        <div className="initial-opt _akrobat _weight-black left" >
            <h2 className="_weight-normal _selection-transparent" onClick={this.setSectionDevelopment} >
              WEB<small className="_weight-xlight _selection-transparent">DEVELOPMENT & DESIGN</small>
            </h2>
        </div>

        <div className="initial-opt _akrobat _weight-black right" >
            <h2 className="_weight-normal _selection-transparent" onClick={this.setSectionPhotography} >
              PHOTO<small className="_weight-xlight _selection-transparent">GRAPHY & VIDEO</small>
            </h2>
        </div>

        <Grip />

        {sectionNav}

      </div>
    );
  }
}
