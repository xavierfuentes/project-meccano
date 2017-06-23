import { connect } from 'react-redux';

import SigninLayout from '../../components/SigninLayout/SigninLayout';
import { signinRequest } from '../../data/auth/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  handleSignin: signinRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninLayout);
