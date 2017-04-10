const app = require('hadron-app');
const {{pascalcase name}}Component = require('./lib/components');
const {{pascalcase name}}Actions = require('./lib/actions');
const {{pascalcase name}}Store = require('./lib/stores');

/**
 * Activate all the components in the {{capitalcase name}} package.
 */
function activate() {
  app.appRegistry.registerComponent('{{pascalcase scope}}:{{pascalcase name}}', {{pascalcase name}}Component);
  app.appRegistry.registerAction('{{pascalcase name}}Actions', {{pascalcase name}}Actions);
  app.appRegistry.registerStore('{{pascalcase name}}Store', {{pascalcase name}}Store);
}

/**
 * Deactivate all the components in the {{capitalcase name}} package.
 */
function deactivate() {
  app.appRegistry.deregisterComponent('{{pascalcase scope}}:{{pascalcase name}}');
  app.appRegistry.deregisterAction('{{pascalcase name}}Actions');
  app.appRegistry.deregisterStore('{{pascalcase name}}Store');
}

module.exports = {{pascalcase name}}Component;
module.exports.activate = activate;
module.exports.deactivate = deactivate;
