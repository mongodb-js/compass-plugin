import {{pascalcase name}}Plugin from './Plugin';
import {{pascalcase name}}Actions from 'actions';
import {{pascalcase name}}Store from 'stores';

/**
 * A sample role for the component.
 */
const ROLE = {
  name: '{{ pascalcase name }}',
  component: {{pascalcase name}}Plugin
};

/**
 * Activate all the components in the {{capitalcase name}} package.
 */
function activate(appRegistry) {
  // Register the {{pascalcase name}}Plugin as a role in Compass
  //
  // Available roles are:
  //   - Instance.Tab
  //   - Database.Tab
  //   - Collection.Tab
  //   - CollectionHUD.Item
  //   - Header.Item

  appRegistry.registerRole('{{role}}', ROLE);
  appRegistry.registerAction('{{pascalcase name}}.Actions', {{pascalcase name}}Actions);
  appRegistry.registerStore('{{pascalcase name}}.Store', {{pascalcase name}}Store);
}

/**
 * Deactivate all the components in the {{capitalcase name}} package.
 */
function deactivate(appRegistry) {
  appRegistry.deregisterRole('{{role}}', ROLE);
  appRegistry.deregisterAction('{{pascalcase name}}.Actions');
  appRegistry.deregisterStore('{{pascalcase name}}.Store');
}

export default {{pascalcase name}}Plugin;
export { activate, deactivate };
