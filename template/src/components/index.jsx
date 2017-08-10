import React, { Component } from 'react';
import { StoreConnector } from 'hadron-react-components';
import {{pascalcase name}}Component from './{{name}}';
import Store from 'stores';
import Actions from 'actions';

// Import the global less file
import 'less/index.less';

// const debug = require('debug')('mongodb-compass:{{slugcase name}}:index');

class Connected{{pascalcase name}}Component extends Component {
  /**
   * Connect {{pascalcase name}}Component to store and render.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <StoreConnector store={Store}>
        <{{pascalcase name}}Component actions={Actions} {...this.props} />
      </StoreConnector>
    );
  }
}

Connected{{pascalcase name}}Component.displayName = 'Connected{{pascalcase name}}Component';

export default Connected{{pascalcase name}}Component;
