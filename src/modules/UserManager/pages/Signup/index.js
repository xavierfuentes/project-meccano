import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import SignupForm from '../../components/SignupForm';
import { signup } from '../../data/Signup/actions';

const Signup = ({ handleSignup }) => (
  <article>
    Sign Up Page

    <div>
      <SignupForm onSubmit={handleSignup} />
    </div>

    <div>
      <button onClick={() => handleSignup({ provider: 'google' })}>Google</button>
    </div>
  </article>
);

Signup.propTypes = {
  handleSignup: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleSignup: signupData => dispatch(signup(signupData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
