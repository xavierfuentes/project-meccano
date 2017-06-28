import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import { startsWithSegment } from 'router5.helpers';

import NotFound from '../../components/NotFound/NotFound';
import Dashboard from '../../components/Dashboard/Dashboard';
import Properties from '../../containers/Properties/Properties';

const Main = ({ route }) => {
  const matches = startsWithSegment(route.name);

  if (matches('dashboard')) {
    return <Dashboard />;
  }

  if (matches('properties')) {
    return <Properties />;
  }

  return <NotFound />;
};

Main.propTypes = {
  route: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => {
  const selector = routeNodeSelector('');

  return {
    ...selector(state),
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
