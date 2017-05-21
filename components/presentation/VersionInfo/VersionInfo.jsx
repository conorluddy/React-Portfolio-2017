/*
  VersionInfo
  Stateless Presentation Component

  Component description...

  To import this elsewhere (directory nesting level may vary):
  import VersionInfo from '../../VersionInfo/VersionInfo.jsx';
*/

import React from 'react';
import {version} from '../../../package.json';

const VersionInfo = (props) => {
  return (
    <div className="cpnt-version-info">
     V{version}
    </div>
  )
};

//VersionInfo.propTypes = { children: React.PropTypes.string };
//VersionInfo.defaultProps = { children: 'Hello World!' };

export default VersionInfo;
