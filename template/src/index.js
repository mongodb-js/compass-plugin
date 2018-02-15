import {{pascalcase name}}Plugin from './plugin';
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
 * @param {Object} appRegistry - The Hadron appRegisrty to activate this plugin with.
 **/
function activate(appRegistry) {
  // Register the {{pascalcase name}}Plugin as a role in Compass
  //
  // Available roles are:
  //   - Instance.Tab: { name: <String>, component: <React.Component>, order: <Number> }
  //   - Database.Tab: { name: <String>, component: <React.Component>, order: <Number> }
  //   - Collection.Tab: { name: <String>, component: <React.Component>, order: <Number> }
  //   - CollectionHUD.Item: { name <String>, component: <React.Component> }
  //   - Header.Item: { name: <String>, component: <React.Component>, alignment: <String> }

  appRegistry.registerRole('{{role}}', ROLE);
  appRegistry.registerStore('{{pascalcase name}}.Store', {{pascalcase name}}Store);
}

/**
 * Deactivate all the components in the {{capitalcase name}} package.
 * @param {Object} appRegistry - The Hadron appRegisrty to deactivate this plugin with.
 **/
function deactivate(appRegistry) {
  appRegistry.deregisterRole('{{role}}', ROLE);
  appRegistry.deregisterStore('{{pascalcase name}}.Store');
}

export default {{pascalcase name}}Plugin;
export { activate, deactivate };
