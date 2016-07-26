const React = require('react');
const {{pascalcase name}}Store = require('../store');
const StateMixin = require('reflux-state-mixin');

const debug = require('debug')('mongodb-compass:{{slugcase name}}');


const {{pascalcase name}} = React.createClass({

  /**
   * automatically subscribe/unsubscribe to changes from the store.
   */
  mixins: [ StateMixin.connect({{pascalcase name}}Store) ],

  /**
   * Render {{capitalcase name}}.
   *
   * @returns {React.Component} The {{capitalcase name}} view.
   */
  render() {
    return (
      <div>
        <h1>I'm a {{capitalcase name}} component.</h1>
        <p>{{description}}</p>
      </div>
    );
  }
});


module.exports = {{pascalcase name}};
