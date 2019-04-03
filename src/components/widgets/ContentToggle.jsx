import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToggleIcon from './ToggleIcon';

class ContentToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showContent: false,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    const { showContent } = this.state;

    this.setState({ showContent: !showContent });
  }


  render() {
    const { children, showText, hideText } = this.props,
      { showContent } = this.state,
      defaultText = showContent === true ? hideText : showText;

    return (
      <div className="content-toggle">
        <div className="toggle-text" onClick={this.handleOnClick} role="none">
          {defaultText}
          <ToggleIcon toggle={showContent} />
        </div>
        {showContent === true && children}
      </div>
    );
  }
}

ContentToggle.propTypes = {
  children: PropTypes.element.isRequired,
  showText: PropTypes.string.isRequired,
  hideText: PropTypes.string.isRequired,
};

export default ContentToggle;
