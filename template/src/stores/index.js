const Reflux = require('reflux');
const {{pascalcase name}}Actions = require('../actions');
const StateMixin = require('reflux-state-mixin');
const { DataServiceStore } = require('mongodb-data-service');

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
  init() {
    DataServiceStore.listen((error, dataService) => {
      // This will happen when the data service is initialized and can be used
      // if no error is passed.
    });
  },

  /**
   * Initialize the {{capitalcase name}} store state.
   *
   * @return {Object} initial store state.
   */
  getInitialState() {
    return {
      status: 'enabled'
    };
  },

  /**
   * handlers for each action defined in ../actions/index.jsx, for example:
   */
  toggleStatus() {
    this.setState({
      status: this.state.status === 'enabled' ? 'disabled' : 'enabled'
    });
  },

  /**
   * log changes to the store as debug messages.
   * @param  {Object} prevState   previous state.
   */
  storeDidUpdate(prevState) {
    debug('{{pascalcase name}} store changed from %j to %j', prevState, this.state);
  }
});

module.exports = {{pascalcase name}}Store;
