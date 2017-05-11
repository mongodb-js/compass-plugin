const React = require('react');
const { StoreConnector } = require('hadron-react-components');
const {{pascalcase name}}Component = require('./{{name}}');
const Store = require('../stores');
const Actions = require('../actions');

// const debug = require('debug')('mongodb-compass:{{slugcase name}}:index');

class Connected{{pascalcase name}}Component extends React.Component {

  /**
   * Connect {{pascalcase name}}Component to store and render.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <StoreConnector store={Store}>
        <{{pascalcase name}}Component actions={Actions} {...this.props} />
      </StoreConnector>
    );
  }
}

module.exports = Connected{{pascalcase name}}Component;
