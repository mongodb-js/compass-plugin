const React = require('react');
const PropTypes = require('prop-types');
const ToggleButton = require('./toggle-button');

// const debug = require('debug')('mongodb-compass:{{slugcase name}}');

class {{pascalcase name}}Component extends React.Component {

  static propTypes = {
    status: PropTypes.oneOf(['enabled', 'disabled'])
  }

  static defaultProps = {
    status: 'enabled'
  }

  onToggle = () => {
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
        <h2 className="{{slugcase name}}-title">{{pascalcase name}}Component</h2>
        <p><i>{{description}}</i></p>
        <p>The current status is: <code>{this.props.status}</code></p>
        <ToggleButton onClick={this.onToggle}>Click to Toggle</ToggleButton>
      </div>
    );
  }
}

module.exports = {{pascalcase name}}Component;
