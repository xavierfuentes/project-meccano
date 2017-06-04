import { connect } from 'react-redux';

import { userIsAuthenticatedSelector } from '../../modules/UserManager/data/Auth/selectors';
import AppNavBarLayout from '../../components/AppNavBarLayout/AppNavBarLayout';

const mapStateToProps = state => ({
  isAuthenticated: userIsAuthenticatedSelector(state),
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(AppNavBarLayout);
