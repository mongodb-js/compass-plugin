// const {{pascalcase name}}Component = require('./lib/components');
// const {{pascalcase name}}Actions = require('./lib/actions');
// const {{pascalcase name}}Store = require('./lib/stores');

// /**
//  * A sample role for the component.
//  */
// const ROLE = {
//   name: '{{ pascalcase name }}',
//   component: {{pascalcase name}}Component
// };

// /**
//  * Activate all the components in the {{capitalcase name}} package.
//  */
// function activate(appRegistry) {
//   // Register the {{pascalcase name}}Component as a role in Compass
//   //
//   // Available roles are:
//   //   - Instance.Tab
//   //   - Database.Tab
//   //   - Collection.Tab
//   //   - CollectionHUD.Item
//   //   - Header.Item

//   appRegistry.registerRole('{{role}}', ROLE);
//   appRegistry.registerAction('{{pascalcase name}}.Actions', {{pascalcase name}}Actions);
//   appRegistry.registerStore('{{pascalcase name}}.Store', {{pascalcase name}}Store);
// }

// /**
//  * Deactivate all the components in the {{capitalcase name}} package.
//  */
// function deactivate(appRegistry) {
//   appRegistry.deregisterRole('{{role}}', ROLE);
//   appRegistry.deregisterAction('{{pascalcase name}}.Actions');
//   appRegistry.deregisterStore('{{pascalcase name}}.Store');
// }

// module.exports = {{pascalcase name}}Component;
// module.exports.activate = activate;
// module.exports.deactivate = deactivate;
