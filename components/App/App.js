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
      navmode: false
    };
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
