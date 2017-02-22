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
    //  console.log('this: ', this);
    //  console.log('this.props: ', this.props);
  }

  componentDidUpdate (prev) {
    console.log( 'Navigation CPT: You were here - ', prev.section );
    console.log( 'Navigation CPT: You are here - ', this.props.section );
  }

  render() {
    let sectionNav = null;
    let photoNavItems = ['GEAR', 'TUTORIALS', 'LANDSCAPES', 'ARCHITECTURE', 'VIDEO'];
    let devNavItems = ['OVERVIEW','PLAYGROUND','TUTORIALS','WORK','PROJECTS','TOOLS'];

    if (this.props.section === 'development') {
      sectionNav = <NavigationSection section={this.props.section} side='right' navList={devNavItems} />;
    } else if (this.props.section === 'photography') {
      sectionNav = <NavigationSection section={this.props.section} side='left' navList={photoNavItems} />;
    }

    console.log('sectionNav: ', sectionNav);

    return (
      <div className="cpnt-navigation">

        <div className="initial-opt _akrobat _weight-black left" >
            <h2 className="_weight-normal"  >
              <Link to={'development'}>WEB<small className="_weight-xlight">DEVELOPMENT & DESIGN</small></Link>
            </h2>
        </div>

        <div className="initial-opt _akrobat _weight-black right" >
            <h2 className="_weight-normal" >
              <Link to={'photography'}>PHOTO<small className="_weight-xlight">GRAPHY & VIDEO</small></Link>
            </h2>
        </div>

        <Grip class='mid-vertical-strip' className='mid-vertical-strip'  />

        {sectionNav}

      </div>
    );
  }
}
