import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import { startsWithSegment } from 'router5.helpers';

/* eslint-disable import/first */
import 'sanitize.css/sanitize.css';
import './reset.css'; // some more rules to fix default behaviour
import 'semantic-ui-css/semantic.css';
/* eslint-enable import/first */

import App from '../../components/App/App';
import Signin from '../../components/Signin/Signin';
import Signup from '../../components/Signup/Signup';

class Root extends Component {
  constructor(props, context) {
    super(props);
    this.router = context.router;
  }

  render() {
    const { route, isSignedin } = this.props;
    const matches = startsWithSegment(route.name);

    if (isSignedin) {
      if (matches('signup') || matches('signin')) {
        this.router.navigate('dashboard', {}, { replace: true });
      }
      return <App />;
    }

    if (matches('signup')) {
      return <Signup />;
    }

    this.router.navigate('signin', {}, { replace: true });
    return <Signin />;
  }
}

Root.propTypes = {
  route: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  isSignedin: PropTypes.bool,
};

Root.defaultProps = {
  isSignedin: true,
};

Root.contextTypes = {
  router: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => {
  const selector = routeNodeSelector('');

  return {
    ...selector(state),
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
