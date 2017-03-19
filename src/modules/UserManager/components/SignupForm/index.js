import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';

const SignupForm = ({ handleSubmit, signupRequest }) => (
  <form onSubmit={() => handleSubmit(signupRequest)}>
    <div>
      <label htmlFor="email">Email</label>
      <Field name="email" component="input" type="email" />
    </div>

    <div>
      <label htmlFor="password">Password</label>
      <Field name="password" component="input" type="password" />
    </div>

    <button type="submit">Sign up</button>
  </form>
);

SignupForm.propTypes = {
  handleSubmit: React.PropTypes.func,
  signupRequest: React.PropTypes.func,
};

export default reduxForm({
  form: 'signup',
})(SignupForm);
