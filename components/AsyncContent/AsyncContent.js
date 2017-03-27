/*
  AsyncContent component description goes here, please!

  To import this elsewhere:
  import AsyncContent from '../AsyncContent/AsyncContent';
*/

import React from 'react'
import axios from 'axios';

export default class AsyncContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(this.props.contentPath)
      .then(res => {
        this.setState({ pageContent: res.data });
      });
  }

  render() {
    return (
      <div>
        {this.state.pageContent}
      </div>
    );
  }

  // render() {
  //   return (
  //     <div className="cpnt-asynccontent">
  //       AsyncContent component
  //       {this.props.children}
  //     </div>
  //   );
  // }

}
