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
  global.hadronApp.appRegistry.registerRole('{{role}}', ROLE);
  global.hadronApp.appRegistry.registerAction('{{pascalcase name}}.Actions', {{pascalcase name}}Actions);
  global.hadronApp.appRegistry.registerStore('{{pascalcase name}}.Store', {{pascalcase name}}Store);
}

/**
 * Deactivate all the components in the {{capitalcase name}} package.
 */
function deactivate() {
  global.hadronApp.appRegistry.deregisterRole('{{role}}', ROLE);
  global.hadronApp.appRegistry.deregisterAction('{{pascalcase name}}.Actions');
  global.hadronApp.appRegistry.deregisterStore('{{pascalcase name}}.Store');
}

module.exports = {{pascalcase name}}Component;
module.exports.activate = activate;
module.exports.deactivate = deactivate;
