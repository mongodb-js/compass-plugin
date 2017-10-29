import Reflux from 'reflux';
import StateMixin from 'reflux-state-mixin';
import {{pascalcase name}}Actions from 'actions';

const debug = require('debug')('mongodb-compass:stores:{{slugcase name}}');

/**
 * {{capitalcase name}} store.
 */
const {{pascalcase name}}Store = Reflux.createStore({
  /**
   * adds a state to the store, similar to React.Component's state
   * @see https://github.com/yonatanmn/Super-Simple-Flux#reflux-state-mixin
   *
   * If you call `this.setState({...})` this will cause the store to trigger
   * and push down its state as props to connected components.
   */
  mixins: [StateMixin.store],

  /**
   * listen to all actions defined in ../actions/index.js
   */
  listenables: {{pascalcase name}}Actions,

  /**
   * Initialize everything that is not part of the store's state. This happens
   * when the store is required and instantiated. Stores are singletons.
   */
  init() {
  },

  /**
   * This method is called when all plugins are activated. You can register
   * listeners to other plugins' stores here, e.g.
   *
   * appRegistry.getStore('OtherPlugin.Store').listen(this.otherStoreChanged.bind(this));
   *
   * If this plugin does not depend on other stores, you can delete the method.
   *
   * @param {Object} appRegistry - app registry containing all stores and components
   */
  // eslint-disable-next-line no-unused-vars
  onActivated(appRegistry) {
    // Events emitted from the app registry:
    //
    // appRegistry.on('application-intialized', (version) => {
    //   // Version is string in semver format, ex: "1.10.0"
    // });
    //
    // appRegistry.on('data-service-intialized', (dataService) => {
    //   // dataService is not yet connected. Can subscribe to events.
    //   // DataService API: https://github.com/mongodb-js/data-service/blob/master/lib/data-service.js
    // });
    //
    // appRegistry.on('data-service-connected', (error, dataService) => {
    //   // dataService is connected or errored.
    //   // DataService API: https://github.com/mongodb-js/data-service/blob/master/lib/data-service.js
    // });
    //
    // appRegistry.on('collection-changed', (namespace) => {
    //   // The collection has changed - provides the current namespace.
    //   // Namespace format: 'database.collection';
    //   // Collection selected: 'database.collection';
    //   // Database selected: 'database';
    //   // Instance selected: '';
    // });
    //
    // appRegistry.on('database-changed', (namespace) => {
    //   // The database has changed.
    //   // Namespace format: 'database.collection';
    //   // Collection selected: 'database.collection';
    //   // Database selected: 'database';
    //   // Instance selected: '';
    // });
    //
    // appRegistry.on('query-applied', (queryState) => {
    //   // The query has changed and the user has clicked "filter" or "reset".
    //   // queryState format example:
    //   //   {
    //   //     filter: { name: 'testing' },
    //   //     project: { name: 1 },
    //   //     sort: { name: -1 },
    //   //     skip: 0,
    //   //     limit: 20,
    //   //     ns: 'database.collection'
    //   //   }
    // });
  },

  /**
   * Initialize the {{capitalcase name}} store state. The returned object must
   * contain all keys that you might want to modify with this.setState().
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
    debug('{{pascalcase name}} store changed from', prevState, 'to', this.state);
  }
});

export default {{pascalcase name}}Store;
export { {{pascalcase name}}Store };
