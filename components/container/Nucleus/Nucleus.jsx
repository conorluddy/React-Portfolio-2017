/*
  Nucleus
  Stateful Container Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import Nucleus from '../../Nucleus/Nucleus.jsx';
*/

import React from 'react';
import ContentTree from '../../../tree.json';
import Navigation from '../Navigation/Navigation.jsx';

class Nucleus extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navActive: false
    };

    this.setNavActive = this.setNavActive.bind(this);
  }

  setNavActive(io) {//io = 1/0 = on/off
    this.setState({navActive: io});
  }

  getClassNames() {
    //This is for site effects, not for hiding nav
    return this.state.navActive ? 'cpnt-nucleus page-nav-active' : 'cpnt-nucleus page-nav-hidden';
  }

  render() {
    const section = this.props.location.pathname.toLowerCase().indexOf('photography') > -1 ? 'photo' : 'dev';

    return (
      <div className={this.getClassNames()}>

        <Navigation tree={ContentTree} setNavActive={this.setNavActive} routeSection={section} />
        {this.props.children}

      </div>
    );
  }
}

export default Nucleus;
