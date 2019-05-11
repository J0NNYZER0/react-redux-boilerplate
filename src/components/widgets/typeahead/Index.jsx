import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TypeAheadItem from './Item';

const TypeAhead = ({classNames, limit, suggestions}) => (
  <ul className={classNames !== undefined ?
    `type-ahead ${classNames}` : `type-ahead`}>
    {suggestions.map((el,i) => (<TypeAheadItem item={el} />))}
  </ul>
)

TypeAhead.propTypes = {
  children: PropTypes.element.isRequired,
  classNames: PropTypes.string
};

export default TypeAhead;
