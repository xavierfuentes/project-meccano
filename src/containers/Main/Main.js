import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';

import Dashboard from '../../components/Dashboard/Dashboard';
import NotFound from '../../components/NotFound/NotFound';

const components = {
  dashboard: Dashboard,
  login: <div>login</div>,
};

const Main = ({ route }) => {
  const segment = route ? route.name.split('.')[0] : undefined;

  return createElement(components[segment] || NotFound);
};

Main.propTypes = {
  route: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(() => routeNodeSelector(''))(Main);
