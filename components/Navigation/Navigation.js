/*
  Navigation component description goes here, please!

  To import this elsewhere:
  import Navigation from './components/Navigation/Navigation';


  Navigation should contain the initial 50/50 option,
  but should also contain nav for photog and nav for software...
  These could be a component themselves...

*/

import React from 'react';
import { Link, IndexLink } from 'react-router';
import Grip from '../Grip/Grip';

export default class Navigation extends React.Component {

  constructor(props) {
     super(props);
     console.log('Navigation');
  }

  render() {
    return (
      <div className="cpnt-navigation">

        <div className="initial-opt _akrobat _weight-black left" >
            <h2 className="_weight-normal">
              WEB<small className="_weight-xlight">DEVELOPMENT & DESIGN</small>
            </h2>
        </div>

        <div className="initial-opt _akrobat _weight-black right" >
            <h2 className="_weight-normal">
              PHOTO<small className="_weight-xlight">GRAPHY & VIDEO</small>
            </h2>
        </div>

        <Grip />

      </div>
    );
  }
}
