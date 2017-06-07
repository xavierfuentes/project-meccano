import { connect } from 'react-redux';

import { signupRequest } from '../../data/Auth/actions';
import SignupPageLayout from '../../components/SignupPageLayout/SignupPageLayout';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  handleSignup: signupRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPageLayout);
