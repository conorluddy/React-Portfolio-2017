/*
  NavigationSection component description goes here, please!

  To import this elsewhere:
  import NavigationSection from './components/NavigationSection/NavigationSection';
*/

import React from 'react'
import { Link, IndexLink } from 'react-router';
import Grip from '../Grip/Grip';

export default class NavigationSection extends React.Component {

  render() {

    let innerClasses = this.props.section + " inner " + this.props.side;
    let navList = this.props.navList;

    return (
      <div className="cpnt-nav-section">
        <div className={innerClasses} >

          <ul className="nav-list">
            {navList.map((title) =>
              <li className="_akrobat _weight-normal">
                <Link to='/' >{title}</Link>
                <Grip className="nav-items"/>
              </li>
            )}
          </ul>

        </div>
      </div>
    );
  }



}
