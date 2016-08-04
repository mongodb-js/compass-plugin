const app = require('ampersand-app');
const {{pascalcase name}}Component = require('./lib/component');
const {{pascalcase name}}Action = require('./lib/action');
const {{pascalcase name}}Store = require('./lib/store');

/**
 * Activate all the components in the {{capitalcase name}} package.
 */
function activate() {
  app.appRegistry.registerComponent('{{pascalcase scope}}:{{pascalcase name}}', {{pascalcase name}}Component);
  app.appRegistry.registerAction('{{pascalcase name}}Action', {{pascalcase name}}Action);
  app.appRegistry.registerStore('{{pascalcase name}}Store', {{pascalcase name}}Store);
}

/**
 * Deactivate all the components in the {{capitalcase name}} package.
 */
function deactivate() {
  app.appRegistry.deregisterComponent('{{pascalcase scope}}:{{pascalcase name}}');
  app.appRegistry.deregisterAction('{{pascalcase name}}Action');
  app.appRegistry.deregisterStore('{{pascalcase name}}Store');
}

module.exports.activate = activate;
module.exports.deactivate = deactivate;
