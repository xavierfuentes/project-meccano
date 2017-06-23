import { connect } from 'react-redux';

import SigninLayout from '../../components/SigninLayout/SigninLayout';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  handleSignin: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninLayout);
