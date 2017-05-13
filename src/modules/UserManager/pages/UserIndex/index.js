import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Signin from '../Signin';
import Signup from '../Signup';
import { SIGNIN_PATH, SIGNUP_PATH } from '../../data/Auth/constants';

const UserIndex = ({ match }) => (
  <article>
    User container

    <Route exact path={`${match.url}${SIGNIN_PATH}`} component={Signin} />
    <Route exact path={`${match.url}${SIGNUP_PATH}`} component={Signup} />
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
