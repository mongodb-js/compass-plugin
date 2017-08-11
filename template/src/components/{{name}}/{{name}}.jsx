import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ToggleButton from 'components/toggleButton';

class {{pascalcase name}} extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    status: PropTypes.oneOf(['enabled', 'disabled'])
  };

  static defaultProps = {
    status: 'enabled'
  };

  static displayName = '{{pascalcase name}}Component';

  onClick = () => {
    this.props.actions.toggleStatus();
  }

  /**
   * Render {{pascalcase name}} component.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <div className="{{slugcase name}}">
        <h2 className="{{slugcase name}}-title">{{pascalcase name}} Component</h2>
        <p><i>{{description}}</i></p>
        <p>The current status is: <code>{this.props.status}</code></p>
        <ToggleButton onClick={this.onClick} />
      </div>
    );
  }
}

export default {{pascalcase name}};
export { {{pascalcase name}} };
