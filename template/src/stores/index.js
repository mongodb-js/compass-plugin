const Reflux = require('reflux');
const {{pascalcase name}}Actions = require('../actions');
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
  init() {
  },

  /**
   * This method is called when all packages are activated. Can be
   * removed if not needed.
   */
  onActivated() {
    // Maybe go to the global.hadronApp.appRegistry and listen to other stores or actions?
  },

  /**
   * This method is called when the data service is finished connecting.
   * If there is an error, the data service is not connected. If not, the
   * passed data service is connected.
   */
  onConnected(error, dataService) {
    // this.dataService = dataService;
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
