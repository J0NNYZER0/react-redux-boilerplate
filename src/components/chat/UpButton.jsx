import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UpButton extends Component {
  constructor(props) {
    super(props);

    this.repositionSection = this.repositionSection.bind(this);
  }

  repositionSection() {
    const { repositionSection, position } = this.props;
    repositionSection(position, position + 1);
  }

  render() {
    return (
      <span className="icon up-arrow mv-btn" onClick={this.repositionSection} role="none" />
    );
  }
}

UpButton.propTypes = {
  repositionSection: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
};

export default UpButton;
