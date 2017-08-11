import Plugin from './Plugin';
import Actions from 'actions';
import Store from 'stores';

/**
 * A sample role for the component.
 */
const ROLE = {
  name: '{{ pascalcase name }}',
  component: Plugin
};

/**
 * Activate all the components in the {{capitalcase name}} package.
 */
const activate = (appRegistry) => {
  // Register the {{pascalcase name}}Component as a role in Compass
  //
  // Available roles are:
  //   - Instance.Tab
  //   - Database.Tab
  //   - Collection.Tab
  //   - CollectionHUD.Item
  //   - Header.Item

  appRegistry.registerRole('{{role}}', ROLE);
  appRegistry.registerAction('{{pascalcase name}}.Actions', Actions);
  appRegistry.registerStore('{{pascalcase name}}.Store', Store);
}

/**
 * Deactivate all the components in the {{capitalcase name}} package.
 */
const deactivate = (appRegistry) => {
  appRegistry.deregisterRole('{{role}}', ROLE);
  appRegistry.deregisterAction('{{pascalcase name}}.Actions');
  appRegistry.deregisterStore('{{pascalcase name}}.Store');
}

export default Plugin;

export {
  Plugin as {{pascalcase name}}Plugin,
  activate,
  deactivate
};