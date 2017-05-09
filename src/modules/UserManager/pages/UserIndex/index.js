import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Signin from '../Signin';
import Signup from '../Signup';
import Profile from '../Profile';
import { SIGNIN_PATH } from '../../data/Signin/constants';
import { SIGNUP_PATH } from '../../data/Signup/constants';
import { PROFILE_PATH } from '../../data/Profile/constants';

const UserIndex = ({ match }) => (
  <article>
    User container

    <Route exact path={`${match.url}${SIGNIN_PATH}`} component={Signin} />
    <Route exact path={`${match.url}${SIGNUP_PATH}`} component={Signup} />
    <Route exact path={`${match.url}${PROFILE_PATH}`} component={Profile} />
  </article>
);

UserIndex.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

UserIndex.defaultProps = {
  match: {
    url: '/user',
  },
};

export default UserIndex;
