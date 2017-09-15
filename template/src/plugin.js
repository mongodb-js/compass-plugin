import React, { Component } from 'react';
import { StoreConnector } from 'hadron-react-components';
import {{pascalcase name}} from 'components/{{slugcase name}}';
import store from 'stores';
import actions from 'actions';

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
