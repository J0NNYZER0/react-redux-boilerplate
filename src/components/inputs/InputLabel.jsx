import React from 'react';
import PropTypes from 'prop-types';

const InputLabel = ({
  children, htmlFor, labelText, ...otherProps
}) => (
  <label htmlFor={htmlFor} {...otherProps}>
    {labelText}
    {children}
  </label>
);

InputLabel.propTypes = {
  children: PropTypes.shape([]).isRequired,
  htmlFor: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
};

export default InputLabel;
