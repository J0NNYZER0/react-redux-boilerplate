import React from 'react';
import PropTypes from 'prop-types';

const ToggleIcon = ({ toggle }) => (
  <span className={`icon ${toggle === true ? 'minus-icon' : 'plus-icon'}`} />
);

ToggleIcon.propTypes = {
  toggle: PropTypes.bool.isRequired,
};

export default ToggleIcon;
