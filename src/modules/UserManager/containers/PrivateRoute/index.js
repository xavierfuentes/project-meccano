import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { userIsAuthenticatedSelector } from '../../data/Auth/selectors';
import { SIGNIN_PATH } from '../../data/Auth/constants';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      isAuthenticated
        ? <Component {...props} />
        : <Redirect to={{ pathname: SIGNIN_PATH, state: { from: props.location } }} />}
  />;

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func, // stateless component
    PropTypes.instanceOf(React.PureComponent),
    PropTypes.instanceOf(React.Component),
  ]).isRequired,
  isAuthenticated: PropTypes.bool,
  location: PropTypes.string,
};

PrivateRoute.defaultProps = {
  isAuthenticated: false,
  location: '',
};

const mapStateToProps = state => ({
  isAuthenticated: userIsAuthenticatedSelector(state),
});

export default connect(mapStateToProps)(PrivateRoute);
