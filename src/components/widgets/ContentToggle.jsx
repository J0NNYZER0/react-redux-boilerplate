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
    const { children, showText, hideText } = this.props;
    const { showContent } = this.state;
    const defaultText = showContent === true ? hideText : showText;
    return (
      <div className="content-toggle" onClick={this.handleOnClick} onKeyDown={this.handleClick} role="none">
        <div className="toggle-text">
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
