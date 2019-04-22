import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatSection from '../chat/ChatSection';
import ChatArea from '../chat/ChatArea';
import Button from '../inputs/Button';
import MessageForm from '../forms/MessageForm';

class ChatPage extends Component {
  constructor(props) {
    super(props);

    this.addSection = this.addSection.bind(this);
  }

  addSection() {
    const { chat, chatActions } = this.props,
      id = Math.random();
    chatActions.addSection({
      id,
      position: chat.sections.length,
    });
    chatActions.addArea({
      id: Math.random(),
      content: 'Some dummy content',
      section_id: id,
    });
  }

  render() {
    const { chat, chatActions } = this.props;
    return (
      <div className="chat">
        <Button
          buttonText="Add New Section"
          classNames=""
          disableButton={false}
          onClick={this.addSection}
        />
        {chat.sections && chat.sections.map((section, i, arr) => (
          <ChatSection
            key={section.id}
            chatActions={chatActions}
            position={section.position || i}
            section={section}
            isLast={i === arr.length - 1}
          >
            {chat.areas.map(
              area => section.id === area.section_id
              && <ChatArea key={area.id} area={area} />,
            )}
          </ChatSection>
        )).reverse()}
        <MessageForm />
      </div>
    );
  }
}

ChatPage.propTypes = {
  chatActions: PropTypes.shape({}).isRequired,
  chat: PropTypes.shape({}).isRequired,
};

export default ChatPage;
