import React, { Component } from 'react';
import { StoreConnector } from 'hadron-react-components';
import {{pascalcase name}} from 'components/{{name}}';
import store from 'stores';
import actions from 'actions';

// Conditionally require the global less file only if we are developing,
// as prod builds are consumed by compass which will provide a single globals CSS file.
if(process.env.NODE_ENV !== 'production') {
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
