import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import PrivateRoute from '../../containers/PrivateRoute/PrivateRoute';
import SigninPage from '../../containers/SigninPage/SigninPage';
import SignupPage from '../../containers/SignupPage/SignupPage';
import ProfilePageLayout from '../../components/ProfilePageLayout/ProfilePageLayout';

import { USER_MANAGER_PATH } from '../../data/constants';
import { SIGNIN_PATH, SIGNUP_PATH, PROFILE_PATH, SIGNIN_SUCCESS_REDIRECT } from '../../data/Auth/constants';

const UserManagerPageLayout = () =>
  <Switch>
    <Route path={SIGNIN_PATH} component={SigninPage} />
    <Route path={SIGNUP_PATH} component={SignupPage} />
    <PrivateRoute path={PROFILE_PATH} component={ProfilePageLayout} />

    <Redirect from={USER_MANAGER_PATH} to={SIGNIN_SUCCESS_REDIRECT} />
  </Switch>;

UserManagerPageLayout.propTypes = {};

UserManagerPageLayout.defaultProps = {};

export default UserManagerPageLayout;
