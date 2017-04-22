/*
  ScrollPosition
  Stateful Container Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import ScrollPosition from '../../ScrollPosition/ScrollPosition.jsx';
*/

import React from 'react';

class ScrollPosition extends React.Component {

  constructor(props) {
    super(props);

    console.log('x');
    console.log(props);
    console.log(props.inner);
  }

  // // Define how the context looks like
  // getChildContext: function() {
  //   return {
  //     eventBus: this.props.eventBus
  //   }
  // }
  //
  // // Define types of elements in context
  // // We define it the same way as `propTypes`
  // childContextTypes: {
  //   eventBus: React.PropTypes.object.isRequired
  // },


  render() {

    // ScrollPosition component
    // {this.props.children}

    return (
      <div className="cpnt-scroll-position">

        {this.props.inner}

      </div>
    );
  }
}

export default ScrollPosition;
