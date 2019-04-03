import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ children, classNames }) => (
  <div className={classNames !== '' ? `page ${classNames}` : 'page'}>
    {children}
  </div>
);

Page.defaultProps = {
  classNames: '',
};

Page.propTypes = {
  children: PropTypes.shape({}).isRequired,
  classNames: PropTypes.string,
};

export default Page;
