const app = require('hadron-app');
const {{pascalcase name}}Component = require('./lib/components');
const {{pascalcase name}}Actions = require('./lib/actions');
const {{pascalcase name}}Store = require('./lib/stores');

/**
 * A sample role for the component.
 */
const ROLE = {
  name: "{{ pascalcase name }}",
  component: {{pascalcase name}}Component
}

/**
 * Activate all the components in the {{capitalcase name}} package.
 */
function activate() {
  // Register the {{pascalcase name}}Component as a collection tab Role in Compass
  //
  // Note that available roles are:
  //   - Collection.Tab
  //   - CollectionStats.CollectionStatsItem
  //   - Database.Tab
  //   - Instance.Tab
  //
  app.appRegistry.registerRole('Collection.Tab', ROLE);

  app.appRegistry.registerComponent('{{pascalcase scope}}:{{pascalcase name}}', {{pascalcase name}}Component);
  app.appRegistry.registerAction('{{pascalcase name}}Actions', {{pascalcase name}}Actions);
  app.appRegistry.registerStore('{{pascalcase name}}Store', {{pascalcase name}}Store);
}

/**
 * Deactivate all the components in the {{capitalcase name}} package.
 */
function deactivate() {
  app.appRegistry.deregisterRole('Collection.Tab', ROLE);

  app.appRegistry.deregisterComponent('{{pascalcase scope}}:{{pascalcase name}}');
  app.appRegistry.deregisterAction('{{pascalcase name}}Actions');
  app.appRegistry.deregisterStore('{{pascalcase name}}Store');
}

module.exports = {{pascalcase name}}Component;
module.exports.activate = activate;
module.exports.deactivate = deactivate;
