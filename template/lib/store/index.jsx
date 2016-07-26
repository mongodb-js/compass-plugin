const Reflux = require('reflux');
const {{pascalcase name}}Actions = require('../action');
const StateMixin = require('reflux-state-mixin');

const debug = require('debug')('mongodb-compass:stores:{{slugcase name}}');

/**
 * {{capitalcase name}} store.
 */

const {{pascalcase name}}Store = Reflux.createStore({
  /**
   * adds a state to the store, similar to React.Component's state
   * @see https://github.com/yonatanmn/Super-Simple-Flux#reflux-state-mixin
   */
  mixins: [StateMixin.store],

  /**
   * listen to all actions defined in ../actions/index.jsx
   */
  listenables: {{pascalcase name}}Actions,

  /**
   * Initialize everything that is not part of the store's state.
   */
  init() {},

  /**
   * Initialize the {{capitalcase name}} store state.
   *
   * @return {Object} initial store state.
   */
  getInitialState() {
    return {};
  },

  /**
   * handlers for each action defined in ../actions/index.jsx, for example:
   */
  enable{{pascalcase name}}() {},
  disable{{pascalcase name}}() {},

  /**
   * log changes to the store as debug messages.
   * @param  {Object} prevState   previous state.
   */
  storeDidUpdate(prevState) {
    debug('{{pascalcase name}} store changed from %j to %j', prevState, this.state);
  }
});

module.exports = {{pascalcase name}}Store;
