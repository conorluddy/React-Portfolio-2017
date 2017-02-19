/*
  App component description goes here, please!

  To import this elsewhere:
  import App from './components/App/App';
*/

import React from 'react';
import Navi from '../Navi/Navi';

export default class App extends React.Component {

  constructor(props) {
     super(props);

     this.state = {
       navmode: false,
       activeSection: 'photography'
     };

     // This binding is necessary to make `this` work in the callback
     this.setSectionPhotography = this.setSectionPhotography.bind(this);
     this.setSectionSoftware = this.setSectionSoftware.bind(this);
  }

  setSectionPhotography(e) {
    e.preventDefault();
    this.setState({
      activeSection: 'photography'
    });
  }

  setSectionSoftware(e) {
    e.preventDefault();
    this.setState({
      activeSection: 'software'
    });
  }


  render() {
    return (
      <div className="cpnt-app">

        <Navi active={this.state.navmode} />

        {/* add this */}
        {this.props.children}


      </div>
    );
  }
};
