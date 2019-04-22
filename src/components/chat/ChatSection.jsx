import React from 'react';
import PropTypes from 'prop-types';
import UpButton from './UpButton';
import DownButton from './DownButton';

const ChatSection = ({
  children, chatActions, isLast, section,
}) => (
  <div className="chat-section">
    <div>
      {isLast !== true && (
      <UpButton
        repositionSection={chatActions.repositionSection}
        position={section.position}
      />
      )}
    </div>
    <div className="chat-areas">
      {children}
    </div>
    <div>
      {section.position !== 0 && (
      <DownButton
        repositionSection={chatActions.repositionSection}
        position={section.position}
      />
      )}
    </div>
  </div>
);

ChatSection.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  chatActions: PropTypes.shape({}).isRequired,
  isLast: PropTypes.bool.isRequired,
  section: PropTypes.shape({}).isRequired,
};

export default ChatSection;
