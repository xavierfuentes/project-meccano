import { connect } from 'react-redux';

import { signinRequest } from '../../data/Auth/actions';
import { isAuthenticatedSelector } from '../../data/Auth/selectors';

import SigninPageLayout from '../../components/SigninPageLayout/SigninPageLayout';

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticatedSelector(state),
});

const mapDispatchToProps = {
  handleSignin: signinRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninPageLayout);
