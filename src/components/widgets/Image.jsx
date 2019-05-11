import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
  alt, classNames, source, width,
}) => (
  <img
    alt={alt}
    className={classNames !== '' && classNames}
    width={width}
    src={source}
  />
);

Image.defaultProps = {
  classNames: PropTypes.string,
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  source: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default Image;
