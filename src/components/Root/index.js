import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from '../../pages/Home'
import UserManager from '../../modules/UserManager'

const Root = () => (
  <Router>
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
  </Router>
)

export default Root;
