import React from 'react';
import PropTypes from 'prop-types';

const ChatArea = ({ area, classNames }) => (
  <div className={classNames !== '' ? `chat-area ${classNames}` : 'chat-area'}>
    {area.content}
  </div>
);

ChatArea.defaultProps = {
  classNames: '',
};

ChatArea.propTypes = {
  area: PropTypes.PropTypes.shape({}).isRequired,
  classNames: PropTypes.string,
};

export default ChatArea;
