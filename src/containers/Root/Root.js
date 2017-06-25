import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import { startsWithSegment } from 'router5.helpers';

/* eslint-disable import/first */
import 'sanitize.css/sanitize.css';
import './reset.css'; // some more rules to fix default behaviour
import 'semantic-ui-css/semantic.css';
/* eslint-enable import/first */

import { SIGNUP_ROUTE } from '../../data/routes';
import * as authSelectors from '../../data/auth/selectors';
import App from '../../components/App/App';
import Signin from '../../containers/Signin/Signin';
import Signup from '../../components/Signup/Signup';

const Root = ({ route, isSignedin }) => {
  const matches = startsWithSegment(route.name);

  if (isSignedin) {
    return <App />;
  }

  if (matches(SIGNUP_ROUTE.name)) {
    return <Signup />;
  }

  return <Signin />;
};

Root.propTypes = {
  route: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  isSignedin: PropTypes.bool,
};

Root.defaultProps = {
  isSignedin: false,
};

const mapStateToProps = state => {
  const routeSelector = routeNodeSelector('');

  return {
    isSignedin: authSelectors.isSignedin(state),
    ...routeSelector(state),
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
