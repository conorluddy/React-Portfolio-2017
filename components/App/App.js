/*
  App component
  To import this elsewhere:
  import App from './components/App/App';
*/

import React from 'react';
import Navigation from '../Navigation/Navigation';
import FullHero from '../FullHero/FullHero';

export default class App extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       section: 'landing'
     };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.setState({section: this.props.location.pathname});
  }

  componentDidUpdate (preProps) {
    if (this.props.location.pathname !== preProps.location.pathname) {
      this.updateSection();
    }
  }

  updateSection() {
    this.setState({section: this.props.location.pathname});
  }

  render() {
    return (
      <div className="cpnt-app">

        <FullHero imgSrc="assets/images/hero/mac-candles.jpg" />

        <Navigation section={this.state.section} />

        {this.props.children}

      </div>
    );
  }
};
