import React from 'react';
import { Route } from 'react-router-dom';

import Signup from '../Signup';

const UserIndex = ({ match }) => (
  <article>
    <Route exact path={`${match.url}/signup`} component={Signup} />
  </article>
);

UserIndex.propTypes = {
  match: React.PropTypes.object,
};

export default UserIndex;
