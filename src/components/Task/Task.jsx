import React, { Component, PropTypes } from 'react';

import {} from './Task.less';

export default class Task extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.string.isRequired,
  }

  render() {
    const { title, description, status } = this.props;

    return (
      <div className="task-component-root">
        <h3 className="task-title">{title}</h3>
        <p className="description muted">{description}</p>
        <div className="status">{status}</div>
      </div>
    );
  }
}