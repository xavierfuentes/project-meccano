import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Signin from '../Signin';
import Profile from '../Profile';
import { SIGNIN_PATH, PROFILE_PATH } from '../../data/Signin/constants';

const UserIndex = ({ match }) => (
  <article>
    <Route exact path={`${match.url}${SIGNIN_PATH}`} component={Signin} />
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
