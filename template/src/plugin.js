import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {{pascalcase name}} from 'components/{{name}}';
import store from 'stores';

class Plugin extends Component {
  static displayName = '{{pascalcase name}}Plugin';

  /**
   * Connect the Plugin to the store and render.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <Provider store={store}>
        <{{pascalcase name}} />
      </Provider>
    );
  }
}

export default Plugin;
