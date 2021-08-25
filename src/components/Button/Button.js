import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ buttonText, buttonType, onButtonClick, disabled }) => (
  <button
    type={buttonType}
    onClick={onButtonClick}
    className={styles.customButton}
    disabled={disabled}
  >
    {buttonText}
  </button>
);

Button.defaultProps = {
  buttonType: 'button',
  onButtonClick: () => {},
  disabled: false
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};
export default Button;
