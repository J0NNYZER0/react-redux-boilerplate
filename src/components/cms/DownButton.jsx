import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DownButton extends Component {
  constructor(props) {
    super(props);
    this.repositionSection = this.repositionSection.bind(this);
  }

  repositionSection() {
    const { repositionSection, position } = this.props;
    repositionSection(position, position - 1);
  }

  render() {
    return (
      <span className="icon down-arrow mv-btn" onClick={this.repositionSection} role="none" />
    );
  }
}

DownButton.propTypes = {
  repositionSection: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
};

export default DownButton;
