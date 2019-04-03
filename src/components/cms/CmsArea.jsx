import React from 'react';
import PropTypes from 'prop-types';

const CmsArea = ({ area, classNames }) => (
  <div className={classNames !== '' ? `cms-area ${classNames}` : 'cms-area'}>
    {area.content}
  </div>
);

CmsArea.defaultProps = {
  classNames: '',
};

CmsArea.propTypes = {
  area: PropTypes.PropTypes.shape({}).isRequired,
  classNames: PropTypes.string,
};

export default CmsArea;
