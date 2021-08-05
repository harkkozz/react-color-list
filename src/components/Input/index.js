import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({ placeholder, name, value, onInputChange, disabled, errorMessage, hasError, isRequired }) => {
  return (
    <div className="input-container">
      <input
        required={isRequired}
        className="custom-input"
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
        disabled={disabled}
      />
      {hasError ? <span className="error-message-container">{errorMessage}</span> : null}
    </div>
  );
};

Input.defaultProps = {
  placeholder: '',
  value: '',
  onInputChange: () => {},
  disabled: false,
  errorMessage: '',
  hasError: false
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  onInputChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool
};

export default Input;
