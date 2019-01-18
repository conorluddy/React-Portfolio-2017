/*
  NavigationSection
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import NavigationSection from '../../NavigationSection/NavigationSection.jsx';
*/

import React from 'react'
import { Link, IndexLink } from 'react-router';
import Grip from '../Grip/Grip.jsx';

const NavigationSection = ({section, navList, side, postNavigate, clearSection, playAudioTick}) => {
  let innerClasses = section + " inner " + side;
  let arrowDirection = side === 'right' ? 'nw' : 'ne';

  return (
    <div className="cpnt-navigation-section">
      <div className={innerClasses} >

        <ul className="nav-list">
          {navList.map((navItem, idx) =>
            <li className="_akrobat _weight-normal" key={idx} >

              <Link to={navItem.path} activeClassName="is-active" onClick={postNavigate}  >
                {navItem.label}
              </Link>

              <Grip className="nav-items"/>

              <span className="big-num _akrobat _weight-normal">
                <i className="num-wrap">
                  {'0' + (idx + 1)}
                </i>
              </span>

            </li>
          )}
        </ul>

      </div>
    </div>
  );
};

//NavigationSection.propTypes = { children: React.PropTypes.string };
//NavigationSection.defaultProps = { children: 'Hello World!' };

export default NavigationSection;
