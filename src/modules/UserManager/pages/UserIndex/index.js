import React from 'react';
import { Route } from 'react-router-dom';

import Signin from '../Signin';
import Signup from '../Signup';

const UserIndex = ({ match }) => (
  <article>
    <Route exact path={`${match.url}/signin`} component={Signin} />
    <Route exact path={`${match.url}/signup`} component={Signup} />
  </article>
);

UserIndex.propTypes = {
  match: React.PropTypes.shape({
    url: React.PropTypes.string,
  }),
};

UserIndex.defaultProps = {
  match: {
    ur: '/user',
  },
};

export default UserIndex;
