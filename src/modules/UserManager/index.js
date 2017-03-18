import React from 'react';
import { Route } from 'react-router-dom';

import Signin from './pages/Signin';
import Signup from './pages/Signup';

const UserManager = ({ match }) => (
  <article>
    <Route exact path={`${match.url}/signin`} component={Signin} />
    <Route exact path={`${match.url}/signup`} component={Signup} />
  </article>
);

UserManager.propTypes = {
  match: React.PropTypes.object,
};

export default UserManager;
