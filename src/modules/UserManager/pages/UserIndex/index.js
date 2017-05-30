import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import PrivateRoute from '../../containers/PrivateRoute';
import Signin from '../Signin';
import Signup from '../Signup';
import Profile from '../Profile';

import { USER_MANAGER_PATH } from '../../data/constants';
import { SIGNIN_PATH, SIGNUP_PATH, PROFILE_PATH } from '../../data/Auth/constants';

const UserIndex = ({ match }) => (
  <article>
    User container

    <Route exact path={`${match.url}${SIGNIN_PATH}`} component={Signin} />
    <Route exact path={`${match.url}${SIGNUP_PATH}`} component={Signup} />
    <PrivateRoute path={`${match.url}${PROFILE_PATH}`} component={Profile} />
  </article>
);

UserIndex.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

UserIndex.defaultProps = {
  match: {
    url: USER_MANAGER_PATH,
  },
};

export default UserIndex;
