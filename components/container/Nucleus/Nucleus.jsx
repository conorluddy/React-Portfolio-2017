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
    return this.state.navActive ? 'cpnt-nucleus page-nav-active' : 'cpnt-nucleus page-nav-hidden';
  }

  render() {
    return (
      <div className={this.getClassNames()}>

        <Navigation tree={ContentTree} setNavActive={this.setNavActive} />

        {this.props.children}

      </div>
    );
  }
}

export default Nucleus;

//<Navigation tree={ContentTree} />
