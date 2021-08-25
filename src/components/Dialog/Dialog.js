import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dialog.module.scss';
import Button from '../Button/Button';

const Dialog = ({ open, dialogTitle, message, cancelAction, okAction }) =>
  open ? (
    <div className={styles.dialogContainer}>
      <div className={styles.dialog}>
        <h2>{dialogTitle}</h2>
        <div>{message}</div>
        <div className={styles.dialogActions}>
          <Button buttonText="Cancel" onButtonClick={cancelAction} />
          <Button buttonText="Delete" onButtonClick={okAction} />
        </div>
      </div>
    </div>
  ) : null;

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
