import { connect } from 'react-redux';

import { signinRequest, signupRequest } from '../../data/Auth/actions';
import SignupPageLayout from '../../components/SignupPageLayout/SignupPageLayout';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  handleSignin: signinRequest,
  handleSignup: signupRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPageLayout);
