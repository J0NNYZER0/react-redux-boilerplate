import React from 'react';
import PropTypes from 'prop-types';

const Border = ({ classNames }) => (
  <div className={classNames !== '' ? `border ${classNames}` : 'border'} />
);

Border.defaultProps = {
  classNames: '',
};

Border.propTypes = {
  classNames: PropTypes.string,
};


export default Border;
