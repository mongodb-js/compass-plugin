const React = require('react');
const StateMixin = require('reflux-state-mixin');
const {{pascalcase name}}Store = require('../store');
const {{pascalcase name}}Actions = require('../actions');
const ToggleButton = require('./toggle-button');

const debug = require('debug')('mongodb-compass:{{slugcase name}}');

const {{pascalcase name}}Component = React.createClass({
  /**
   * automatically subscribe/unsubscribe to changes from the store.
   */
  mixins: [ StateMixin.connect({{pascalcase name}}Store) ],

  onClick() {
    {{pascalcase name}}Actions.toggleStatus();
  },

  /**
   * Render RefluxCapacitor.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <div className="{{slugcase name}}">
        <h2 className="{{slugcase name}}-title">I'm a {{capitalcase name}} component.</h2>
        <p>{{description}}<p>
        <br />
        <p>This component is connected to a reflux store. It contains a <code>
          &lt;ToggleButton/&gt;</code> component (below) that triggers
          a <code>toggleStatus()</code> action in the store, which changes
          its state and causes the component to re-render.
        </p>
        <p>The current status is: <code>{this.state.status}</code></p>
        <ToggleButton onClick={this.onClick} />
      </div>
    );
  }
});


module.exports = {{pascalcase name}}Component;
