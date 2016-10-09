import React, { Component, PropTypes } from 'react';

import {} from './WaitBar.less';

export default class WaitBar extends Component {
  static propTypes = {
    text: PropTypes.string,
  }

  render() {
    return (
      <div className="wait-bar">
        <div className="wait-bar__icon"></div>
        <div className="wait-bar__text">Loading...</div>
      </div>
    );
  }
}
