import React from 'react';
import PropTypes from 'prop-types';
import './Dialog.scss';
import Button from '../Button';

const Dialog = ({ open, dialogTitle, message, cancelAction, okAction }) => {
  return open ? (
    <div className="dialog-container">
      <div className="dialog">
        <h2>{dialogTitle}</h2>
        <div className="dialog-body">{message}</div>
        <div className="dialog-actions">
          <Button buttonText="Cancel" onButtonClick={cancelAction} />
          <Button buttonText="Delete" onButtonClick={okAction} />
        </div>
      </div>
    </div>
  ) : null;
};

Dialog.defaultProps = {
  open: false,
  dialogTitle: '',
  message: '',
  cancelAction: () => {},
  okAction: () => {}
};

Dialog.propTypes = {
  open: PropTypes.bool,
  dialogTitle: PropTypes.string,
  message: PropTypes.string,
  cancelAction: PropTypes.func,
  okAction: PropTypes.func
};

export default Dialog;
