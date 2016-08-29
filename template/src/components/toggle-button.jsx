const React = require('react');

class ToggleButton extends React.Component {
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

ToggleButton.propTypes = {
  onClick: React.PropTypes.func,
  children: React.PropTypes.node
};

ToggleButton.defaultProps = {
  children: 'Toggle'
};

ToggleButton.displayName = 'ToggleButton';

module.exports = ToggleButton;
