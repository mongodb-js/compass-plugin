import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './ToggleButton.less';

class ToggleButton extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node
  };

  static defaultProps = {
    children: 'Toggle Status'
  };

  static displayName = 'ToggleButton';

  /**
   * Render ToggleButton.
   *
   * @returns {React.Component} the rendered component.
   */
  render() {
    return (
        <button
          className={classnames(styles.button, styles['button--ghost'], styles['button--animateFromTop'])}
          type="button"
          onClick={this.props.onClick}
        >
          <span className={classnames(styles['button-text'])}>
            {this.props.children}
          </span>
        </button>
    );
  }
}

export default ToggleButton;
export { ToggleButton };