import React from 'react';
import PropTypes from 'prop-types';
import UpButton from './UpButton';
import DownButton from './DownButton';

const CmsSection = ({
  children, cmsActions, isLast, section,
}) => (
  <div className="cms-section">
    <div>
      {isLast !== true && (
      <UpButton
        repositionSection={cmsActions.repositionSection}
        position={section.position}
      />
      )}
    </div>
    <div className="cms-areas">
      {children}
    </div>
    <div>
      {section.position !== 0 && (
      <DownButton
        repositionSection={cmsActions.repositionSection}
        position={section.position}
      />
      )}
    </div>
  </div>
);

CmsSection.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  cmsActions: PropTypes.shape({}).isRequired,
  isLast: PropTypes.bool.isRequired,
  section: PropTypes.shape({}).isRequired,
};

export default CmsSection;
