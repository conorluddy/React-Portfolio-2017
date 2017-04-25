/*
  LoadingStatus component description goes here, please!

  To import this elsewhere:
  import LoadingStatus from '../LoadingStatus/LoadingStatus';
*/

import React from 'react'

export default class LoadingStatus extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let content = '';
    let classNames = 'cpnt-loading-status';

    if ( this.props.isLoading ) {
      classNames = 'cpnt-loading-status is-loading';
      content = <div>FETCHING CONTENT...</div>;
    } else {
      classNames = 'cpnt-loading-status';
      content = '';
    }

    return (
      <div className={classNames}>
        {content}
        {this.props.children}
      </div>
    );
  }
}
