import { connect } from 'react-redux';

import SigninLayout from '../../components/SigninLayout/SigninLayout';
import { signin } from '../../data/auth/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  handleSignin: signin,
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninLayout);
