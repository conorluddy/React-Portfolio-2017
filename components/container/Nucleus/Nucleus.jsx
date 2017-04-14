/*
  Nucleus
  Stateful Container Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import Nucleus from '../../Nucleus/Nucleus.jsx';
*/

import React from 'react';

class Nucleus extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cpnt-nucleus">
        Nucleus component
        {this.props.children}
      </div>
    );
  }
}

export default Nucleus;
