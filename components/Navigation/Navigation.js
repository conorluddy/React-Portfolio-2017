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
import TriggerArrow from '../TriggerArrow/TriggerArrow';

export default class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      section: 'landing'
    };

    this.setSectionDevelopment = this.setSectionDevelopment.bind(this);
    this.setSectionPhotography = this.setSectionPhotography.bind(this);
    this.setSectionLanding = this.setSectionLanding.bind(this);
    this.clearSection = this.clearSection.bind(this);
    this.stashNav = this.stashNav.bind(this);
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

  setSectionLanding() {
    if (this.state.section !== 'landing') {
      this.setState({section: 'landing'});
    } else {
      this.clearSection();
    }
  }

  stashNav() {
    this.setState({
      section: null
    });
  }

  clearSection() {
    this.setState({
      section: 'landing'
    });
  }

  getClassNames() {
    let clas = 'cpnt-navigation';
    clas += this.state.section ? '' : ' is-stashed';
    return clas;
  }

  componentWillMount() {
    console.log('treetree: ', this.props.tree);

    for (var i = 0; i < this.props.tree.children.length; i++) {
      if (this.props.tree.children[i].name === 'development') {
        this.setState({
          'treeDev': this.props.tree.children[i]
        });
      }
      if (this.props.tree.children[i].name === 'photography') {
        this.setState({
          'treePhoto': this.props.tree.children[i]
        });
      }
    }
  }

  render() {
    let sectionNav = null;
    let photoNavItems = [];
    let devNavItems = [];
    let tempName;

    for (var i = 0; i < this.state.treePhoto.children.length; i++) {
      tempName = this.state.treePhoto.children[i].name;
      tempName = this.state.treePhoto.children[i].extension ? tempName.substring(0, tempName.length - this.state.treePhoto.children[i].extension.length) : tempName;

      photoNavItems.push({
        label: tempName,
        path: '/photography/' + tempName,
        md: this.state.treePhoto.children[i].path,
        children: this.state.treePhoto.children[i].children
      });
    }

    for (var i = 0; i < this.state.treeDev.children.length; i++) {
      tempName = this.state.treeDev.children[i].name;
      tempName = this.state.treeDev.children[i].extension ? tempName.substring(0, tempName.length - this.state.treeDev.children[i].extension.length) : tempName;

      devNavItems.push({
        label: tempName,
        path: '/development/' + tempName,
        md: this.state.treeDev.children[i].path,
        children: this.state.treeDev.children[i].children
      });
    }

    console.log('photoNavItems: ', photoNavItems);
    console.log('devNavItems: ', devNavItems);

    // let photoNavItems = [
      // {label: 'ABOUT', path: '/photography/about'},
      // {label: 'GEAR', path: '/photography/gear'},
      // {label: 'TUTORIALS', path: '/photography/tutorials'},
      // {label: 'BUSINESS', path: '/photography/work/business'},
      // {label: 'LANDSCAPES', path: '/photography/work/landscapes'},
      // {label: 'INTERIOR', path: '/photography/work/interior'},
      // {label: 'VIDEO', path: '/photography/video'}
    // ];
    // let devNavItems = [
    //   {label: 'ABOUT', path: '/development/about'},
    //   {label: 'PLAYGROUND', path: '/development/playground'},
    //   {label: 'TUTORIALS', path: '/development/tutorials'},
    //   {label: 'PROJECTS', path: '/development/projects'},
    //   {label: 'DESIGN', path: '/development/design'},
    // ];


    if (!this.state.section) {
      sectionNav = <TriggerArrow onTriggerClick={this.setSectionPhotography} nsew='nw' />
    } else if (this.state.section === 'development') {
      sectionNav = <NavigationSection section={this.props.section} navList={devNavItems} clearSection={this.clearSection} stashNav={this.stashNav} side='right' />;
    } else if (this.state.section === 'photography') {
      sectionNav = <NavigationSection section={this.props.section} navList={photoNavItems} clearSection={this.clearSection} stashNav={this.stashNav} side='left' />;
    }



    return (
      <div className={this.getClassNames()} >

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
