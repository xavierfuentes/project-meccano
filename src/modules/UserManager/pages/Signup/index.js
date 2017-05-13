import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import SignupForm from '../../components/SignupForm';
import { signinRequest, signupRequest } from '../../data/Auth/actions';

const Signup = ({ handleSignin, handleSignup }) => (
  <article>
    Sign Up Page

    <div>
      <SignupForm onSubmit={handleSignup} />
    </div>

    <div>
      <button onClick={() => handleSignin({ provider: 'google' })}>Google</button>
    </div>
  </article>
);

Signup.propTypes = {
  handleSignin: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  handleSignin: signinRequest,
  handleSignup: signupRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
