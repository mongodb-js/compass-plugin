const React = require('react');
const PropTypes = require('prop-types');
const {{pascalcase name}}Actions = require('../actions');
const ToggleButton = require('./toggle-button');

// const debug = require('debug')('mongodb-compass:{{slugcase name}}');

class {{pascalcase name}}Component extends React.Component {

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

{{pascalcase name}}Component.propTypes = {
  status: PropTypes.oneOf(['enabled', 'disabled'])
};

{{pascalcase name}}Component.defaultProps = {
  status: 'enabled'
};

{{pascalcase name}}Component.displayName = '{{pascalcase name}}Component';

module.exports = {{pascalcase name}}Component;
