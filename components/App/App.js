/*
  App component
  To import this elsewhere:
  import App from './components/App/App';
*/

import React from 'react';
import Navigation from '../Navigation/Navigation';

import Tree from '../../tree.json';



export default class App extends React.Component {

  constructor(props) {
     super(props);
     console.info('Appp constructor');
  }

  render() {

    console.log( 'Tree: ', Tree );

    return (
      <div className="cpnt-app">

        <Navigation content="" />

        {this.props.children}

      </div>
    );
  }
};
