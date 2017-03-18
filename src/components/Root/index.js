import React from 'react';
import { Route, Link } from 'react-router-dom';

import HomePage from '../../pages/Home';
import UserIndex from '../../modules/UserManager/pages/UserIndex';

import './reset.css';
import 'sanitize.css/sanitize.css';
import 'semantic-ui-css/semantic.css';

const Root = () => (
  <article>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
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
