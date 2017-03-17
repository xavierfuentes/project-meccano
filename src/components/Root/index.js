import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom'

import Home from '../../pages/Home'
import UserManager from '../../modules/UserManager'

import './reset.css';
import 'sanitize.css/sanitize.css';
import 'semantic-ui-css/semantic.css';

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
      <Route exact path='/' component={Home}/>
      <Route path='/user' component={UserManager}/>
    </main>
  </article>
)

export default Root;
