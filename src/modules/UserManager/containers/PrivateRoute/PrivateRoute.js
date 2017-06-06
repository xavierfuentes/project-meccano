import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { isAuthenticatedSelector } from '../../data/Auth/selectors';
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
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
};

PrivateRoute.defaultProps = {
  isAuthenticated: false,
};

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticatedSelector(state),
});

export default connect(mapStateToProps)(PrivateRoute);
