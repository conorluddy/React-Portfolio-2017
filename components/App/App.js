/*
  App component
  To import this elsewhere:
  import App from './components/App/App';
*/

import React from 'react';
import Navigation from '../Navigation/Navigation';
import FullHero from '../FullHero/FullHero';

export default class App extends React.Component {

  render() {
    return (
      <div className="cpnt-app">

        <FullHero imgSrc="assets/images/hero/mockup.jpg" />
        <Navigation />

        {this.props.children}

      </div>
    );
  }
};
