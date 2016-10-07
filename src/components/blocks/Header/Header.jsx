import React, { Component, PropTypes } from 'react';
import { } from './Header.less';

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
  }

  render() {
    const title = this.props.title;
    return (
      <header>
        <h1 className="title">{title}</h1>
      </header>
    );
  }
}
