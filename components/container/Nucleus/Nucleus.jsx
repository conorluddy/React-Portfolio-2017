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
import Social from '../../presentation/Social/Social.jsx';

class Nucleus extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navActive: true,
      socialActive: false
    };

    this.setNavActive = this.setNavActive.bind(this);
    this.toggleSocialActive = this.toggleSocialActive.bind(this);
  }

  setNavActive(io) {//io = 1/0 = on/off
    this.setState({navActive: io});
  }

  toggleSocialActive() {//io = 1/0 = on/off
    this.setState({socialActive: ! this.state.socialActive});
  }

  getClassNames() {
    let clas = 'cpnt-nucleus';

    if (this.state.navActive) clas += ' page-nav-active ';
    else clas += ' page-nav-hidden ';
    if (this.state.socialActive) clas += ' page-social-active ';
    else clas += ' page-social-hidden ';

    return clas;
  }

  render() {
    const section = this.props.location.pathname.toLowerCase().indexOf('photography') > -1 ? 'photo' : 'dev';

    return (
      <div className={this.getClassNames()}>

        <Navigation tree={ContentTree} setNavActive={this.setNavActive} routeSection={section} />

        <Social showing={this.state.socialActive} toggleSocialActive={this.toggleSocialActive} />

        {this.props.children}

      </div>
    );
  }
}

export default Nucleus;
