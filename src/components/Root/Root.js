import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import UserManagerPageLayout from '../../modules/UserManager/components/UserManagerPageLayout/UserManagerPageLayout';
import { USER_MANAGER_PATH } from '../../modules/UserManager/data/constants';

/* eslint-disable import/first */
import 'sanitize.css/sanitize.css';
import './reset.css'; // some more rules to fix default behaviour
import 'semantic-ui-css/semantic.css';
/* eslint-enable import/first */

const Root = () =>
  <article>
    <Switch>
      <Route path={USER_MANAGER_PATH} component={UserManagerPageLayout} />

      <Redirect to={USER_MANAGER_PATH} />
    </Switch>
  </article>;

export default Root;
