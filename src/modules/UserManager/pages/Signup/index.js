import React from 'react';
import { connect } from 'react-redux';

import SignupForm from '../../components/SignupForm';
import { signupRequest } from '../../data/Signup/actions';

const Signup = ({ dispatchSignupRequest }) => (
  <article>
    Sign Up Page

    <SignupForm handleSignup={dispatchSignupRequest} />
  </article>
);

Signup.propTypes = {
  dispatchSignupRequest: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ // eslint-disable-line
  // signup: state.userManager.signup,
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
const mapDispatchToProps = dispatch => ({
  dispatchSignupRequest: values => {
    dispatch(signupRequest(values));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
