import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Image';
import SubDirectoryIcon from '../Image';
import imgSrc from '../../../../assets/images/sub-dir-arrow-icon.svg';

class TypeAheadItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    }
    this.onHover = this.onHover.bind(this);
  }

  onHover() {
    this.setState({ hovered: !this.state.hovered});
  }

  render() {
    const { classNames, item } = this.props;

    return (
      <li key={item.id}
      className={this.state.hovered !== false ?
        'type-ahead-item hovered' : 'type-ahead-item'}
      onMouseEnter={this.onHover}
      onMouseLeave={this.onHover}>
        <span>
          <Avatar alt={item.login}
            classNames="avatar"
            width="25" source={item.avatar_url} />
        </span>
        <span>{item.login}</span>
        <span>
          <SubDirectoryIcon
            alt="Subdirectory Arrow Icon"
            source={imgSrc}
            width="13" />
        </span>
      </li>
    );
  }
}

TypeAheadItem.defaultProps = {
  classNames: PropTypes.string
}

TypeAheadItem.propTypes = {
  children: PropTypes.element.isRequired
};

export default TypeAheadItem;
