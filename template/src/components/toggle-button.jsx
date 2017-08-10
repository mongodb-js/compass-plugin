import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToggleButton extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node
  };

  static defaultProps = {
    children: 'Toggle'
  };

  static displayName = 'ToggleButton';

  /**
   * Render ToggleButton.
   *
   * @returns {React.Component} the rendered component.
   */
  render() {
    return (
        <button
          className="compass-package-toggle-button"
          type="button"
          onClick={this.props.onClick}
        >{this.props.children}</button>
    );
  }
}

export default ToggleButton;
export { ToggleButton };