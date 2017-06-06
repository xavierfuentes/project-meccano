import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { SIGNIN_PATH } from '../../modules/UserManager/data/Auth/constants';

const AppNavBarLayout = ({ handleSignout, isAuthenticated, currentUser }) =>
  <nav>
    {isAuthenticated
      ? <article>
          Hello {currentUser.email}! <button onClick={handleSignout}>Sign out</button>
        </article>
      : <ul>
          <li><Link to={SIGNIN_PATH}>Sign in</Link></li>
        </ul>}
  </nav>;

AppNavBarLayout.propTypes = {
  currentUser: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }),
  handleSignout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

AppNavBarLayout.defaultProps = {
  currentUser: null,
};

export default AppNavBarLayout;
