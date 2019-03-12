import React from 'react';
import PropTypes from 'prop-types';

const InputLabel = ({
  classNames, labelText,
}) => (
  <label className={classNames !== '' ? classNames : ''}>
    {labelText}
  </label>
);

InputLabel.defaultProps = {
  classNames: '',
};

InputLabel.propTypes = {
  classNames: PropTypes.string,
  forVal: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
};

export default InputLabel;
