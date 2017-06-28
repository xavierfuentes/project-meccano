import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';

import RootLayout from '../../components/RootLayout/RootLayout';
import { isSignedin } from '../../data/auth/selectors';

const mapStateToProps = state => {
  const routeSelector = routeNodeSelector('');

  return {
    isSignedin: isSignedin(state),
    ...routeSelector(state),
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RootLayout);
