import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import HomePageLayout from '../HomePageLayout/HomePageLayout';
import UserManagerPageLayout from '../../modules/UserManager/components/UserManagerPageLayout/UserManagerPageLayout';

/* eslint-disable import/first */
import 'sanitize.css/sanitize.css';
import './reset.css'; // some more rules to fix default behaviour
import 'semantic-ui-css/semantic.css';
/* eslint-enable import/first */

const Root = () =>
  <article>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/user/signin">Sign in</Link></li>
        <li><Link to="/user/signup">Sign up</Link></li>
        <li><Link to="/user/profile">Profile</Link></li>
      </ul>
    </nav>

    <main>
      <Switch>
        <Route exact path="/" component={HomePageLayout} />
        <Route path="/user" component={UserManagerPageLayout} />
      </Switch>
    </main>
  </article>;

export default Root;
