/*
  App component
  To import this elsewhere:
  import App from './components/App/App';
*/

import React from 'react';
import Navigation from '../Navigation/Navigation';
import ContentTree from '../../tree.json';

export default class App extends React.Component {

  constructor(props) {
     super(props);
  }

  render() {
    console.info( 'ContentTree: ', ContentTree );

    return (
      <div className="cpnt-app">
        <Navigation tree={ContentTree} />
        {this.props.children}
      </div>
    );
  }
};
