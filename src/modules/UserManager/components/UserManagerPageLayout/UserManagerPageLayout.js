import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '../../containers/PrivateRoute/PrivateRoute';
import SigninPage from '../../containers/SigninPage/SigninPage';
import SignupPage from '../../containers/SignupPage/SignupPage';
import ProfilePageLayout from '../../components/ProfilePageLayout/ProfilePageLayout';

import { SIGNIN_PATH, SIGNUP_PATH, PROFILE_PATH } from '../../data/Auth/constants';

const UserManagerPageLayout = () =>
  <article>
    User container

    <Switch>
      <Route exact path={SIGNIN_PATH} component={SigninPage} />
      <Route exact path={SIGNUP_PATH} component={SignupPage} />
      <PrivateRoute path={PROFILE_PATH} component={ProfilePageLayout} />
    </Switch>
  </article>;

UserManagerPageLayout.propTypes = {};

UserManagerPageLayout.defaultProps = {};

export default UserManagerPageLayout;
