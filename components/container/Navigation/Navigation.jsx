/*
  Navigation
  Stateful Container Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import Navigation from '../../Navigation/Navigation.jsx';
*/

import React from 'react';
import { Link, IndexLink } from 'react-router';
import Grip from '../../presentation/Grip/Grip.jsx';
import NavigationSection from '../../presentation/NavigationSection/NavigationSection.jsx';
import NavOverlay from '../../presentation/NavOverlay/NavOverlay.jsx';
import TriggerArrow from '../../presentation/TriggerArrow/TriggerArrow.jsx';


class Navigation extends React.Component {

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
    setTimeout(() => {
      this.setState({section: null});
    }, 500);
  }

  clearSection() {
    this.setState({section: 'landing'});
  }

  getClassNames() {
    return this.state.section ? '' : ' is-stashed';
  }

  componentWillMount() {
    // console.log('treetree: ', this.props.tree);
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

    if (!this.state.section) {
      sectionNav = <TriggerArrow handleClick={this.setSectionLanding} nsew='nw' />
    } else if (this.state.section === 'development') {
      sectionNav = <NavigationSection section={this.state.section} navList={devNavItems} clearSection={this.clearSection} stashNav={this.stashNav} side='right' />;
    } else if (this.state.section === 'photography') {
      sectionNav = <NavigationSection section={this.state.section} navList={photoNavItems} clearSection={this.clearSection} stashNav={this.stashNav} side='left' />;
    }

    return (
      <div className="cpnt-navigation">
        <NavOverlay className={this.getClassNames()} setSectionDevelopment={this.setSectionDevelopment} setSectionPhotography={this.setSectionPhotography} sectionNav={sectionNav} />
      </div>
    );
  }

}

export default Navigation;
