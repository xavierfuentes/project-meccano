import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '../../containers/PrivateRoute';
import Signin from '../Signin';
import Signup from '../Signup';
import Profile from '../Profile';

import { SIGNIN_PATH, SIGNUP_PATH, PROFILE_PATH } from '../../data/Auth/constants';

const UserIndex = () =>
  <article>
    User container

    <Switch>
      <Route exact path={SIGNIN_PATH} component={Signin} />
      <Route exact path={SIGNUP_PATH} component={Signup} />
      <PrivateRoute path={PROFILE_PATH} component={Profile} />
    </Switch>
  </article>;

UserIndex.propTypes = {};

UserIndex.defaultProps = {};

export default UserIndex;
