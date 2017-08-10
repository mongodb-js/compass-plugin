import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {{pascalcase name}}Actions from 'actions';
import ToggleButton from './toggle-button';

// const debug = require('debug')('mongodb-compass:{{slugcase name}}');

class {{pascalcase name}}Component extends Component {
  static propTypes = {
    status: PropTypes.oneOf(['enabled', 'disabled'])
  };

  static defaultProps = {
    status: 'enabled'
  };

  static displayName = '{{pascalcase name}}Component';

  onClick() {
    {{pascalcase name}}Actions.toggleStatus();
  }

  /**
   * Render {{pascalcase name}} component.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <div className="{{slugcase name}}">
        <h2 className="{{slugcase name}}-title">{{pascalcase name}}Component</h2>
        <p><i>{{description}}</i></p>
        <p>The current status is: <code>{this.props.status}</code></p>
        <ToggleButton onClick={this.onClick} />
      </div>
    );
  }
}

export default {{pascalcase name}}Component;
