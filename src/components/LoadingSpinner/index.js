import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Loading } from '../../assets/icons/loading-spinner.svg';

const LoadingSpinner = ({ isLoading }) =>
  isLoading ? (
    <div className="loading-spinner-container">
      <Loading />
    </div>
  ) : null;

LoadingSpinner.defaultProps = {
  isLoading: false
};

LoadingSpinner.propTypes = {
  isLoading: PropTypes.bool
};

export default LoadingSpinner;
