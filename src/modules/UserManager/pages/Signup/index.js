import React from 'react';
import { connect } from 'react-redux';

import SignupForm from '../../components/SignupForm';
import { signupRequest } from '../../data/Signup/actions';

const Signup = ({ signupRequest }) => (
  <article>
    Sign Up Page

    <SignupForm signupRequest={signupRequest} />
  </article>
);

Signup.propTypes = {
  signupRequest: React.PropTypes.func,
};

const mapStateToProps = state => ({
  // signup: state.userManager.signup,
  signupRequest,
});

export default connect(mapStateToProps, { signupRequest })(Signup);
