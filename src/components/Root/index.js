import React from 'react';
import { Route, Link } from 'react-router-dom';

import HomePage from '../../pages/Home';
import UserIndex from '../../modules/UserManager/pages/UserIndex';

/* eslint-disable import/first */
import 'sanitize.css/sanitize.css';
import './reset.css'; // some more rules to fix default behaviour
import 'semantic-ui-css/semantic.css';
/* eslint-enable import/first */

const Root = () => (
  <article>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/user/signin">Sign in</Link></li>
        <li><Link to="/user/signup">Sign up</Link></li>
      </ul>
    </nav>

    <main>
      <Route exact path="/" component={HomePage} />
      <Route path="/user" component={UserIndex} />
    </main>
  </article>
);

export default Root;
