import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AppNavBarLayout = ({ isAuthenticated }) =>
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      {isAuthenticated
        ? <li><Link to="/user/signout">Sign out</Link></li>
        : <li><Link to="/user/signin">Sign in</Link></li>}
    </ul>
  </nav>;

AppNavBarLayout.propTypes = {
  isAuthenticated: PropTypes.bool,
};

AppNavBarLayout.defaultProps = {
  isAuthenticated: false,
};

export default AppNavBarLayout;
