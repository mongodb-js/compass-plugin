const app = require('ampersand-app');
const {{pascalcase name}} = require('./lib/component');

/**
 * Activate all the components in the {{capitalcase name}} package.
 */
function activate() {
  app.componentRegistry.register({{pascalcase name}}, { role: '{{pascalcase scope}}:{{pascalcase name}}' });
}

/**
 * Deactivate all the components in the {{capitalcase name}} package.
 */
function deactivate() {
  app.componentRegistry.deregister({{pascalcase name}});
}

module.exports.activate = activate;
module.exports.deactivate = deactivate;
