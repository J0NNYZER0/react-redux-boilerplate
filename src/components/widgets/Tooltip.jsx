import React from 'react';
import PropTypes from 'prop-types';

const ToolTip = ({ children, defaultText, toolTipText }) => (
  <div className="tooltip-wrapper">
    <div className="tooltip-text">{defaultText}</div>
    {children}
    <span className="tooltip bubble">{toolTipText}</span>
  </div>
);

ToolTip.propTypes = {
  children: PropTypes.element.isRequired,
  defaultText: PropTypes.string.isRequired,
  toolTipText: PropTypes.string.isRequired,
};

export default ToolTip;
