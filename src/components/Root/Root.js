import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppNavBar from '../../containers/AppNavBar/AppNavBar';
import HomePageLayout from '../HomePageLayout/HomePageLayout';
import UserManagerPageLayout from '../../modules/UserManager/components/UserManagerPageLayout/UserManagerPageLayout';

/* eslint-disable import/first */
import 'sanitize.css/sanitize.css';
import './reset.css'; // some more rules to fix default behaviour
import 'semantic-ui-css/semantic.css';
/* eslint-enable import/first */

const Root = () =>
  <article>
    <AppNavBar />

    <Switch>
      <Route exact path="/" component={HomePageLayout} />
      <Route path="/user" component={UserManagerPageLayout} />
    </Switch>
  </article>;

export default Root;
