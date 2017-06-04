import { connect } from 'react-redux';

import { signinRequest } from '../../data/Auth/actions';
import { userIsAuthenticatedSelector } from '../../data/Auth/selectors';

import SigninPageLayout from '../../components/SigninPageLayout/SigninPageLayout';

const mapStateToProps = state => ({
  isAuthenticated: userIsAuthenticatedSelector(state),
});

const mapDispatchToProps = {
  handleSignin: signinRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninPageLayout);
