import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { userAuthenticatedSelector } from '../../data/Auth/selectors';
import { USER_MANAGER_PATH } from '../../data/constants';
import { SIGNIN_PATH } from '../../data/Auth/constants';

const PrivateRoute = ({ component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: `${USER_MANAGER_PATH}${SIGNIN_PATH}`,
              state: { from: props.location },
            }}
          />}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
  isAuthenticated: PropTypes.bool,
  location: PropTypes.string,
};

PrivateRoute.defaultProps = {
  isAuthenticated: false,
  location: null,
};

const mapStateToProps = state => ({
  isAuthenticated: userAuthenticatedSelector(state),
});

export default connect(mapStateToProps)(PrivateRoute);
