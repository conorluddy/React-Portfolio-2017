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
  }

  render() {
    return (
      <div className="cpnt-nucleus">

        <Navigation tree={ContentTree} />

        {this.props.children}

      </div>
    );
  }
}

export default Nucleus;

//<Navigation tree={ContentTree} />
