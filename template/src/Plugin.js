import React, { Component } from 'react';
import { StoreConnector } from 'hadron-react-components';
import {{pascalcase name}} from 'components/{{name}}';
import store from 'stores';
import actions from 'actions';

// Import global less file. Note: these styles WILL NOT be used in compass, as compass provides its own set
// of global styles. If you are wishing to style a given component, you should be writing a less file per
// component as per the CSS Modules ICSS spec. @see components/ToggleButton for an example.
if (process.env.NODE_ENV !== 'test') {
  require('less/index.less');
}

class Plugin extends Component {
  static displayName = '{{pascalcase name}}Plugin';

  /**
   * Connect the Plugin to the store and render.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <StoreConnector store={store}>
        <{{pascalcase name}} actions={actions} {...this.props} />
      </StoreConnector>
    );
  }
}

export default Plugin;
export { Plugin };
