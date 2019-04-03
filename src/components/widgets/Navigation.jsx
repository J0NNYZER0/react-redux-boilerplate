import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navigation = ({ routes }) => (
  <nav>
    {routes && routes.map(el => (
      <NavLink
        key={el.id}
        activeStyle={el.activeStyle}
        exact={el.exact}
        to={el.to}
      >
        {el.linkText}
      </NavLink>
    ))}
  </nav>
);

Navigation.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Navigation;
