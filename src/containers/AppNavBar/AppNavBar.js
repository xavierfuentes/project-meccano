import { connect } from 'react-redux';

import { signoutRequest } from '../../modules/UserManager/data/Auth/actions';
import { authenticatedUserSelector, isAuthenticatedSelector } from '../../modules/UserManager/data/Auth/selectors';
import AppNavBarLayout from '../../components/AppNavBarLayout/AppNavBarLayout';

const mapStateToProps = state => ({
  currentUser: authenticatedUserSelector(state),
  isAuthenticated: isAuthenticatedSelector(state),
});

const mapDispatchToProps = {
  handleSignout: signoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavBarLayout);
