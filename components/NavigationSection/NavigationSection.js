/*
  NavigationSection component description goes here, please!

  To import this elsewhere:
  import NavigationSection from './components/NavigationSection/NavigationSection';
*/

import React from 'react'
import { Link, IndexLink } from 'react-router';
import Grip from '../Grip/Grip';
import TriggerArrow from '../TriggerArrow/TriggerArrow';

export default class NavigationSection extends React.Component {

  constructor(props) {
    super(props);

    this.clearSection = this.clearSection.bind(this);
  }

  clearSection () {
    this.props.clearSection();
  }

  render() {

    let innerClasses = this.props.section + " inner " + this.props.side;
    let navList = this.props.navList;
    let arrowDirection = this.props.side === 'right' ? 'nw' : 'ne';


console.log('navList: ', navList);


    return (
      <div className="cpnt-nav-section">
        <div className={innerClasses} >

          <ul className="nav-list">
            {navList.map((navItem, idx) =>
              <li className="_akrobat _weight-normal" key={idx}>

                <Link to={navItem.path} >{navItem.label}</Link>

                <Grip className="nav-items"/>

                <span className="big-num _akrobat _weight-normal">
                  <i className="inner">
                    {'0' + (idx + 1)}
                  </i>
                </span>

              </li>
            )}
          </ul>

          <TriggerArrow onTriggerClick={this.clearSection} nsew={arrowDirection} />

        </div>
      </div>
    );
  }



}
