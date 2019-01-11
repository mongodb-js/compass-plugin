import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ToggleButton from 'components/toggle-button';
import { toggleStatus } from 'modules/status';

import styles from './{{name}}.less';

class {{pascalcase name}} extends Component {
  static displayName = '{{pascalcase name}}Component';

  static propTypes = {
    toggleStatus: PropTypes.func.isRequired,
    status: PropTypes.oneOf(['enabled', 'disabled'])
  };

  static defaultProps = {
    status: 'enabled'
  };

  onClick = () => {
    this.props.toggleStatus();
  }

  /**
   * Render {{pascalcase name}} component.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <div className={classnames(styles.root)}>
        <h2 className={classnames(styles.title)}>{{pascalcase name}} Plugin</h2>
        <p>{{description}}</p>
        <p>The current status is: <code>{this.props.status}</code></p>
        <ToggleButton onClick={this.onClick} />
      </div>
    );
  }
}

/**
 * Map the store state to properties to pass to the components.
 *
 * @param {Object} state - The store state.
 *
 * @returns {Object} The mapped properties.
 */
const mapStateToProps = (state) => ({
  status: state.status
});

/**
 * Connect the redux store to the component.
 * (dispatch)
 */
const Mapped{{pascalcase name}} = connect(
  mapStateToProps,
  {
    toggleStatus
  },
)({{pascalcase name}});

export default Mapped{{pascalcase name}};
export { {{pascalcase name}} };
