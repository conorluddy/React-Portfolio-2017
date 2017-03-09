/*
  App component
  To import this elsewhere:
  import App from './components/App/App';
*/

import React from 'react';
import Navigation from '../Navigation/Navigation';

export default class App extends React.Component {

  constructor(props) {
     super(props);
     console.info('Appp constructor');
  }

  render() {
    return (
      <div className="cpnt-app">

        <Navigation />

        {this.props.children}

      </div>
    );
  }
};
